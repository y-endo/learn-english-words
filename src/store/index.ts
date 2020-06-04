import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import question, { QuestionState } from '~/modules/Question';
import game, { GameState } from '~/modules/Game';

export type Store = {
  question: QuestionState;
  game: GameState;
};

const reducers = combineReducers({
  question,
  game
});

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
