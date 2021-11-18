
import {
    GET_MOVIES_DATA,
    SAVE_DETAIL,

}from "../Actions/types";

const INITIAL_STATE = {
    username:'',
    email:'',
    password:'',
    loading:false,
    error:"",
    data:{},
    array:[]
}

const DataReducer = (state = INITIAL_STATE,action) =>{
    console.log("TYPE", action.type);
switch(action.type){

   

    case GET_MOVIES_DATA:
        console.log("MOVIES ====>", action.payload);
        var cl = []
        return{
            ...state,
            loading: false,
            error:"",
            data : action.payload,
        };

        case SAVE_DETAIL:
            console.log("ACtion", action);
            let arr = {
                name: action.username,
                email : action.email,
                password: action.password,

            }
              state.array.push(arr);
            return{
                ...state,
                array : state.array
            }
        default:
            return state;
}



}

export default DataReducer;
