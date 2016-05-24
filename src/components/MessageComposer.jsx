import ArgumentInput from "./ArgumentInput";
import React from 'react';
import Textarea from 'react-textarea-autosize';
import { connect } from "react-redux";

const fixTextareaBugStyle = { minHeight: 37, resize: 'none' }

class MessageComposer extends React.Component {

  render() {
    const { args, dispatch } = this.props;
    return (
      <div className="message-composer container-fluid">
        <div className="col-md-10 col-xs-7">
          <div className="row">
            <div className="col-xs-4">
              <Textarea style={ fixTextareaBugStyle } resize={false} className="m-input" placeholder="Event" spellCheck="off"/>
            </div>
            <div className="col-xs-8">
              { args.map((arg, i) => (
                <ArgumentInput dispatch={dispatch} arg={arg} first={i == 0} key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-xs-5 col-md-2">
          <button className="btn btn-primary fill-width">Enviar</button>
        </div>
      </div>
    );
  }
}

export default connect(
  ( state, props ) => ({
    args: state.composer.args
  })
)(MessageComposer)
