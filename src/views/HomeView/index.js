import React, { PropTypes } from 'react';
import { connect } from "react-redux";
import Message from "../../components/Message";
import MessageComposer from "../../components/MessageComposer";

const events = [{
  event: "Post:new",
  args: [
    { id: "asdasd", title: "Lorem ipsum dolor iset", "comment": "Lorem ispum?" }
  ],
  type: "Callback"
},
{
  event: "Post:new",
  args: [
    "Error", "teste", false, null
  ],
  type: "Callback"
},
{
  event: "Post:new",
  args: [
    [ 2, 3, "a"]
  ],
  type: "Callback"
},
{
  event: "Post:new",
  args: [
    { id: "asdasd", title: "Lorem ipsum dolor iset", "comment": "Lorem ispum?" }
  ],
  type: "Callback"
}]

class HomeView extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.props.dispatch({
      type: "CDD"
    })
  }

  render() {
    return (
      <div>
        <MessageComposer />
        <div className="messages">
          { events.map((message, i) => ( <Message key={i} message={message}/> ) ) }
        </div>
      </div>
    );
  }
}

export default connect(
  ( state, props ) => ({
    count: state.counter.count
  })
)(HomeView)
