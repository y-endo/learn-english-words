import * as React from 'react';
import css from './index.scss';
import { Link } from 'react-router-dom';

type Props = {
  title: string;
  path: string;
};

const Entrance: React.FC<Props> = ({ title, path }) => {
  return (
    <Link to={path} className={css['link']}>
      {title}
    </Link>
  );
};

export default Entrance;
