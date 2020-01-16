import React from 'react';
import './style.css';
import BottomDrawer from '../../elements/BottomDrawer';

const PageBase = props => {
  return (
    <div className="base">
      <div className="container">
        {props.children}
        <BottomDrawer />
      </div>
    </div>
  );
};

export default PageBase;
