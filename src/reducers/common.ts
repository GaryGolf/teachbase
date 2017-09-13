import Actions from '../constants/actions'

export interface CommonState {
  lang: string
}

const initialState = {
  lang: 'eng'
}

export default function common(state=initialState, action): CommonState{
  switch(action.type){
    case Actions.CHANGE_LANGUADE :
      return {...state, lang: action.payload}
  }
  return state
}