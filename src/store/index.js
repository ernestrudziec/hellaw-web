import { createStore, applyMiddleware, compose } from "redux";
import actionReducer from "../reducers/index";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  actionReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
