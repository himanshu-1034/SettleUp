import { applyMiddleware, legacy_createStore } from '@reduxjs/toolkit'
import { rootReducer } from '../reducers'
import { thunk } from 'redux-thunk'
// ...

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch