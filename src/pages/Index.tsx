import * as React from 'react';

import DefaultLayout from '~/layouts/default';
import Entrance from '~/components/Entrance';

const IndexPage: React.FC = () => {
  const handleClick = () => {
    const speech = new SpeechSynthesisUtterance('Speech Synthesis');
    speech.lang = 'en-US';
    speechSynthesis.speak(speech);
  };

  React.useEffect(() => {
    fetch('/assets/data/1_NGSL.csv')
      .then(csv => csv.text())
      .then(textData => {
        const data = textData.split('\n').map(row => {
          const rowArray = row.split(',');
          return {
            en: rowArray[0],
            ja: rowArray[1],
            pronunciation: rowArray[2],
            pos: rowArray[3]
          };
        });
        console.log(data);
      });
  }, []);

  const content = (
    <div>
      <Entrance title="NGSL" path="/play/ngsl" />
      <Entrance title="NAWL" path="/play/nawl" />
      <Entrance title="TSL" path="/play/tsl" />
      <Entrance title="BSL" path="/play/bsl" />
    </div>
  );

  return <DefaultLayout content={content} />;
};

export default IndexPage;
