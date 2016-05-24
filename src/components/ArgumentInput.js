import classNames from "classnames";
import React from 'react';
import Textarea from 'react-textarea-autosize';
import * as MessageComposerActions from "../actions/MessageComposerActions";

const fixTextareaBugStyle = { minHeight: 37, resize: 'none' }
export default class ArgumentInput extends React.Component {

  constructor(props) {
    super(props);
    this.changeType = this.changeType.bind( this );
    this.setText = this.setText.bind( this );
    this.onActionButtonClick = this.onActionButtonClick.bind( this );
    this.state = {
      type: this.props.arg.type
    }
  }


  componentWillReceiveProps(nextProps) {
    if (this.refs.input && this.state.type != nextProps.arg.type) {
      this.setState({ type: nextProps.arg.type })
      if (nextProps.arg.type === 'callback') {
        this.setText("function() { ... }")  
      }else{
        this.setText('')
      }
    }
  }

  setText(text) {
    this.refs.input.value = text
  }

  get stateText() {
    const { type } = this.props.arg;
    return type.charAt(0).toUpperCase() + type.slice(1);
  }

  changeType() {
    const { key, type } = this.props.arg;
    this.props.dispatch(
      MessageComposerActions.changeArgumentType( key, type )
    )
  }

  onActionButtonClick() {
    if (this.props.first) {
      this.props.dispatch(
        MessageComposerActions.addArgument()
      )
    } else {
      const { key } = this.props.arg;
      this.props.dispatch(
        MessageComposerActions.removeArgument( key )
      )
    }
  }

  render() {
    const { type } = this.props.arg;
    const actionButtonTitle = this.props.first ? "Adicionar argumento" : "Remover argumento";
    const actionButtonIcon = this.props.first ? "+" : "x";

    return (
      <div className="input-argument-row">
        <Textarea
          ref="input"
          style={ fixTextareaBugStyle }
          className={ classNames("m-input", {
            'input-argument-callback': type === 'callback'
          })}
          disabled={type === 'callback'}
          placeholder="Argument"
          spellCheck="off"/>
        <button className={ "btn btn-argument-type argument-type-" + type } onClick={ this.changeType } title="Mudar tipo de argumento">{ this.stateText }</button>
        <button onClick={ this.onActionButtonClick } className="btn btn-icon" title={ actionButtonTitle }>{ actionButtonIcon }</button>
      </div>
    );
  }
}
