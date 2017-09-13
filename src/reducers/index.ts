import { combineReducers, Reducer } from 'redux'
import {reducer as form, FormReducer } from 'redux-form'
import common, {CommonState} from './common'

export interface RootState {
  form: FormReducer
  common: CommonState
}

export default combineReducers<RootState>({form, common})