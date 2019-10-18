import { combineReducers } from 'redux';
import modeloNiveisReducer from './modeloNiveisReducer';


export default combineReducers({
    modeloNiveis: modeloNiveisReducer
  });