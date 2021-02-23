import * as types from "./type";

export const reducer = (state={dataObj=null,pointer=null,error=true},action) =>{
    switch(action.type){
        case "DATA_SUCCESS":
            return {...state,dataObj=action.payload,error:false,pointer:action.pointer}
        default:
            return state;
    }
}