import * as React from 'react';

import Header from '~/components/Header';
import MainContent from '~/components/MainContent';

type Props = {
  content: JSX.Element;
};

const DefaultLayout: React.FC<Props> = ({ content }) => {
  return (
    <>
      <Header />
      <MainContent>{content}</MainContent>
    </>
  );
};

export default DefaultLayout;
