import * as React from 'react';

import MainContent from '~/components/MainContent';

type Props = {
  content: JSX.Element;
};

const DefaultLayout: React.FC<Props> = ({ content }) => {
  return (
    <>
      <MainContent>{content}</MainContent>
    </>
  );
};

export default DefaultLayout;
