import Axios from "axios"
import { GET_ALL_POSTS, GET_ALL_SERVICES } from "./actions"



const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch => {
  Axios.get(`${API_URL}/posts`)
  .then(res => {
    return dispatch({
      type: GET_ALL_POSTS,
      posts: res.data
    })
  })
  .catch(err => {
    console.error(err); 
  })
}

export const getAllServices = () => dispatch => {
  Axios.get(`${API_URL}/servicios`)
  .then(res => {
    return dispatch({
      type: GET_ALL_SERVICES,
      services: res.data
    })
  })
  .catch(err => {
    console.error(err); 
  })
}

// export const getAllPhotos = () => dispatch => {
//   Axios.get(`${API_URL}/servicios`)
//   .then(res => {
//     return dispatch({
//       type: GET_ALL_PHOTOS,
//       services: res.data
//     })
//   })
//   .catch(err => {
//     console.error(err); 
//   })
// }