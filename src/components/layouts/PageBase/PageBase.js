import React from 'react';
import style from './style.css';

const PageBase = props => {
  return (
    <div className={style['container']}>
      {props.children}
      <p>owkwok</p>
    </div>
  );
};

export default PageBase;
