import React from 'react';
import WheelOfLife from '../pages/wheel-of-life';
import VisionBoard from '../pages/vision-board';
import MyGoals from '../pages/my-goals';
import AppContext from '../lib/app-context';

export default class PlannerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      shadedClass: 'shaded hidden',
      drawerClass: 'drawer-container closed',
      buttonClass: 'fas fa-bars fa-2x',
      route: 'Vision Board'
    };
    this.handleDrawerClick = this.handleDrawerClick.bind(this);
    this.handleShadedClick = this.handleShadedClick.bind(this);
    this.handleNavWheelOfLife = this.handleNavWheelOfLife.bind(this);
    this.handleNavVisionBoard = this.handleNavVisionBoard.bind(this);
    this.handleNavMyGoals = this.handleNavMyGoals.bind(this);
    this.renderChild = this.renderChild.bind(this);
  }

  handleDrawerClick() {
    if (this.state.drawerOpen === true) {
      this.setState({
        drawerOpen: false,
        shadedClass: 'shaded hidden',
        drawerClass: 'drawer-container closed',
        buttonClass: 'fas fa-bars fa-2x'
      });
    } else {
      this.setState({
        drawerOpen: true,
        shadedClass: 'shaded',
        drawerClass: 'drawer-container',
        buttonClass: 'fas fa-bars fa-2x dark'
      });
    }
  }

  handleShadedClick() {
    this.setState({
      drawerOpen: false,
      shadedClass: 'shaded hidden',
      drawerClass: 'drawer-container closed',
      buttonClass: 'fas fa-bars fa-2x'
    });
  }

  handleNavWheelOfLife() {
    this.setState({ route: 'Wheel of Life' });
    this.handleDrawerClick();
  }

  handleNavVisionBoard() {
    this.setState({ route: 'Vision Board' });
    this.handleDrawerClick();
  }

  handleNavMyGoals() {
    this.setState({ route: 'My Goals' });
    this.handleDrawerClick();
  }

  renderChild() {
    const action = this.state.route;
    if (action === 'Wheel of Life') {
      return (
        <WheelOfLife />
      );
    } else if (action === 'Vision Board') {
      return <VisionBoard />;
    } else if (action === 'My Goals') {
      return <MyGoals />;
    }
  }

  render() {
    const { handleSignOut } = this.context;
    return (
      <div data-view="planner-container">
        <div className="row">
          <button className="current-header">{ this.state.route }</button>
        </div>
        <div className="planner-header">
        </div>
        <i id="drawer-button" className={ this.state.buttonClass } onClick={ this.handleDrawerClick }></i>
        <div id="shaded" onClick={ this.handleShadedClick } className={ this.state.shadedClass }>
        </div>
        <div id="drawer-container" className={ this.state.drawerClass }>
          <button className="drawer-header">LifePlanner+</button>
          <button className="drawer-nav" onClick={ this.handleNavWheelOfLife }>Wheel of Life</button>
          <button className="drawer-nav" onClick={ this.handleNavVisionBoard }>Vision Board</button>
          <button className="drawer-nav" onClick={ this.handleNavMyGoals }>My Goals</button>
          <button className="drawer-nav" id="logout" onClick={ handleSignOut }>Log Out</button>
        </div>
        { this.renderChild() }
        <div className="planner-footer">
        </div>
      </div>
    );
  }
}

PlannerContainer.contextType = AppContext;
