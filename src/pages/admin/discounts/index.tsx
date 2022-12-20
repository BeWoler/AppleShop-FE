import { FC, Fragment } from 'react';
import Image from 'next/image';
import styles from './styles/discounts.module.sass';
import Link from 'next/link';
const DiscountsAdmin: FC = (): JSX.Element => {
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
      <div className={styles.discounts__container}>
        <h1 className={styles.discounts__title}>Акции:</h1>
        <h2 className={styles.discounts__subtitle}>Список акций</h2>
        <div className={styles.discounts__table}>
          <div
            className={`${styles.discounts__table__cell} ${styles.discounts__table__column}`}
          >
            <p>Название товара</p>
          </div>
          <div
            className={`${styles.discounts__table__cell} ${styles.discounts__table__column}`}
          >
            <p>Цена</p>
          </div>
          <div
            className={`${styles.discounts__table__cell} ${styles.discounts__table__column}`}
          >
            <p>Действия</p>
          </div>
          {discountsData.map((item, i) => {
            return (
              <Fragment key={item.id}>
                <div className={styles.discounts__table__cell}>
                  <p className={styles.discounts__table__date}>{item.date}</p>
                </div>
                <div className={styles.discounts__table__cell}>
                  <p className={styles.discounts__table__text}>{item.text}</p>
                </div>
                <div className={styles.discounts__table__cell}>
                  <div className={styles.discounts__table__btns}>
                    <button>
                      <Image
                        src="/assets/icons/changeBtn.svg"
                        alt="изменить"
                        layout="fill"
                      ></Image>
                    </button>
                    <button>
                      <Image
                        src="/assets/icons/copyBtn.svg"
                        alt="изменить"
                        layout="fill"
                      ></Image>
                    </button>
                    <button>
                      <Image
                        src="/assets/icons/delteBtn.svg"
                        alt="изменить"
                        layout="fill"
                      ></Image>
                    </button>
                  </div>
                </div>
              </Fragment>
            );
          })}
          <div
            className={`${styles.discounts__table__cell} ${styles.discounts__table__add}`}
          >
            <button>Добавить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountsAdmin;
