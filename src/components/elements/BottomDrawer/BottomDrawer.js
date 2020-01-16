import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  BerandaIcon,
  RiwayatIcon,
  HelpIcon,
  AkunIcon
} from '../../elements/IconPackage';
import './style.css';

function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return windowSize;
}

const BottomDrawer = () => {
  const size = useWindowSize();
  const useStyles = makeStyles({
    root: {
      width: size.width > 1440 ? 480 : size.width > 960 ? 360 : '100%',
      position: 'fixed',
      bottom: 0,
      color: 'grey'
    },
    selected: {
      '&$selected': {
        color: '#2BB272'
      }
    }
  });

  const classes = useStyles();
  const [value, setValue] = React.useState('beranda');
  const isActive = param => {
    if (param === value) {
      return true;
    }
    return false;
  };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Beranda"
        value="beranda"
        icon={<BerandaIcon />}
        className={isActive('beranda') ? classes.selected : ''}
      />
      <BottomNavigationAction
        label="Riwayat"
        value="riwayat"
        icon={<RiwayatIcon />}
        className={isActive('riwayat') ? classes.selected : ''}
      />
      <BottomNavigationAction
        label="Bantuan"
        value="bantuan"
        icon={<HelpIcon />}
        className={isActive('bantuan') ? classes.selected : ''}
      />
      <BottomNavigationAction
        label="Akun"
        value="akun"
        icon={<AkunIcon />}
        className={isActive('akun') ? classes.selected : ''}
      />
    </BottomNavigation>
  );
};

export default BottomDrawer;
