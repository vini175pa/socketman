import React from 'react';
import * as Utils from "../utils/Utils";

export default class HJson extends React.Component {

  constructor(props) {
    super(props);
  }

  

  _object(obj) {
    const elements = []
    let i = 0;
    let len = Object.keys(obj).length;
    for( let key in obj ){
      i++;
      elements.push((
        <span key={i} className="arg-el-object-element">
          <span className="arg-el-object-key">{ key }<span className="arg-el-colon">:</span> </span>
          <span className="arg-el-object-value">{ this.parse(obj[key]) }</span>
          { i != len 
            ? <span className="arg-el-text">, </span>
            : null
          }
        </span>
      ))
    }

    return (
      <span className="arg-el-object">
        <span className="arg-el-brace">{ "{" }</span>
        { " " }
        { elements }
        { " " }
        <span className="arg-el-brace">{ "}" }</span>
      </span>
    )
  }

  _array(arr) {
    return <span className="arg-el-array">
      <span className="arg-bracket">[</span>
        { " " }
        { arr.map((obj, i) => (
            <span key={i} className="arg-el-array-element">
              { this.parse(obj) }
              {
                i + 1 != arr.length
                ? <span className="arg-el-text">, </span>
                : null
              }
            </span>
          ))
        }
        { " " }
      <span className="arg-bracket">]</span>
    </span>
  }

  _string(str) {
    return <span className="arg-el-string">{JSON.stringify(str)}</span>
  }

  _number(number) {
    return <span className="arg-el-number">{JSON.stringify(number)}</span>
  }

  _boolean(str) {
    return <span className="arg-el-boolean">{JSON.stringify(str)}</span>
  }

  _null() {
    return <span className="arg-el-number">null</span>
  }

  parse(obj) {
    // String
    if (typeof obj === 'string')
      return this._string(obj)

    if (typeof obj === 'number')
      return this._number(obj)

    if (typeof obj === 'boolean')
      return this._boolean(obj)

    // Function
    if (typeof obj === 'undefined' || obj === null)
      return this._null()

    // Array
    if (Array.isArray(obj))
      return this._array(obj)

    // Function
    if (Utils.isFunction(obj))
      return this._function(obj)

    return this._object(obj)
  }

  render() {
    return (
      <div className="arg">
        { this.parse(this.props.object) }
      </div>
    );
  }
}
