import { FC } from 'react';
import styles from './styles/delivery.module.sass';

const Delivery: FC = (): JSX.Element => {

  const deliveryData =[
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
    {
      id: 3,
      title: 'Оплата',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.'
    }
  ]

  return <div className={styles.delivery}>
    <div className={styles.delivery__container}>
      <h2 className={styles.delivery__title}>Доставка & Оплата</h2>
      <div className={styles.delivery__content}>
      {deliveryData?.map((item) => {
            return (
              <section className={styles.delivery__item} key={item.id}>
                <h3 className={styles.delivery__item__title}>{item.title}</h3>
                <p className={styles.delivery__item__text}>{item.content}</p>
              </section>
            );
          })}
      </div>
    </div>
  </div>;
};

export default Delivery;