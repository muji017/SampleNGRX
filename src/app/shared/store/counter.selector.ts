import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterModel } from "./counter.model";


const counterstate=createFeatureSelector<counterModel>('counter')

export const getcountor=createSelector(counterstate,(state)=>{
    return state.counter
})

export const getname=createSelector(counterstate,(state)=>{
    return state.myName
})