import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from "./reducers/counter";
import composer from "./reducers/MessageComposer";

export default combineReducers({
  counter,
  composer,
  router
})
