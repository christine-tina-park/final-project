import React from 'react';
import SignUp from '../pages/sign-up';
import SignIn from '../pages/sign-in';

export default class SigningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'sign-in'
    };
    this.handleClickSignUp = this.handleClickSignUp.bind(this);
    this.handleClickLogo = this.handleClickLogo.bind(this);
    this.renderSignUpOrIn = this.renderSignUpOrIn.bind(this);
  }

  handleClickSignUp(event) {
    this.setState({ route: 'sign-up' });
  }

  handleClickLogo(event) {
    this.setState({ route: 'sign-in' });
  }

  renderSignUpOrIn() {
    const action = this.state.route;
    if (action === 'sign-in') {
      return (
        <SignIn>
        <a id="su-button" onClick={ this.handleClickSignUp }><h4>First time? Sign up here!</h4></a>
        </SignIn>
      );
    } else if (action === 'sign-up') {
      return <SignUp />;
    }
  }

  render() {
    return (
    <div data-view="dv-su">
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
          <h2 className="logo" onClick={ this.handleClickLogo }>LifePlanner+</h2>
        </div>
      </div>
    </div>
    );
  }
}
