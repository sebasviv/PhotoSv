import { GET_ALL_POSTS, GET_ALL_SERVICES } from "./actions"

export const postReducer = (state = {}, action) => {
  if(action.type === GET_ALL_POSTS){
    return {
      ...state,
      posts: action.posts
    }
  }
  return state
}

export const servicesReducer = (state = {}, action) => {
  if(action.type === GET_ALL_SERVICES){
    return {
      ...state,
      services: action.services
    }
  }
  return state
}

// export const photosReducer = (state = {}, action) => {
//   return state
// }

