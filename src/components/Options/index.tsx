import * as React from 'react';
import css from './index.scss';

type Props = {
  items: string[];
  selectCallback?: () => void;
};

const Options: React.FC<Props> = ({ items, selectCallback }) => {
  const handleClick = () => {
    if (selectCallback) selectCallback();
  };

  const listItems = items.map(item => (
    <li key={item} className={css['option-list__item']} onClick={handleClick}>
      {item}
    </li>
  ));

  return <ul className={css['option-list']}>{listItems}</ul>;
};

export default Options;
