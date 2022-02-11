import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { template } from '../../types'
import { filterByCategory } from '../../utils/filterCategories'
import { order } from '../../utils/filterByOrder'
import { searchTemplates } from '../../utils/searchTemplates'
import { filtByDate } from '../../utils/filterByDate'





interface templateStateProp{
    templates : template[],
    loading : boolean
    filterStore : template[]
    name : string,
    order : string,
    date : string,
    currentPage : number
       
}

const initialState : templateStateProp = {
    templates : [],
    loading : false,
    filterStore : [], //change  to better name
    name : "All",    // change name to presentCategory
    order : "Default",
    date : "Default",
    currentPage : 1

}

const templateSlice = createSlice({
    name : "templateSlice",
    initialState,
    reducers : {
        templatesRequest(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },
        templateRequestSuccess(state,action:PayloadAction<template[]>){
            state.templates = action.payload
            state.filterStore = action.payload
            state.loading = false
        },
        templateRequestFailure(state,action:PayloadAction<boolean>){
            state.loading = action.payload
        },

    
        // Filter by category
        filterByCat(state,action:PayloadAction<string>){
        
            const newFilteredState = filterByCategory(action.payload, state.filterStore);
            console.log(newFilteredState)
            state.templates = newFilteredState
            state.name = action.payload
                 
        },
        
        //filter by Order
        filterByOrder(state,action:PayloadAction<string>){
            const orderedTemplate = order(state.templates,action.payload);
            state.templates = orderedTemplate
            state.order = action.payload
            
            
        },

        //Search template
        search(state,action:PayloadAction<string>){
            const searchResult = searchTemplates(state.filterStore,action.payload)
            state.templates = searchResult
        },

        // filter by date
        filterByDate(state,action:PayloadAction<string>){
            const newFilteredState = filtByDate(state.filterStore,action.payload)
            state.templates = newFilteredState
            state.date = action.payload
        },

       

     
    }

})

export const {  templatesRequest, templateRequestFailure, templateRequestSuccess, filterByCat, filterByOrder,search, filterByDate  } = templateSlice.actions

export default templateSlice.reducer
