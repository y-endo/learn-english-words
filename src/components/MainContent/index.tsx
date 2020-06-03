import * as React from 'react';
import css from './index.scss';

const MainContent: React.FC = ({ children }) => {
  return (
    <main className={css['main-content']}>
      <div className={css['main-content__inner']}>{children}</div>
    </main>
  );
};

export default MainContent;
