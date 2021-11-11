import React from 'react';
import SignUp from '../pages/sign-up';

export default class SigningContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'sign-up'
    };
    this.renderSignUpOrIn = this.renderSignUpOrIn.bind(this);
  }

  renderSignUpOrIn() {
    const action = this.state.route;
    if (action === 'sign-in') {
      return null;
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
          <h2 className="logo">LifePlanner+</h2>
        </div>
      </div>
    </div>
    );
  }
}
