import React from 'react';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch('/api/auth/sign-in', req)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="row vertical-95">
        <div className="container-si">
          <h1>LifePlanner+</h1>
          <form className="form-si" onSubmit={ this.handleSubmit }>
            <input
            required
            name="username"
            type="text"
            placeholder="Username"
            onChange = { this.handleChange } />
            <input
            name="password"
            type="password"
              placeholder="Password"
              onChange={ this.handleChange} />
            <input id="submit-si" type="submit" value="log in" />
          </form>
          <a id="su-button" href="#sign-up"><h4>First time? Sign up here!</h4></a>
        </div>
      </div>
    );
  }
}
