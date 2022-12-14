import { FC } from 'react';
import styles from './styles/catalogItem.module.sass';
import Image from 'next/image';
import { ICatalogItemProps } from './interfaces/catalogItem.interface';

const CatalogItem: FC<ICatalogItemProps> = (
  props: ICatalogItemProps
): JSX.Element => {
  return (
    <div className={styles.catalog__item}>
      <div className={styles.catalog__item__wrap}>
        <div className={styles.catalog__item__underwrap}>
        <Image
          className={styles.catalog__item__photo}
          src={props.photo}
          alt={props.title}
          key={props.key}
          layout="fill"
        />
        </div>
      </div>
      <h2 className={styles.catalog__item__title}>{props.title}</h2>
      <p className={styles.catalog__item__price}>{props.price}руб</p>
      <div className={styles.catalog__btns_wrap}>
        <button className={styles.catalog__item__btn}>Подробнее</button>
        <button className={styles.catalog__item__btn}>В корзину</button>
      </div>
    </div>
  );
};

export default CatalogItem;
