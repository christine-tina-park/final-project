require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2');
const express = require('express');
const jwt = require('jsonwebtoken');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const authorizationMiddleware = require('./authorization-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { firstName, lastName, username, password, email } = req.body;
  if (!firstName || !lastName || !username || !password || !email) {
    throw new ClientError(400, 'all fields are required');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
      insert into "users" ("firstName", "lastName", "username", "password", "email")
      values ($1, $2, $3, $4, $5)
      returning *
      `;
      const params = [firstName, lastName, username, hashedPassword, email];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
  select "userId",
         "password"
  from "users"
  where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      if (!user) {
        throw new ClientError(401, 'invalid login');
      }
      const userId = user.userId;
      const hashedPassword = user.password;
      return argon2
        .verify(hashedPassword, password)
        .then(isMatching => {
          if (!isMatching) {
            throw new ClientError(401, 'invalid login');
          }
          const payload = { userId, username };
          const token = jwt.sign(payload, process.env.TOKEN_SECRET);
          res.json({ token, user: payload });
        });
    })
    .catch(err => next(err));

});

app.post('/api/wol/create', (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    throw new ClientError(400, 'userId required');
  }
  const sql = `
      insert into "wheelOfLife" ("userId", "car", "fin", "hea", "soc", "fam", "lov", "rec", "con", "spi", "sel")
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      returning *
      `;
  const params = [userId, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  return db.query(sql, params)
    .then(result => {
      const [wof] = result.rows;
      res.status(201).json(wof);
    })
    .catch(err => next(err));
});

app.post('/api/wol/call', (req, res, next) => {
  const { userId } = req.body;
  if (!userId) {
    throw new ClientError(400, 'userId required');
  }
  const sql = `
      select
      "car", "fin", "hea", "soc", "fam", "lov", "rec", "con", "spi", "sel"
      from "wheelOfLife"
      where "userId" = $1
      returning *
      `;
  const params = [userId];
  return db.query(sql, params)
    .then(result => {
      const [wof] = result.rows;
      res.status(201).json(wof);
    })
    .catch(err => next(err));
});

app.post('/api/wof/update', (req, res, next) => {
  const { userId, car, fin, hea, soc, fam, lov, rec, con, spi, sel } = req.body;
  if (!userId) {
    throw new ClientError(400, 'userId required');
  }
  const sql = `
      `;
  const params = [userId, car, fin, hea, soc, fam, lov, rec, con, spi, sel];
  return db.query(sql, params)
    .then(result => {
      const [wof] = result.rows;
      res.status(201).json(wof);
    })
    .catch(err => next(err));
});

app.use(authorizationMiddleware);
app.use(staticMiddleware);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
