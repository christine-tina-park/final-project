import React from 'react';
import WheelOfLife from '../pages/wheel-of-life';
import MyGoals from '../pages/my-goals';

export default class PlannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'wheel-of-life'
    };
    this.handleNavMG = this.handleNavMG.bind(this);
    this.handleNavWOL = this.handleNavWOL.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  handleNavWOL(event) {
    this.setState({ route: 'wheel-of-life' });
  }

  handleNavMG(event) {
    this.setState({ route: 'my-goals' });
  }

  renderChild() {
    const action = this.state.route;
    if (action === 'wheel-of-life') {
      return (
        <WheelOfLife />
      );
    } else if (action === 'my-goals') {
      return <MyGoals />;
    }
  }

  render() {
    return (
      <div data-view="planner-container">
        <div className="row">
          <button className="current-header">Wheel of Life</button>
        </div>
        <div className="planner-header">
        </div>
        <i id="drawer-button" className="fas fa-bars fa-2x"></i>
        <div id="shaded" className="shaded hidden">
        </div>
        <div id="drawer-container" className="drawer-container closed">
          <button className="drawer-header">LifePlanner+</button>
          <button className="drawer-nav">Wheel of Life</button>
          <button className="drawer-nav">Vision Board</button>
          <button className="drawer-nav">Goal List</button>
        </div>
        { this.renderChild() }
        <div className="planner-footer">
        </div>
      </div>
    );
  }
}
