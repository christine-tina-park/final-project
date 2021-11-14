import React from 'react';
import SignUp from '../pages/sign-up';
import SignIn from '../pages/sign-in';
import AppContext2 from '../lib/app-context-2';

export default class SigningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'sign-in'
    };
    this.handleNavSignUp = this.handleNavSignUp.bind(this);
    this.handleNavSignIn = this.handleNavSignIn.bind(this);
    this.renderSignUpOrIn = this.renderSignUpOrIn.bind(this);
  }

  handleNavSignUp(event) {
    this.setState({ route: 'sign-up' });
  }

  handleNavSignIn(event) {
    this.setState({ route: 'sign-in' });
  }

  renderSignUpOrIn() {
    const action = this.state.route;
    if (action === 'sign-in') {
      return (
        <SignIn>
        <a id="su-button" onClick={ this.handleNavSignUp }><h4>First time? Sign up here!</h4></a>
        </SignIn>
      );
    } else if (action === 'sign-up') {
      return <SignUp />;
    }
  }

  render() {
    const { handleNavSignIn } = this;
    const contextValue = { handleNavSignIn };
    return (
    <AppContext2.Provider value = { contextValue }>
    <div data-view="signing-container">
      <div className="background">
        <ul className="floats">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        { this.renderSignUpOrIn() }
        <div className="container-logo">
          <h2 className="logo" onClick={ this.handleNavSignIn }>LifePlanner+</h2>
        </div>
      </div>
    </div>
    </AppContext2.Provider>
    );
  }
}
