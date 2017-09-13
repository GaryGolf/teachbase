import { combineReducers, Reducer } from 'redux'
import {reducer as form, FormReducer } from 'redux-form'
export interface RootState {
  form: FormReducer
}

export default combineReducers<RootState>({form})