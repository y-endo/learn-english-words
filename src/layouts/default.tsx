import * as React from 'react';

type Props = {
  content: JSX.Element;
};

const DefaultLayout: React.FC<Props> = ({ content }) => {
  return <>{content}</>;
};

export default DefaultLayout;
