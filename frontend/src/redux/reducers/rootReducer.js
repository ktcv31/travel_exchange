import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { experienceReducer } from './experienceReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  experiences: experienceReducer,
});
