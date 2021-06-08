import { combineReducer } from 'redux';
import gamesReducer from './gamesReducer';

const rootReducer = combineReducer({
  games: gamesReducer,
});

export default rootReducer;
