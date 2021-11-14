import React from 'react';
import AppContext2 from '../lib/app-context-2';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
    };
    fetch('/api/auth/sign-up', req)
      .then(res => res.json())
      .then(result => {
        const userId = result.userId;
        this.setState({ userId: userId });
      })
      .then(result => {
        req = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userId: this.state.userId
          })
        };
        fetch('/api/wol/create', req)
          .then(res => res.json())
          .then(result => {
            const { handleNavSignIn } = this.context;
            handleNavSignIn();
          })
          .catch(err => console.error(err));
      });
  }

  render() {
    return (
            <div className="row vertical-90">
              <div className="container-su">
                <h1 className= "header-su">Sign Up</h1>
                <form className="form-su" onSubmit={ this.handleSubmit }>
                  <input
                  required
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange = { this.handleChange } />
                  <input
                  required
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={ this.handleChange } />
                  <input
                  required
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={ this.handleChange } />
                  <input
                  required
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={ this.handleChange } />
                  <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={ this.handleChange } />
                  <input id="submit-su" type="submit" value="Submit" />
                </form>
              </div>
            </div>
    );
  }
}

SignUp.contextType = AppContext2;
