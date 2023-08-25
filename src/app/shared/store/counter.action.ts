import { createAction, props } from "@ngrx/store";

export const increment=createAction("incre")
export const decrement=createAction("decrement")
export const reset=createAction("reset")
export const custom=createAction("custo",props<{value:number,action:string}>())
export const changeName=createAction("changeName",props<{myName:string}>())