import React from 'react';

export default class VisionBoard extends React.Component {
  render() {
    return (
      <div data-view="vision-board" className="padding-page view">
        <div id="row-vb" className="row justify-between">
          <button id="add-vb"><i id="i-add-vb" className="fa fa-plus fa-2x"></i></button>
          <div className="popup-container row justify-center align-center hidden">
            <div className="popup-box">
              <img className="img-popup" src='/images/placeholder.jpeg' />
              <form id="form-entry-vb">
              <div>
              <label htmlFor="photo-url">Photo URL</label>
              <input id="photo-url" name="photo-url" type ="text" />
              </div>
              <div>
              <label htmlFor="life-goal">Life Goal</label>
              <input id="life-goal" name="life-goal" type ="text" />
              </div>
              <div id="pop-button-container">
              <button id="cancel" className ="pop-button" type ="button">CANCEL</button>
              <button id="delete" className="pop-button" type ="button">DELETE</button>
              <input id="confirm" className="pop-button" type ="submit" value="CONFIRM" />
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
