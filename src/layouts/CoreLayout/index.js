import React, { PropTypes } from 'react'
import core from "../../styles/core.scss";

export default class CoreLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    // Save button will be added soon, aside of connect button
    return (
      <div className="app">
        <div className="app-header">
          <div className="container">
            <h2>Socketman</h2>
          </div>
        </div>
        <div className="app-container container-fluid">
          <div className="app-content">
            <div className="app-head">
              <div className="socket-url">
                <div className="row">
                  <div className="col-xs-10">
                    <div className="input-group">
                      <input type="text" placeholder="Enter a socket url" className="form-control"/>
                      <div className="input-group-btn">
                        <button className="btn btn-default btn-params">Default Channel</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-2">
                    <div className="row">
                      <div className="col-xs-12">
                        <button className="btn btn-primary btn-connect">Conectar</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabs-header">
                <ul>
                  <li className="active">
                    <a href="">Timeline</a>
                  </li>
                  <li>
                    <a href="">Parameters</a>
                  </li>
                  <li>
                    <a href="">Authorization</a>
                  </li>
                  <li className="socket-status">
                    <span>Connected</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="app-tab-content">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
