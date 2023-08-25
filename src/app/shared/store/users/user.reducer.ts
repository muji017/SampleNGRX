import { createReducer,on } from "@ngrx/store";
import { userState } from "./user.state";
import { getUser } from "./user.action";

const _userReducer=createReducer(userState,
    on(getUser,(state)=>{
    return{
        ...state
    }
})

)

export function userReducer(state:any,action:any){
    return _userReducer(state,action)
}