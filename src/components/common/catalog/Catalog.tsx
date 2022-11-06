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
        keys: ['Кейс', 'Зарядка', 'Шумоподавление', 'Совместимые устройства'],
        values: ['да', 'проводная', 'нет', 'IOS Android'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
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
        keys: ['Кейс', 'Зарядка', 'Шумоподавление', 'Совместимые устройства'],
        values: ['да', 'проводная', 'нет', 'IOS Android'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
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
        keys: ['Кейс', 'Зарядка', 'Шумоподавление', 'Совместимые устройства'],
        values: ['да', 'проводная', 'нет', 'IOS Android'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
    },
    {
      id: 4,
      title: 'Apple Watch Series 7 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWatch7.png',
          imgColor: '#000',
          colorName: 'Черный',
        },
        {
          imgLink: '/assets/imgs/PodWatch7.png',
          imgColor: '#BF1010',
          colorName: 'Черный',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Способ отображения времени',
        ],
        values: ['алюминий', 'да', '42мм', 'цифровой'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
    },
    {
      id: 5,
      title: 'Apple Watch Series SE 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWatchSE.png',
          imgColor: '#000',
          colorName: 'Черный',
        },
        {
          imgLink: '/assets/imgs/PodWatchSE.png',
          imgColor: '#BF1010',
          colorName: 'Черный',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Способ отображения времени',
        ],
        values: ['алюминий', 'да', '42мм', 'цифровой'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
    },
    {
      id: 6,
      title: 'Apple Watch Series 3 42мм',
      photos: [
        {
          imgLink: '/assets/imgs/PodWhatch3.png',
          imgColor: '#000',
          colorName: 'Черный',
        },
        {
          imgLink: '/assets/imgs/PodWhatch3.png',
          imgColor: '#BF1010',
          colorName: 'Черный',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Способ отображения времени',
        ],
        values: ['алюминий', 'да', '42мм', 'цифровой'],
      },
      description:
        'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
      price: 1050,
    },
  ];

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__container}>
        <div className={styles.catalog__selections}>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="all"
          >
            Все товары
          </button>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="watches"
          >
            Watches
          </button>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="airpods"
          >
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
