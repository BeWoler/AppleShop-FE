import { FC } from 'react';
import styles from './styles/catalog.module.sass';
import CatalogItem from './CatalogItem';

const Catalog: FC = (): JSX.Element => {
  const catalogData = [
    {
      id: 1,
      title: 'Наушники Airpods (2го поколения)',
      photos: [
        {
          imgLink: '/assets/imgs/PodAirpods2.png',
        },
        {
          imgLink: '/assets/imgs/PodAirpods2.png',
        },
      ],
      features: {
        keys: {
          feature1: 'Кейс',
          feature2: 'Зарядка',
          feature3: 'Шумоподавление',
          feature4: 'Совместимые устройства',
        },
        values: {
          feature1: 'да',
          feature2: 'проводная',
          feature3: 'нет',
          feature4: 'IOS Android',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
    {
      id: 2,
      title: 'Наушники Airpods Pro',
      photos: [
        {
          imgLink: '/assets/imgs/PodAirpodsPro.png',
        },
        {
          imgLink: '/assets/imgs/PodAirpodsPro.png',
        },
      ],
      features: {
        keys: {
          feature1: 'Кейс',
          feature2: 'Зарядка',
          feature3: 'Шумоподавление',
          feature4: 'Совместимые устройства',
        },
        values: {
          feature1: 'да',
          feature2: 'проводная',
          feature3: 'да',
          feature4: 'IOS Android',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
    {
      id: 3,
      title: 'Наушники Airpods (3го поколения)',
      photos: [
        {
          imgLink: '/assets/imgs/PodAirpods3.png',
        },
        {
          imgLink: '/assets/imgs/PodAirpods3.png',
        },
      ],
      features: {
        keys: {
          feature1: 'Кейс',
          feature2: 'Зарядка',
          feature3: 'Шумоподавление',
          feature4: 'Совместимые устройства',
        },
        values: {
          feature1: 'да',
          feature2: 'проводная',
          feature3: 'нет',
          feature4: 'IOS Android',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
    {
      id: 4,
      title: 'Apple Watch Series 7 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWatch7.png',
          imgColor: '#000',
        },
        {
          imgLink: '/assets/imgs/PodWatch7.png',
          imgColor: '#BF1010',
        },
      ],
      features: {
        keys: {
          feature1: 'Материал',
          feature2: 'Сменный ремешок',
          feature3: 'Размер',
          feature4: 'Способ отображения времени',
        },
        values: {
          feature1: 'алюминий',
          feature2: 'да',
          feature3: '42мм',
          feature4: 'цифровой',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
    {
      id: 5,
      title: 'Apple Watch Series SE 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWatchSE.png',
          imgColor: '#000',
        },
        {
          imgLink: '/assets/imgs/PodWatchSE.png',
          imgColor: '#BF1010',
        },
      ],
      features: {
        keys: {
          feature1: 'Материал',
          feature2: 'Сменный ремешок',
          feature3: 'Размер',
          feature4: 'Способ отображения времени',
        },
        values: {
          feature1: 'алюминий',
          feature2: 'да',
          feature3: '42мм',
          feature4: 'цифровой',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
    {
      id: 6,
      title: 'Apple Watch Series 3 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWhatch3.png',
          imgColor: '#000',
        },
        {
          imgLink: '/assets/imgs/PodWhatch3.png',
          imgColor: '#BF1010',
        },
      ],
      features: {
        keys: {
          feature1: 'Материал',
          feature2: 'Сменный ремешок',
          feature3: 'Размер',
          feature4: 'Способ отображения времени',
        },
        values: {
          feature1: 'алюминий',
          feature2: 'да',
          feature3: '42мм',
          feature4: 'цифровой',
        },
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: '1050р.',
    },
  ];

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__container}>
        <div className={styles.catalog__selections}>
          <button className={styles.catalog__selection_btn} name="catalog__btn" value="all">
            Все товары
          </button>
          <button className={styles.catalog__selection_btn} name="catalog__btn" value="watches">
            Watches
          </button>
          <button className={styles.catalog__selection_btn} name="catalog__btn" value="airpods">
            Airpods
          </button>
        </div>
        <div className={styles.catalog__list}>
          {catalogData?.map((item) => {
            return (
              <CatalogItem
                // photos={item.photos}
                key={item.id}
                title={item.title}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
