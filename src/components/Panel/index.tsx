import * as React from 'react';
import css from './index.scss';

type Props = {
  text: string;
  subText?: string;
};

const Panel: React.FC<Props> = ({ text, subText }) => {
  return (
    <div className={css['panel']}>
      <div className={css['panel__inner']}>
        <p className={css['text']}>{text}</p>
        {subText && <p className={css['sub-text']}>{subText}</p>}
      </div>
    </div>
  );
};

export default Panel;
