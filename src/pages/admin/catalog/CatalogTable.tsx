import { FC, Fragment } from 'react';
import Image from 'next/image';
import styles from './styles/catalogTable.module.sass';
import Link from 'next/link';

interface ICatalogTableProp {
  chapter: string;
}

const CatalogTable: FC<ICatalogTableProp> = ({
  chapter,
}: ICatalogTableProp): JSX.Element => {
  const catalogData = [
    {
      id: 1,
      title: 'Наушники Airpods (2го поколения)',
      chapter: 'наушники',
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
      id: 2,
      title: 'Наушники Airpods Pro',
      chapter: 'наушники',
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
      chapter: 'наушники',
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
      chapter: 'часы',
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
      chapter: 'часы',
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
      chapter: 'часы',
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
    <div className={styles.catalog__table}>
      <div
        className={`${styles.catalog__table__cell} ${styles.catalog__table__column}`}
      >
        <p>Фото</p>
      </div>
      <div
        className={`${styles.catalog__table__cell} ${styles.catalog__table__column}`}
      >
        <p>Название товара</p>
      </div>
      <div
        className={`${styles.catalog__table__cell} ${styles.catalog__table__column}`}
      >
        <p>Цена</p>
      </div>
      <div
        className={`${styles.catalog__table__cell} ${styles.catalog__table__column}`}
      >
        <p>Действия</p>
      </div>
      {catalogData.map((item, i) => {
        if (item.chapter === chapter) {
          return (
            <Fragment key={item.id}>
              <div className={styles.catalog__table__cell}>
                <div className={styles.catalog__table__photo}>
                  <Image
                    src={item.photos[1].imgLink}
                    alt="изменить"
                    layout="fill"
                  ></Image>
                </div>
              </div>
              <div className={styles.catalog__table__cell}>
                <p className={styles.catalog__table__title}>{item.title}</p>
              </div>
              <div className={styles.catalog__table__cell}>
                <p className={styles.catalog__table__price}>
                  {item.price} руб.
                </p>
              </div>
              <div className={styles.catalog__table__cell}>
                <div className={styles.catalog__table__btns}>
                  <button>
                    <Image
                      src="/assets/icons/changeBtn.svg"
                      alt="изменить"
                      layout="fill"
                    ></Image>
                  </button>
                  <button>
                    <Image
                      src="/assets/icons/copyBtn.svg"
                      alt="копировать"
                      layout="fill"
                    ></Image>
                  </button>
                  <button>
                    <Image
                      src="/assets/icons/delteBtn.svg"
                      alt="удалить"
                      layout="fill"
                    ></Image>
                  </button>
                </div>
              </div>
            </Fragment>
          );
        }
      })}
      <div
        className={`${styles.catalog__table__cell} ${styles.catalog__table__add}`}
      >
        <button>Добавить</button>
      </div>
    </div>
  );
};

export default CatalogTable;
