import React from 'react';
import Textarea from 'react-textarea-autosize';

const fixTextareaBugStyle = { minHeight: 37, resize: 'none' }

export default class MessageComposer extends React.Component {

  render() {
    return (
      <div className="message-composer container-fluid">
        <div className="col-md-10 col-xs-7">
          <div className="row">
            <div className="col-xs-4">
              <Textarea style={ fixTextareaBugStyle } resize={false} className="m-input" placeholder="Event" spellCheck="off"/>
            </div>
            <div className="col-xs-8">
              <div className="input-argument-row">
                <Textarea style={ fixTextareaBugStyle } className="m-input" placeholder="Argument" spellCheck="off"/>
                <button className="btn btn-argument-type  argument-type-string" title="Mudar tipo de argumento">String</button>
                <button className="btn btn-icon" title="Adicionar argumento">+</button>
              </div>
              <div className="input-argument-row">
                <Textarea style={ fixTextareaBugStyle } className="m-input input-argument-callback" placeholder="Callback" value="function() { ... }" disabled spellCheck="off"/>
                <button className="btn btn-argument-type argument-type-callback" title="Mudar tipo de argumento">Callback</button>
                <button className="btn btn-icon"  title="Remover argumento">x</button>
              </div>
              <div className="input-argument-row">
                <Textarea style={ fixTextareaBugStyle } className="m-input" placeholder="Callback" defaultValue="{ a: 3 }" spellCheck="off"/>
                <button className="btn btn-argument-type argument-type-json" title="Mudar tipo de argumento">JSON</button>
                <button className="btn btn-icon"  title="Remover argumento">x</button>
              </div>
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
