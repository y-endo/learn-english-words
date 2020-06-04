import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { actionCreatorFactory } from 'typescript-fsa';
import { asyncFactory } from 'typescript-fsa-redux-thunk';

export type Question = {
  en: string;
  ja: string;
  pronunciation?: string;
  pos?: string;
  options?: string[];
};

export type QuestionState = {
  isFetching: boolean;
  data: Question[];
};

const actionCreator = actionCreatorFactory();
const asyncActionCreator = asyncFactory<QuestionState>(actionCreator);

/**
 * Actions
 */
export const fetchQuestion = asyncActionCreator<{ path: string }, QuestionState['data'], Error>(
  'FETCH_QUESTION',
  async params => {
    const csv = await fetch(params.path);
    const textData = await csv.text();
    const data = textData.split('\n').map(row => {
      const rowArray = row.split(',');
      return {
        en: rowArray[0],
        ja: rowArray[1],
        pronunciation: rowArray[2],
        pos: rowArray[3]
      };
    });

    return data;
  }
);

/**
 * State
 */
const initialState: QuestionState = {
  isFetching: false,
  data: []
};

/**
 * Reducer
 */
const reducer = reducerWithInitialState(initialState)
  .case(fetchQuestion.async.started, state => {
    return { ...state, isFetching: true };
  })
  .case(fetchQuestion.async.done, (state, payload) => {
    return { ...state, isFetching: false, data: payload.result };
  });

export default reducer;
