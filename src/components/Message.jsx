import HJson from "./HJson";
import React from 'react';

export default class Message extends React.Component {
  static propTypes = {
    //message: React.PropTypes.Object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { event, args, type } = this.props.message;
    return (
      <div className="message">
        <div className="message-header">
          <div className="message-col message-event">
            <span>{ event }</span>
          </div>
          <div className="message-col message-arguments">
            { args.map((obj, i) => <HJson key={i} object={obj} />) }
          </div>
        </div>
      </div>
    );
  }
}
