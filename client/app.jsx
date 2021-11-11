import React from 'react';
import SigningContainer from './components/signing-container.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  render() {
    if (this.state.user === null) {
      return (
      <SigningContainer />
      );
    } else return null;
  }
}
