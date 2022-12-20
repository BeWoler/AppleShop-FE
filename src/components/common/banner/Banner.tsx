import { FC } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './styles/banner.module.sass';

const Banner: FC = (): JSX.Element => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
        <div className={inView ? `${styles.banner__left_content} ${styles.visible}` : `${styles.banner__left_content} ${styles.hidden}`} ref={ref}>
          <div className={styles.banner__text_content}>
            <span className={styles.banner__title1}>Наушники</span>
            <span className={styles.banner__title2}>и смарт-часы</span>
            <span className={styles.banner__subtitle}>
              Лучшее качеcтво по честной цене!
            </span>
          </div>
          <div className={styles.banner__airpods_wrap}>
            <div className={styles.relative}>
              <Image
                className={styles.banner__airpods__img}
                src="/assets/imgs/airpodsBannerDeck.png"
                alt="airpods pro"
                layout="fill"
              />
            </div>
          </div>
        </div>
        <hr className={inView ? `${styles.hr} ${styles.visible_hr}` : styles.hr} ref={ref} />
        <div className={inView ? `${styles.banner__watches_wrap} ${styles.visible}` : `${styles.banner__watches_wrap} ${styles.hidden}`} ref={ref}>
          <div className={styles.relative}>
            <Image
              className={styles.banner__watches__img}
              src="/assets/imgs/banner-group.png"
              alt="watches"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
