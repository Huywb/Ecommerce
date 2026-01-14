import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from './userSlice'

const persistConfig = {
  key: 'root4',
  storage,
  whitelist: ['user'], 
}

const rootReducer = combineReducers({
  user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)
