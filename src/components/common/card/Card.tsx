import { FC } from 'react';
import styles from './styles/card.module.sass';
import ProdSlider from './ProdSlider';
import { useState } from 'react';

const Card: FC = (): JSX.Element => {

  const [moreChar, setMoreChar] = useState(true);
  const [moreDesc, setMoreDesc] = useState(true);

  const productData = {
    id: 4,
    title: 'Apple Watch Series 7 42мм',
    photos: ['/assets/imgs/PodWatch7.png', '/assets/imgs/PodWatch7.png'],
    colors: [
      {
        color: '#000',
        colorName: 'Черный',
      },
      {
        color: '#BF1010',
        colorName: 'Черный',
      },
    ],
    features: {
      keys: [
        'Материал',
        'Сменный ремешок',
        'Размер',
        'Способ отображения времени',
        'Материал',
        'Сменный ремешок',
        'Размер',
        'Способ отображения времени',
      ],
      values: ['алюминий', 'да', '42мм', 'цифровой', 'алюминий', 'да', '42мм', 'цифровой'],
    },
    description:
      'Умные подсказки про физическую активность. И более мощный процессор.  И более мощный процессор. Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Встроенный высотомер. И более мощный процессор. Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Встроенный высотомер. И более мощный процессор. Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Встроенный высотомер. Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Встроенный высотомер.',
    price: 1050,
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <h1 className={styles.card__title}>{productData.title}</h1>
        <div className={styles.card__content_container}>
        <div className={styles.card__left}>
          <div style={{maxWidth: "600px"}}>
            <ProdSlider photos={productData.photos} title={productData.title} />
          </div>
        </div>
        <div className={styles.card__right}>
          <div className={styles.card__info_item}>
            <h2 className={styles.card__subtitle}>Цвета</h2>
            <div className={styles.card__color_list}>
              {productData.colors.map((item) => {
                return (
                  <div
                    key={item.color}
                    className={styles.card__color_item}
                    style={{ backgroundColor: item.color }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className={styles.card__info_item}>
            <h2 className={styles.card__subtitle}>Основные характеристики:</h2>
            <div 
            className={ moreChar? `${styles.card__chars} ${styles.hidden__chars}` :  `${styles.card__chars} `}
            >
              <div className={styles.card__chars__keys}>
              {productData.features.keys.map((item) => {
                return (
                  <p className={styles.card__chars__key} key={item}>
                    {item}
                  </p>
                );
              })}
              </div>
              <div className={styles.card__chars__values}>
              {productData.features.values.map((item) => {
                return (
                  <p className={styles.card__chars__value} key={item}>
                    {item}
                  </p>
                );
              })}
              </div>
            </div>
            <button className={styles.card__more} onClick={() => setMoreChar(!moreChar)}>{moreChar? 'Ещё...' : 'Свернуть'}</button>
          </div>
          <div className={styles.card__info_item}>
            <h2 className={styles.card__subtitle}>Описание:</h2>
            <p className={moreDesc? `${styles.card__description} ${styles.hidden__desc}` : `${styles.card__description}`}>
              {productData.description}
            </p>
            <button className={styles.card__more} onClick={() => setMoreDesc(!moreDesc)}>{moreDesc? 'Ещё...' : 'Свернуть'}</button>
          </div>
          <p className={styles.card__price}>{productData.price} руб</p>
          <button className={styles.card__orderBtn}>Заказать</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
