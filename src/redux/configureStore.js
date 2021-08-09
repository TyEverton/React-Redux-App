import {createStore, applyMiddleware, compose} from "redux"
import rootReducer from "./reducers/index" //Redux uses a single root reducer function that accepts the current state (and an action) as input and returns a new state
import reduxImmutableStateInvariant from "redux-immutable-state-invariant" //middleware to make Redux performance even better


export default function configureStore(initialState) {
  const composeEnhancers =
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose //adds support for redux devtools

  return createStore(
    rootReducer, 
    initialState, 
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) //composeEnhancers calls applyMiddleware, reduxUmmitableStateInvariant is a piece of middleware that we are using
    )
}

