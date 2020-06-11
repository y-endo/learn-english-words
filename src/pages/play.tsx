import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchQuestion } from '~/modules/Question';
import { setTest, setCurrentQuestion, increaseAnswerCount } from '~/modules/Game';
import { Store } from '~/store';

import DefaultLayout from '~/layouts/default';
import Panel from '~/components/Panel';
import Options from '~/components/Options';

import uniqueRandomIntegerArray from '~/utils/uniqueRandomIntegerArray';
import shuffleArray from '~/utils/shuffleArray';

type Props = {} & RouteComponentProps<{ type: string }>;

const csvPath: { [key: string]: string } = {
  ngsl: '/assets/data/1_NGSL.csv',
  nawl: '/assets/data/2_NAWL.csv',
  tsl: '/assets/data/3_TSL.csv',
  bsl: '/assets/data/4_BSL.csv'
};

const PlayPage: React.FC<Props> = ({ match }) => {
  const correctSE = React.useRef(new Audio());
  const incorrectSE = React.useRef(new Audio());
  const [panelStatus, setPanelStatus] = React.useState('');
  const isFetching = useSelector<Store, Store['question']['isFetching']>(state => state.question.isFetching);
  const data = useSelector<Store, Store['question']['data']>(state => state.question.data);
  const test = useSelector<Store, Store['game']['test']>(state => state.game.test);
  const currentQuestion = useSelector<Store, Store['game']['currentQuestion']>(state => state.game.currentQuestion);
  const answerCount = useSelector<Store, Store['game']['answerCount']>(state => state.game.answerCount);
  const dispatch = useDispatch();

  React.useEffect(() => {
    correctSE.current.src = '/assets/audio/correct.mp3';
    correctSE.current.load();
    incorrectSE.current.src = '/assets/audio/incorrect.mp3';
    incorrectSE.current.load();

    dispatch(fetchQuestion({ path: csvPath[match.params.type] }));
  }, []);

  React.useEffect(() => {
    if (data.length) {
      const test = uniqueRandomIntegerArray({ length: 30, min: 0, max: data.length - 1 }).map(value => {
        const question = data[value];
        question.options = shuffleArray(
          uniqueRandomIntegerArray({ length: 4, min: 0, max: data.length - 1, include: [value] }).map(
            value => data[value].ja
          )
        );

        return question;
      });
      dispatch(setTest(test));
      dispatch(setCurrentQuestion(test[answerCount]));
    }
  }, [data]);

  React.useEffect(() => {
    if (test) {
      dispatch(setCurrentQuestion(test[answerCount]));
    }
  }, [answerCount]);

  React.useEffect(() => {
    if (currentQuestion) {
      listen();
    }
  }, [currentQuestion]);

  const listen = () => {
    if (currentQuestion === void 0) return;
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(currentQuestion.en);
    speech.lang = 'en-US';
    speechSynthesis.speak(speech);
  };

  const selectAnswer = (event: React.MouseEvent) => {
    correctSE.current.currentTime = 0;
    incorrectSE.current.currentTime = 0;

    if (currentQuestion!.ja === event.currentTarget.textContent) {
      correctSE.current.play();
      setPanelStatus('correct');
      setTimeout(() => {
        setPanelStatus('');
        dispatch(increaseAnswerCount());
      }, 300);
    } else {
      setPanelStatus('incorrect');
      incorrectSE.current.play();
    }
  };

  const content = isFetching ? (
    <div>
      <Panel text={'データ読み込み中...'} />
    </div>
  ) : currentQuestion === void 0 ? (
    <div>
      <Panel text={'問題作成中...'} />
    </div>
  ) : (
    <div>
      <Panel text={currentQuestion.en} subText={currentQuestion.pronunciation || ''} status={panelStatus} />
      {currentQuestion.options && <Options items={currentQuestion.options} selectCallback={selectAnswer} />}
    </div>
  );

  return <DefaultLayout content={content} />;
};

export default PlayPage;
