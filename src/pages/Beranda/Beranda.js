import React from 'react';
import { ROUTES } from '../../configs';
import PageBase from '../../components/layouts/PageBase';

const Beranda = () => {
  return (
    <div>
      <PageBase>
        <p>Hello Beranda</p>
        <p>{ROUTES.BERANDA}</p>
      </PageBase>
    </div>
  );
};

export default Beranda;
