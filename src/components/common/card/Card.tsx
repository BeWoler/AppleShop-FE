import { FC } from 'react';
import styles from './styles/card.module.sass';
import ProdSlider from './ProdSlider';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Card: FC = (): JSX.Element => {
  const [moreChar, setMoreChar] = useState(true);
  const [moreDesc, setMoreDesc] = useState(true);

  const productData = {
    id: 6,
    title: 'Apple Watch SE 42мм',
    chapter: 'часы',
    photos: [
      {
        imgLink: '/assets/imgs/watchsewhite-1__1_-removebg-preview.png',
        imgColor: '#fff',
        colorName: 'Белый',
      },
      {
        imgLink: '/assets/imgs/watchsewhite-2__1_-removebg-preview.png',
        imgColor: '#fff',
        colorName: 'Белый',
      },
      {
        imgLink: '/assets/imgs/watchsewhite-3__1_-removebg-preview.png',
        imgColor: '#fff',
        colorName: 'Белый',
      },
      {
        imgLink: '/assets/imgs/watchsered-1-removebg-preview.png',
        imgColor: '#DF1010',
        colorName: 'Красный',
      },
      {
        imgLink: '/assets/imgs/watchsered-2-removebg-preview.png',
        imgColor: '#DF1010',
        colorName: 'Красный',
      },
      {
        imgLink: '/assets/imgs/watchsered-3-removebg-preview.png',
        imgColor: '#DF1010',
        colorName: 'Красный',
      },
      {
        imgLink: '/assets/imgs/watchseblue-1-removebg-preview.png',
        imgColor: '#4473A4',
        colorName: 'Синий',
      },
      {
        imgLink: '/assets/imgs/watchseblue-2-removebg-preview.png',
        imgColor: '#4473A4',
        colorName: 'Синий',
      },
      {
        imgLink: '/assets/imgs/watchseblue-3-removebg-preview.png',
        imgColor: '#4473A4',
        colorName: 'Синий',
      },
    ],
    features: {
      keys: [
        'Материал',
        'Сменный ремешок',
        'Размер',
        'Способ отображения времени',
        'Стекло'
      ],
      values: ['алюминий', 'да', '42мм', 'цифровой', 'сапфировое'],
    },
    description: 'Умные kkjnvkjbkvjbsbvbslbvls bvfsiubvksjbviuhwwiurvlkbsdb wrisbvsgrbshbvhbjhbgebfhdbcsbj vbyglsvbjbdtryhbdiujvfnjkvn teliyheujdnkvjnfljbeuhrv;i snjnugtgksfjnvk dbfudkfjvdlutbd;jvbdjbgl uisjfhwiu nvjsndovn  soirgnosvkjnrgl jbljxbliutdblkjnkjbniufhie fznflkjbndlzukhfijn clksjuih ilfsjvhniuhwgiuhnsvkjhrruiljsfnvi lrhgiulzgjnui подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
    price: 1050,
  };

  const [colorFilter, setColorFilter] = useState(productData.photos[1].imgColor);

  const sortedColors = Array.from(new Set(productData.photos.map((item) => item.imgColor)));

  return (
    <div className={styles.card}>
      <div className={styles.card__container}>
        <h1 className={styles.card__title}>{productData.title}</h1>
        <div className={styles.card__content_container}>
          <div className={styles.card__left}>
            <div className={styles.card__slide}>
              <ProdSlider
                photos={productData.photos} 
                title={productData.title}
                colorFilter={colorFilter}
              />
            </div>
          </div>
          <div className={styles.card__right}>
            <div className={`${styles.card__info_item} ${styles.colorBox}`}>
              <h2 className={`${styles.card__subtitle} ${styles.colorTitle}`}>
                Цвет
              </h2>
              <div className={styles.card__color_list}>
                {sortedColors.map((item) => {
                    return (
                      <button
                        key={uuidv4()}
                        className={styles.card__color_item}
                        style={{ backgroundColor: item }}
                        onClick={()=>setColorFilter(item)}
                      ></button>
                    );
                  })}
              </div>
            </div>
            <p className={`${styles.card__price} ${styles.priceFirst}`}>
              {productData.price} руб
            </p>
            <button className={`${styles.card__orderBtn} ${styles.orderBtn}`}>
              Заказать
            </button>
            <div className={styles.card__info_item}>
              <h2 className={styles.card__subtitle}>
                Основные характеристики:
              </h2>
              <div
                className={
                  moreChar
                    ? `${styles.card__chars} ${styles.hidden__chars}`
                    : `${styles.card__chars} `
                }
              >
                <div className={styles.card__chars__list}>
                  {productData.features.keys.map((item, i) => {
                    return (
                      <div className={styles.card__chars__item} key={i}>
                        <div className={styles.card__chars__key}>{item}</div>
                        <div className={styles.card__chars__value}>
                          {productData.features.values[i]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                className={styles.card__more}
                onClick={() => setMoreChar(!moreChar)}
              >
                {moreChar ? 'Ещё...' : 'Свернуть'}
              </button>
            </div>
            <div className={styles.card__info_item}>
              <h2 className={styles.card__subtitle}>Описание:</h2>
              <p
                className={
                  moreDesc
                    ? `${styles.card__description} ${styles.hidden__desc}`
                    : `${styles.card__description}`
                }
              >
                {productData.description}
              </p>
              <button
                className={styles.card__more}
                onClick={() => setMoreDesc(!moreDesc)}
              >
                {moreDesc ? 'Ещё...' : 'Свернуть'}
              </button>
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
