import { FC } from 'react';
import styles from './styles/basketItem.module.sass';
import Image from 'next/image';
import { useState } from 'react';
import { IBasketItem } from './intefaces/IBasketItem';

const BasketItem: FC<IBasketItem> = (props: IBasketItem): JSX.Element => {

  const [count, setCount] = useState(1);

  return <>
        <div className={styles.basket__product}>
        <button className={styles.basket__product__delete__wrap}>
          <div className={styles.delete__wrap}>
          <Image className={styles.basket__product__delete} src='/assets/icons/cross.svg' alt='cross'  layout="fill"/>
          </div>
        </button>
        <div className={styles.basket__product__right}>
          <div className={styles.basket__product__img}>
            <Image src={props.imgLink} alt={props.title} layout="fill"/>
          </div>
          <div className={styles.basket__product__info}>
            <h2 className={styles.basket__product__title}>{props.title}</h2>
            <p className={styles.basket__product__color}>Цвет: {props.colorName}</p>
          </div>
        </div>
        <div className={styles.counterAndPrice}>
        <div className={styles.basket__product__counter}>
          <button className={styles.basket__product__counter__btn} onClick={() => setCount(count - 1)}>
            <Image src='/assets/icons/minus.svg' alt='cross'  layout="fill"/>
          </button>
          <span className={styles.basket__product__counter__value}>{count}</span>
          <button className={styles.basket__product__counter__btn} onClick={() => setCount(count + 1)}>
            <Image src='/assets/icons/plus.svg' alt='cross'  layout="fill"/>
          </button>
        </div>
        <p className={styles.basket__product__price} >{props.price} руб</p>
        </div>
        </div>
  </>
}

export default BasketItem;