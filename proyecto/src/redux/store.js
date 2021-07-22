import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import  thunk  from "redux-thunk"
import { postReducer, servicesReducer} from "./reducers"



export default createStore(
  combineReducers({postReducer, servicesReducer}),
  composeWithDevTools(applyMiddleware(thunk))
  )
