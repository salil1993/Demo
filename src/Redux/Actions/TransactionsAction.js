import {
  SAVE_DETAIL,
  GET_MOVIES_DATA,
  INIT_MOVIE_LIST
} from "./types";
import { COMMON_URL, MOVIE } from "../../EndPoints"
import Singleton from "../../Singleton";
import { APIClient } from "../../api";

export const GetMoviesDetails = ()  =>{



  return (dispatch) => {
  
    dispatch({type: GET_MOVIES_DATA })
    return new Promise((resolve, reject) => {
    APIClient.getInstance()
      .get(COMMON_URL, MOVIE)
      .then((res) => {
       console.log("RES---------------", res)
        dispatch({ type: GET_MOVIES_DATA, payload: res });
        resolve(res)
      })
      .catch((err) => {
       
        console.log("err---------------", err)
        reject(err)
      })
  
})

}
}




export const savedetail = ({ username, email, password }) => {
  return (dispatch) => dispatch({
    type: SAVE_DETAIL,
    username: username,
    email: email,
    password: password

  })
}


