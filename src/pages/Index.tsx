import * as React from 'react';

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

  return (
    <div>
      Index
      <br />
      <button onClick={handleClick}>play</button>
    </div>
  );
};

export default IndexPage;
