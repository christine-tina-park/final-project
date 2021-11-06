import React from 'react';

export default class SignUp extends React.Component {
  render() {
    return (
      <>
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
            <div className="row vertical-90">
              <div className="container-su">
                <h1>Sign Up</h1>
                <form className="form-su">
                  <input name="firstName" type="text" placeholder="First Name" />
                  <input name="lastName" type="text" placeholder="Last Name" />
                  <input name="userId" type="text" placeholder="User ID" />
                  <input name="password" type="password" placeholder="Password" />
                  <input name="email" type="email" placeholder="Email" />
                  <input id="submit-su" type="submit" value="Submit" />
                </form>
              </div>
            </div>
            <div className="container-logo">
              <h2 className="logo">LifePlanner+</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
