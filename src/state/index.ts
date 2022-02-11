import { configureStore }from '@reduxjs/toolkit'
import templateReducer from './template/index'



const store = configureStore({
    reducer : {
       templateReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store