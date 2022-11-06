import { FC, Fragment } from 'react';
import Image from 'next/image';
import styles from './styles/catalog.module.sass';
import Link from 'next/link';
import CatalogTable from './CatalogTable';

const CatalogAdmin: FC = (): JSX.Element => {
  // const catalogData = [
  //   {
  //     id: 1,
  //     title: 'Наушники Airpods (2го поколения)',
  //     chapter: 'нушники',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodAirpodsPro.png',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodAirpodsPro.png',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Кейс',
  //         'Зарядка',
  //         'Шумоподавление',
  //         'Совместимые устройства',
  //       ],
  //       values: [
  //         'да',
  //         'проводная',
  //         'нет',
  //         'IOS Android',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  //   {
  //     id: 2,
  //     title: 'Наушники Airpods Pro',
  //     chapter: 'нушники',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodAirpodsPro.png',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodAirpodsPro.png',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Кейс',
  //         'Зарядка',
  //         'Шумоподавление',
  //         'Совместимые устройства',
  //       ],
  //       values: [
  //         'да',
  //         'проводная',
  //         'нет',
  //         'IOS Android',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  //   {
  //     id: 3,
  //     title: 'Наушники Airpods (3го поколения)',
  //     chapter: 'нушники',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodAirpods3.png',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodAirpods3.png',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Кейс',
  //         'Зарядка',
  //         'Шумоподавление',
  //         'Совместимые устройства',
  //       ],
  //       values: [
  //         'да',
  //         'проводная',
  //         'нет',
  //         'IOS Android',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  //   {
  //     id: 4,
  //     title: 'Apple Watch Series 7 42мм',
  //     chapter: 'часы',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodWatch7.png',
  //         imgColor: '#000',
  //         colorName: 'Черный',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodWatch7.png',
  //         imgColor: '#BF1010',
  //         colorName: 'Черный',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Материал',
  //         'Сменный ремешок',
  //         'Размер',
  //         'Способ отображения времени',
  //       ],
  //       values: [
  //         'алюминий',
  //         'да',
  //         '42мм',
  //         'цифровой',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  //   {
  //     id: 5,
  //     title: 'Apple Watch Series SE 42мм',
  //     chapter: 'часы',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodWatchSE.png',
  //         imgColor: '#000',
  //         colorName: 'Черный',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodWatchSE.png',
  //         imgColor: '#BF1010',
  //         colorName: 'Черный',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Материал',
  //         'Сменный ремешок',
  //         'Размер',
  //         'Способ отображения времени',
  //       ],
  //       values: [
  //         'алюминий',
  //         'да',
  //         '42мм',
  //         'цифровой',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  //   {
  //     id: 6,
  //     title: 'Apple Watch Series 3 42мм',
  //     chapter: 'часы',
  //     photos: [
  //       {
  //         imgLink: '/assets/imgs/PodWhatch3.png',
  //         imgColor: '#000',
  //         colorName: 'Черный',
  //       },
  //       {
  //         imgLink: '/assets/imgs/PodWhatch3.png',
  //         imgColor: '#BF1010',
  //         colorName: 'Черный',
  //       },
  //     ],
  //     features: {
  //       keys: [
  //         'Материал',
  //         'Сменный ремешок',
  //         'Размер',
  //         'Способ отображения времени',
  //       ],
  //       values: [
  //         'алюминий',
  //         'да',
  //         '42мм',
  //         'цифровой',
  //       ],
  //     },
  //     description:
  //       'Умные подсказки про физическую активность. Усовершенствованное приложение «Пульс». Любимые плейлисты прямо на запястье. Встроенный высотомер. И более мощный процессор.',
  //     price: 1050,
  //   },
  // ];

  return (
    <div className={styles.catalog}>
      <div className={styles.catalog__container}>
        <h1 className={styles.catalog__title}>Каталог:</h1>
        <div className={styles.catalog__paragpaph}>
          <h2 className={styles.catalog__subtitle}>Наушники</h2>
          <CatalogTable chapter="наушники" />
        </div>
        <button className={styles.save__btn}>Сохранить</button>
        <div className={styles.catalog__paragpaph}>
          <h2 className={styles.catalog__subtitle}>Часы</h2>
          <CatalogTable chapter="часы" />
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
    </div>
  );
};

export default CatalogAdmin;
