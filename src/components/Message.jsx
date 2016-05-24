import HJson from "./HJson";
import React from 'react';
import classNames from "classnames";

export default class Message extends React.Component {
  static propTypes = {
    //message: React.PropTypes.Object,
  };

  constructor(props) {
    super(props);
  }

  get className(){
    const { expanded } = this.props.message;
    return classNames('message', {
      'expanded': expanded
    }, this.props.className
    )
  }

  render() {
    const { event, args, type } = this.props.message;
    return (
      <div className={this.className}>
        <div className="message-event">
          <span>{ event }</span>
        </div>
        <div className="message-body">
          <div className="message-arguments">
            { args.map((obj, i) => <HJson key={i} object={obj} />) }
          </div>
        </div>
      </div>
    );
  }
}
