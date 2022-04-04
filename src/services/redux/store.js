import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from './reducers/index'

const store = createStore(reducer, applyMiddleware(thunk))

export default store