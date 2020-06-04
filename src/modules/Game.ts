import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actionCreatorFactory } from 'typescript-fsa';
import { Question } from './Question';

export type GameState = {
  test?: Question[];
  currentQuestion?: Question;
  answerCount: number;
};

const actionCreator = actionCreatorFactory();

/**
 * Actions
 */
export const setTest = actionCreator<GameState['test']>('SET_TEST');
export const setCurrentQuestion = actionCreator<GameState['currentQuestion']>('SET_CURRENT_QUESTION');
export const increaseAnswerCount = actionCreator('INCREASE_ANSWER_COUNT');

/**
 * State
 */
const initialState: GameState = {
  test: [],
  currentQuestion: undefined,
  answerCount: 0
};

/**
 * Reducer
 */
const reducer = reducerWithInitialState(initialState)
  .case(setTest, (state, payload) => {
    return { ...state, test: payload };
  })
  .case(setCurrentQuestion, (state, payload) => {
    return { ...state, currentQuestion: payload };
  })
  .case(increaseAnswerCount, state => {
    return { ...state, answerCount: state.answerCount + 1 };
  });

export default reducer;
