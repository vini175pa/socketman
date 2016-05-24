import ActionTypes from "../actions/ActionTypes";
import io from "socket.io-client";
import SocketActions from "../actions/SocketActions";

export default class SocketClient {

  socket = null;
  pending = [];

  constructor(dipatch, url, params) {
    this.dipatch = dipatch
    this.url = url
    this.params = params
    this.socket = io.connect(url, params);

    socket.on("connect", this.onConnect.bind(this));
  }

  onConnect () {
    this.dispatch(SocketActions.disconnected());
    this.resolvePendings();
  }

  emit() {
    if(!arguments.length || typeof arguments[0] !== "string") return

    if(!this.isConnected()){
      this.pending.push({
        arguments: [].slice.call(arguments, 0)
      })
    }else{
      this.socket.emit.apply(this.socket, arguments);
    }
  }

  resolvePendings() {
    const self = this;
    this.pending.forEach(function(obj, index){
      console.log("Websocket:resolve", obj.arguments)
      self.socket.emit.apply(self.socket, obj.arguments);
    });
    this.pending = [];
  }

  isConnected(weak) {
    return !!this.socket && (weak || this.socket.connected);
  }

  static getDefaultCallback(event, dispatch) {
    return () => {
      dispatch({
        type: ActionTypes.SOCKET_EVENT,
        event: event,
        args: [].slice.call(arguments),
        callback: true,
      })
    }
  }

}
