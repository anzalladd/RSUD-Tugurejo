import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Box } from '@material-ui/core';
import HeaderSkeleton from '../../../assets/images/header_skeleton.svg';

const BerandaSkeleton = () => {
  return (
    <div className="main">
      <div
        className="header"
        style={{ backgroundImage: `url(${HeaderSkeleton})` }}
      >
        <div className="content">
          <div className="content__title">
            <Skeleton variant="rect" width={147} height={38} />
          </div>
          <div className="content__picture">
            <Skeleton variant="rect" width={51} height={40} />
          </div>
        </div>
      </div>
      <div className="home--container">
        <div className="app-container">
          <div className="card card--antrian">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box>
                <Skeleton variant="rect" width={116} height={30} />
              </Box>
              <Box marginTop={3}>
                <Skeleton variant="rect" width={77} height={72} />
              </Box>
              <Box width="100%" marginTop={3}>
                <Skeleton variant="rect" width="100%" height={31} />
              </Box>
            </Box>
          </div>
          <div className="card card--kontrol">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Skeleton variant="rect" width="60%" height={43} />
              <Skeleton variant="rect" width="30%" height={43} />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              marginTop={3}
            >
              <Skeleton variant="rect" width={146} height={43} />
            </Box>
          </div>
          <div className="card card--kontrol">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Skeleton variant="rect" width="48%" height={43} />
              <Skeleton variant="rect" width="48%" height={43} />
            </Box>
          </div>
          <div className="gridCard">
            <div className="gridCard__card card">
              <Skeleton variant="rect" width={115} height={110} />
            </div>
            <div className="gridCard__card card">
              <Skeleton variant="rect" width={115} height={110} />
            </div>
            <div className="gridCard__card card">
              <Skeleton variant="rect" width={115} height={110} />
            </div>
            <div className="gridCard__card card">
              <Skeleton variant="rect" width={115} height={110} />
            </div>
          </div>
        </div>
        <div className="berita">
          <div className="beritaCard">
            <div className="beritaCard__title d-flex align-center justify-between">
              <Skeleton variant="rect" width={103} height={24} />
              <Skeleton variant="rect" width={103} height={24} />
            </div>
            <div className="beritaCard__main">
              <Skeleton variant="rect" width="100%" height={124} />
              <Box marginTop={3}>
                <Skeleton variant="rect" width="100%" height={24} />
              </Box>
              <div className="beritaCard__baca d-flex justify-end">
                <Skeleton variant="rect" width={100} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BerandaSkeleton;
