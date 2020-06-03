import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import question, { QuestionState } from '~/modules/Question';

export type Store = {
  question: QuestionState;
};

const reducers = combineReducers({
  question
});

export default createStore(reducers, applyMiddleware(thunk));
