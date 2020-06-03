import * as React from 'react';

import DefaultLayout from '~/layouts/default';
import Entrance from '~/components/Entrance';

const IndexPage: React.FC = () => {
  const handleClick = () => {
    const speech = new SpeechSynthesisUtterance('Speech Synthesis');
    speech.lang = 'en-US';
    speechSynthesis.speak(speech);
  };

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
