import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuestion } from '~/modules/Question';
import { Store } from '~/store';

import DefaultLayout from '~/layouts/default';

type Props = {} & RouteComponentProps<{ id: string }>;

const PlayPage: React.FC<Props> = ({ match }) => {
  const isFetching = useSelector<Store, Store['question']['isFetching']>(state => state.question.isFetching);
  const data = useSelector<Store, Store['question']['data']>(state => state.question.data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchQuestion());
  }, []);

  const content = isFetching ? <div>Loading...</div> : <div>play {match.params.id}</div>;

  return <DefaultLayout content={content} />;
};

export default PlayPage;
