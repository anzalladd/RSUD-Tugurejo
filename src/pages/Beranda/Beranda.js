import React, { useState, useEffect } from 'react';
import PageBase from '../../components/layouts/PageBase';
import Header from '../../components/elements/Header';
import Alert from '../../components/elements/Alert';
import { HelpIcon } from '../../components/elements/IconPackage';
import images from '../../configs/images';
import { BerandaSkeleton } from '../../components/elements/Skeleton';
import './style.css';

function _renderApp() {
  return (
    <div className="main">
      <div className="header">
        <Header name="Richard William" nik="11232138007" />
      </div>
      <div className="home--container">
        <div className="app-container">
          <div className="card card--antrian">
            <h1 className="text--body-14">No Antrian</h1>
            <h4 className="text--loket">
              24B
              <br />( Loket B )
            </h4>
            <p className="text--small-12 text--nomor">5 Nomor Lagi</p>
            <Alert className="alert--antrian">
              <div className="d-flex align-center">
                <HelpIcon />
                <p className="text--small-12 text--normal text--estimasi">
                  Estimasi Dipanggil Pukul 12.00 WIB
                </p>
              </div>
            </Alert>
          </div>
          <div className="card card--kontrol">
            <div className="card__section-kontrol">
              <h6 className="text--body-14 text--medium">Jadwal Kontrol</h6>
              <p className="text--small-12">Senin, 12 Desember 2019</p>
            </div>
            <div className="card__section-detail d-flex align-center justify-between">
              <div className="detail__job">
                <h6 className="text--body-14 text--medium">
                  Dr. Zack Richards, SP
                </h6>
                <p className="text--small-12">Bedah Saraf</p>
              </div>
              <div className="detail__nomor">
                <h6 className="text--body-14 text--medium">No Kontrol</h6>
                <h6 className="text--small-12 text--code text--normal">
                  #K90090912093
                </h6>
              </div>
            </div>
          </div>
          <Alert bg_color="#FFF8E5" border="#F2DCA1" className="alert--antrian">
            <div className="d-flex align-center justify-between">
              <p className="text--body-14">
                Total biaya yang belum
                <br />
                dibayar
              </p>
              <h6>Rp 1.500.000</h6>
            </div>
          </Alert>
          <div className="gridCard">
            <div className="gridCard__card card">
              <img alt="antrian" src={images.ANTRIAN}></img>
              <p className="text--body-14 text--medium">Ambil Antrian</p>
            </div>
            <div className="gridCard__card card">
              <img alt="antrian" src={images.PERIKSA_HARIINI}></img>
              <p className="text--body-14 text--medium">Periksa Hari ini</p>
            </div>
            <div className="gridCard__card card">
              <img alt="antrian" src={images.PERIKSA_BESOK}></img>
              <p className="text--body-14 text--medium">Periksa Besok</p>
            </div>
            <div className="gridCard__card card">
              <img alt="antrian" src={images.JADWAL}></img>
              <p className="text--body-14 text--medium">Cek Jadwal Dokter</p>
            </div>
          </div>
        </div>
        <div className="berita">
          <div className="beritaCard">
            <div className="beritaCard__title d-flex align-center justify-between">
              <p className="text--body-14 text--bold">Berita Terkini</p>
              <p className="text--body-14 text--normal">Lihat Semua</p>
            </div>
            <div className="beritaCard__main">
              <img
                alt="dokter"
                src={images.DOKTER}
                className="image--beritaCard"
              ></img>
              <h6 className="text--body-14 text--bold">
                4 Kegiatan pagi yang disarankan para Ahli
              </h6>
              <p className="text--body-14 text--normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              </p>
              <div className="beritaCard__baca d-flex justify-end">
                <button className="btn--baca">Baca</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function _renderSkeleton() {
  return <BerandaSkeleton />;
}

const Beranda = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <PageBase>{isLoading ? _renderSkeleton() : _renderApp()}</PageBase>;
};

export default Beranda;
