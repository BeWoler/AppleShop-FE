import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/banner.module.sass';

const Banner: FC = (): JSX.Element => {
  return <div className={styles.banner}>
    <div className={styles.banner__container}>
      <div className={styles.banner__left_content}>
        <div className={styles.banner__text_content}>
          <span className={styles.banner__title1}>Наушники</span>
          <span className={styles.banner__title2}>и смарт-часы</span>
          <span className={styles.banner__subtitle}>Лучшее качеcтво по честной цене!</span>
        </div>
        <div className={styles.banner__airpods_wrap}>
          <div className={styles.relative}>
            <Image className={styles.banner__airpods__img} src='/assets/imgs/airpodsBannerDeck.png' alt='airpods pro' layout="fill"/>
          </div>
        </div>
      </div>
        <div className={styles.banner__watches_wrap}>
          <div className={styles.relative}>
            <Image className={styles.banner__watches__img} src='/assets/imgs/watchesBannerDeck.png' alt='watches' layout="fill"/>
          </div>
        </div>
    </div>
  </div>;
};

export default Banner;