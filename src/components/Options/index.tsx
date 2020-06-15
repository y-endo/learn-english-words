import * as React from 'react';
import css from './index.scss';

type Props = {
  items: string[];
  selectCallback?: (event: React.MouseEvent) => void;
};

const Options: React.FC<Props> = React.memo(({ items, selectCallback }) => {
  const handleClick = (event: React.MouseEvent) => {
    if (selectCallback) selectCallback(event);
  };

  const listItems = items.map(item => (
    <li key={item} className={css['option-list__item']} onClick={handleClick}>
      {item}
    </li>
  ));

  return <ul className={css['option-list']}>{listItems}</ul>;
});

export default Options;
