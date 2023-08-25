import { createReducer,on} from "@ngrx/store"
import { decrement, increment, reset ,custom, changeName} from "./counter.action"
import { initialState } from "./counter.state"


const _counterReducer=createReducer(initialState,on(increment,(state)=>{
    return{
        ...state,
        counter:state.counter+1
    }

}),
on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter-1
    }

}),
on(reset,(state)=>{
    console.log("reset")
    return{
        ...state,
        counter:0
    }

}),
on(custom,(state,action)=>{
    console.log("custom")
    return{
       ...state,
     counter:action.action=="add"?state.counter+action.value:state.counter-action.value
    }
}),

on(changeName,(state,action)=>{
    return{
        ...state,
        myName:action.myName
    }
}),


)

export function counterReducer(state:any,action:any){
    return _counterReducer(state,action)
}