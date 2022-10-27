import { FC } from 'react';
import styles from './styles/basket.module.sass';
import Image from 'next/image';
import BasketItem from './BasketItem';

const Basket: FC = (): JSX.Element => {

  const basketData =[
    {
      id: 1,
      imgLink: '/assets/imgs/PodAirpods2.png',
      title: 'Наушники Airpods (2го поколения)',
      colorName: 'Белый',
      price: 590,
    },
  ]
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
    {
      id: 3,
      title: 'Оплата',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.'
    },
    ],
    payment: [
      {
      id: 1,
      title: 'Доставка по Минску',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    ],
}


  return <div className={styles.basket}>
    <div className={styles.basket__container}>
      <button className={styles.basket__close__wrap}>
        <div className={styles.close__wrap}>
        <Image className={styles.basket__close} src='/assets/icons/cross.svg' alt='cross'  layout="fill"/>
        </div>
      </button>
      <h1 className={styles.basket__title}>Корзина</h1>
      {basketData?.map(item =>{
        return <BasketItem key={item.id} imgLink={item.imgLink} title={item.title} colorName={item.colorName} price={item.price}/>
      })}
      <form className={styles.basket__form} action="">
        <p  className={styles.basket__form__field}>
          <label className={styles.basket__form__label} htmlFor="name">Фамилия Имя Отчество</label>
          <input placeholder="Иванов Иван Иванович" className={styles.basket__form__input} type="text" id='name'/>
        </p>
        <p className={styles.basket__form__field}>
          <label className={styles.basket__form__label} htmlFor="tel">Ваш телефон</label>
          <input placeholder="+375(44)123-45-67" className={styles.basket__form__input} type="tel" id='tel'/>
        </p>
        <p className={styles.basket__form__field}>
          <label className={styles.basket__form__label} htmlFor="address">Адрес доставки <span>(Населенный пункт, улица, дом, корпус, квартира)</span></label>
          <input placeholder="г. Минск, ул. Матусевича, д.30, кв. 1" className={styles.basket__form__input} type="text" id='address'/>
        </p>
        <p className={styles.basket__form__field}>
          <label className={styles.basket__form__label} htmlFor="">Способ доставки</label>
            {deliveryData.delivery?.map((item) =>{
              return <label className={styles.basket__form__label__radio} key={item.id}>
                <input className={styles.basket__form__input__radio} type="radio" name="delivery"/>
                {item.title}
              </label>
            })}
        </p>
        <p className={styles.basket__form__field}>
          <label className={styles.basket__form__label} htmlFor="">Комментарий к заказу</label>
          <input placeholder="Введите комментарий" className={styles.basket__form__input} type="text" />
        </p>
        <div className={styles.basket__price}>
          <p className={styles.basket__price__value}>Итоговая сумма:  {basketData?.reduce(function(sum, elem) {
              return sum + elem.price;
            },0)} руб</p>
          <p className={styles.basket__info}>*Менеджер перезвонит вам с 10:00 до 20:00 для подтверждения заказа</p>
        </div>
        <button className={styles.basket__form__button}>Заказать</button>
      </form>
    </div>
  </div>;
};

export default Basket;