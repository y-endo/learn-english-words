import * as React from 'react';
import css from './index.scss';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className={css['header']}>
      <Link to="/" className={css['link']}>
        英単語帳
      </Link>
    </header>
  );
};

export default Header;
