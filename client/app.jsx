import React from 'react';
import SigningContainer from './components/signing-container';
import PlannerContainer from './components/planner-container';
import decodeToken from './lib/decode-token';
import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true
    };
    this.renderSigningOrPlanner = this.renderSigningOrPlanner.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    const token = window.localStorage.getItem('life-planner-jwt');
    const user = token ? decodeToken(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  renderSigningOrPlanner() {
    const userState = this.state.user;
    if (userState === null) {
      return <SigningContainer />;
    } else { return <PlannerContainer />; }
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('life-planner-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('life-planner-jwt');
    this.setState({ user: null });
  }

  render() {
    if (this.state.isAuthorizing) return null;
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value = { contextValue }>
        { this.renderSigningOrPlanner() }
      </AppContext.Provider>
    );
  }
}
