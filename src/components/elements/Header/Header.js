import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES } from '../../../configs';
import './style.css';

const Header = props => {
  return (
    <div className="header">
      <div className="content">
        <div className="content__title">
          <h5>{props.name}</h5>
          <p className="text--small-12 text--medium">NIK {props.nik}</p>
        </div>
        <div className="content__picture">
          <img alt="pic" src={props.picture} className="image--profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  /**
   * @ignore
   */
  name: PropTypes.string,
  nik: PropTypes.string || PropTypes.number,
  picture: PropTypes.string
};

Header.defaultProps = {
  name: 'Jone Doe',
  nik: '11111111111',
  picture: IMAGES.PROFILE
};
