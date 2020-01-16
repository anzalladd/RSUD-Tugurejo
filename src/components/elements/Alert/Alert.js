import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  const style = {
    border: `1px solid ${props.border}`,
    padding: '9px 16px',
    backgroundColor: props.bg_color,
    borderRadius: '8px'
  };
  return (
    <div style={style} className={props.className}>
      {props.children}
    </div>
  );
};

Alert.propTypes = {
  bg_color: PropTypes.string,
  border_color: PropTypes.string,
  className: PropTypes.string
};

Alert.defaultProps = {
  bg_color: '#BCE8D9',
  border: '#2DA185',
  className: ''
};

export default Alert;
