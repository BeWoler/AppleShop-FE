import { FC } from 'react';
import styles from './styles/discounts.module.sass';
import Image from 'next/image';

const Discounts: FC = (): JSX.Element => {
  const discountsData = [
    {
      id: 1,
      date: '30.10.2022',
      text: 'При покупке Airpods Pro или Airpods 3 скидка на любые смарт-часы 20%',
    },
    {
      id: 2,
      date: '30.10.2022',
      text: 'При покупке Airpods Pro или Airpods 3 скидка на любые смарт-часы 20%',
    },
  ];

  return (
    <div className={styles.discounts}>
      {discountsData?.map((item) => {
        return (
          <div key={item.id} className={styles.discounts__container}>
            <div className={styles.discounts__airpods3__underwrap}>
              <div className={styles.discounts__airpods3__wrap}>
                <Image
                  className={styles.discounts__airpods3__img}
                  src="/assets/imgs/backgroundSales3.png"
                  alt="airpods 3"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.discounts__airpodsPro__underwrap}>
              <div className={styles.discounts__airpodsPro__wrap}>
                <Image
                  className={styles.discounts__airpodsPro__img}
                  src="/assets/imgs/backgroundSalesPro.png"
                  alt="airpods pro"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.discounts__watches__underwrap}>
              <div className={styles.discounts__watches__wrap}>
                <Image
                  className={styles.discounts__watches__img}
                  src="/assets/imgs/backgrounWatches(1).png"
                  alt="watches"
                  layout="fill"
                />
              </div>
            </div>
            <div className={styles.discounts__content}>
              <h3 className={styles.discounts__content__date}>
                До {item.date}
              </h3>
              <p className={styles.discounts__content__text}> {item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Discounts;
