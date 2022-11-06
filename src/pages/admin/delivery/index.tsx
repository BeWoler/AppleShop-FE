import { FC, Fragment } from 'react';
import Image from 'next/image';
import styles from './styles/delivery.module.sass';
import Link from 'next/link';
const DeliveryAdmin: FC = (): JSX.Element => {

  const deliveryData ={
    delivery: [
      {
      id: 1,
      title: 'Доставка по Минску',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      },
    {
      id: 2,
      title: 'Доставка по РБ',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    ],
    payment: [
      {
      id: 1,
      title: 'Оплата',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    ],
}


  return <div className={styles.delivery}>
      <div className={styles.delivery__container}>
        <h1 className={styles.delivery__title}>Доставка и Оплата:</h1>
        <div className={styles.delivery__table}>
          <div className={`${styles.delivery__table__cell} ${styles.delivery__table__column}`}>
            <p>Вариант доставки</p>
          </div>
          <div className={`${styles.delivery__table__cell} ${styles.delivery__table__column}`}>
            <p>Описание</p>
          </div>
          <div className={`${styles.delivery__table__cell} ${styles.delivery__table__column}`}>
            <p>Действия</p>
          </div>
          {deliveryData.delivery.map((item, i) =>{
            return <Fragment key={item.id}>
              <div className={styles.delivery__table__cell}>
              <p className={styles.delivery__table__date}>{item.title}</p>
              </div>
              <div className={styles.delivery__table__cell}>
              <p className={styles.delivery__table__text}>{item.content}</p>
              </div>
              <div className={styles.delivery__table__cell}>
              <div className={styles.delivery__table__btns}>
                <button>
                  <Image src='/assets/icons/changeBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/copyBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/delteBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
              </div>
              </div>
            </Fragment>
          })}
          {deliveryData.payment.map((item, i) =>{
            return <Fragment key={item.id}>
              <div className={styles.delivery__table__cell}>
              <p className={styles.delivery__table__date}>{item.title}</p>
              </div>
              <div className={styles.delivery__table__cell}>
              <p className={styles.delivery__table__text}>{item.content}</p>
              </div>
              <div className={styles.delivery__table__cell}>
              <div className={styles.delivery__table__btns}>
                <button>
                  <Image src='/assets/icons/changeBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/copyBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/delteBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
              </div>
              </div>
            </Fragment>
          })}
          <div className={`${styles.delivery__table__cell} ${styles.delivery__table__add}`}>
            <button>Добавить</button>
          </div>
        </div>
      </div>
  </div>;
};

export default DeliveryAdmin;