import { FC } from 'react';
import styles from './styles/delivery.module.sass';

const Delivery: FC = (): JSX.Element => {
  const deliveryData = {
    delivery: [
      {
        id: 1,
        title: 'Доставка по Минску',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
      {
        id: 2,
        title: 'Доставка по РБ',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
    payment: [
      {
        id: 1,
        title: 'Доставка по Минску',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      },
    ],
  };

  return (
    <div className={styles.delivery}>
      <div className={styles.delivery__container}>
        <h2 className={styles.delivery__title}>Доставка & Оплата</h2>
        <div className={styles.delivery__list}>
          {deliveryData?.delivery.map((item) => {
            return (
              <div className={styles.delivery__item} key={item.id}>
                <h3 className={styles.delivery__item__title}>{item.title}</h3>
                <p className={styles.delivery__item__text}>{item.content}</p>
              </div>
            );
          })}
          {deliveryData?.payment.map((item) => {
            return (
              <div className={styles.delivery__item} key={item.id}>
                <h3 className={styles.delivery__item__title}>{item.title}</h3>
                <p className={styles.delivery__item__text}>{item.content}</p>
              </div>
            );
          })}
          <div className={styles.delivery__item}>
            <h3 className={styles.delivery__item__title}>Нет подходящего варианта?</h3>
            <p className={styles.delivery__item__text}>Оставьте свой номер телефона, менеджер свжется с вами и обязательно поможет с вашим запросом!</p>
            <input type="tel"  placeholder='+375(__)___-__-__' className={styles.delivery__item__input}/>
            <button className={styles.delivery__item__btn}>Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
