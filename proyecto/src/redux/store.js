import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { thunk } from "redux-thunk"
import { postReducer, servicesReducer, photosReducer } from "./reducers"

const initialStore = {
  cart: []
}

export default createStore(
  combineReducers(postReducer, servicesReducer, photosReducer),
  composeWithDevTools(applyMiddleware(thunk))
  )
