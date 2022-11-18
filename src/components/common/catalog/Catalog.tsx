import { FC } from 'react';
import styles from './styles/catalog.module.sass';
import CatalogItem from './CatalogItem';
import { useState } from 'react';

const Catalog: FC = (): JSX.Element => {
  const catalogData = [
    {
      id: 1,
      title: 'AirPods 2',
      chapter: 'наушники',
      photos: [
        {
          imgLink: ['/assets/imgs/PodAirpods2.png', '/assets/imgs/airpods22.png'],
          imgColor: '#fff',
          colorName: 'Белый',
        },
      ],
      features: {
        keys: [
          'Воспроизведение аудио',
          'В режиме разговора',
          'Подключение',
          'Форм-фактор',
          'Тип крепления',
          'Режим аудиовыхода'
        ],
        values: ['Макс. 5 ч', 'Макс. 3 ч', 'Беспроводное', 'Вкладыши', 'Внутриканальные', 'Стерео'],
      },
      description: 'Новые AirPods в футляре с возможностью беспроводной зарядки — это сочетание тщательно продуманного дизайна, передовых технологий и кристально чистого звука. Благодаря новому чипу H1 от Apple эти наушники могут работать в режиме телефонного разговора до 3 часов без подзарядки. Основные характеристики: aвтоматическое включение и подключение к устройству; новый чип H1 от Apple обеспечивает более быстрое беспроводное подключение наушников к устройствам; быстрая подзарядка в футляре; футляр можно заряжать с помощью устройств для беспроводной зарядки стандарта Qi или через разъём Lightning; высокое качество звучания музыки и голоса',
      price: 250,
    },
    {
      id: 2,
      title: 'AirPods Pro',
      chapter: 'наушники',
      photos: [
        {
          imgLink: ['/assets/imgs/PodAirpodsPro.png', '/assets/imgs/airpodsPro22.png','/assets/imgs/airpodsPro33.png','/assets/imgs/airpodsPro44.png'],
          imgColor: '#fff',
          colorName: 'Белый',
        },
      ],
      features: {
        keys: [
          'Воспроизведение аудио',
          'В режиме разговора',
          'Подключение',
          'Форм-фактор',
          'Тип крепления',
          'Режим аудиовыхода',
          'Элементы управления звуком'
        ],
        values: ['Макс. 4.5 ч', 'Макс. 3.5 ч', 'Беспроводное', 'Вкладыши', 'Внутриканальные', 'Стерео', 'Воспроизведение/Пауза, Управление вызовами, Следующий трек, Предыдущий трек, Переключатель: Активное Шумоподавление/Прозрачный режим'],
      },
      description: 'AirPods Pro устойчивы к воздействию пота и воды (не распространяется на занятия водными видами спорта) и протестированы в специально поддерживаемых лабораторных условиях. Они имеют рейтинг IPX4 по стандарту IEC 60529. Устойчивость к воздействию пота и воды может снижаться при естественном износе. Не пытайтесь заряжать мокрые AirPods Pro: протрите и высушите их. Зарядный футляр не защищён от пота и воды. Основные характеристики: aвтоматическое включение и подключение к устройству; новый чип H1 от Apple обеспечивает более быстрое беспроводное подключение наушников к устройствам; быстрая подзарядка в футляре; футляр можно заряжать с помощью устройств для беспроводной зарядки стандарта Qi или через разъём Lightning; высокое качество звучания музыки и голоса',
      price: 250,
    },
    {
      id: 3,
      title: 'AirPods 3',
      chapter: 'наушники',
      photos: [
        {
          imgLink: ['/assets/imgs/PodAirpods3.png',],
          imgColor: '#fff',
          colorName: 'Белый',
        },
      ],
      features: {
        keys: [
          'Воспроизведение аудио',
          'В режиме разговора',
          'Подключение',
          'Форм-фактор',
          'Тип крепления',
          'Режим аудиовыхода'
        ],
        values: ['Макс. 5 ч', 'Макс. 3 ч', 'Беспроводное', 'Вкладыши', 'Внутриканальные', 'Стерео'],
      },
      description: 'Новые AirPods 3 в футляре с возможностью беспроводной зарядки — это сочетание тщательно продуманного дизайна, передовых технологий и кристально чистого звука. Благодаря новому чипу H1 от Apple эти наушники могут работать в режиме телефонного разговора до 3 часов без подзарядки. Основные характеристики: aвтоматическое включение и подключение к устройству; новый чип H1 от Apple обеспечивает более быстрое беспроводное подключение наушников к устройствам; быстрая подзарядка в футляре; футляр можно заряжать с помощью устройств для беспроводной зарядки стандарта Qi или через разъём Lightning; высокое качество звучания музыки и голоса',
      price: 250,
    },
    {
      id: 4,
      title: 'Apple Watch SE 42мм',
      chapter: 'часы',
      photos: [
        {
          imgLink: ['/assets/imgs/watchsewhite-1__1_-removebg-preview.png', '/assets/imgs/watchsewhite-2__1_-removebg-preview.png', '/assets/imgs/watchsewhite-3__1_-removebg-preview.png', ],
          imgColor: '#fff',
          colorName: 'Белый',
        },
        {
          imgLink:['/assets/imgs/watchsered-1-removebg-preview.png', '/assets/imgs/watchsered-2-removebg-preview.png', '/assets/imgs/watchsered-3-removebg-preview.png',],
          imgColor: '#DF1010',
          colorName: 'Красный',
        },
        {
          imgLink:[ '/assets/imgs/watchseblue-1-removebg-preview.png', '/assets/imgs/watchseblue-2-removebg-preview.png', '/assets/imgs/watchseblue-3-removebg-preview.png'],
          imgColor: '#4473A4',
          colorName: 'Синий',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Материал браслета',
          'Стекло',
          'Технология дисплея',
          'Сенсорный экран',
          'Внутренняя память',
          'Водонепроницаемость'
        ],
        values: ['Алюминий', 'Да', '42мм', 'Фторэластомер', 'сапфировое', 'OLED LTPO', 'Ёмкостный Force Touch', '32 ГБ', '50m'],
      },
      description: 'Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Передовые датчики, которые отслеживают все виды физической активности и показатели ваших любимых тренировок. Apple Watch SE — часы, с которыми вы оцените каждую секунду.',
      price: 700,
    },
    {
      id: 5,
      title: 'Apple Watch 6 42мм',
      chapter: 'часы',
      photos: [
        {
          imgLink: ['/assets/imgs/Watch6Gray-1-removebg-preview.png','/assets/imgs/Watch6Gray-2-removebg-preview.png','/assets/imgs/Watch6Gray-3-removebg-preview.png', ],
          imgColor: '#34353C',
          colorName: 'Серый',
        },
        {
          imgLink:['/assets/imgs/Watch6Milk-1-removebg-preview.png', '/assets/imgs/Watch6Milk-2-removebg-preview.png',],
          imgColor: '#E1DBDA',
          colorName: 'Молочный',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Материал браслета',
          'Стекло',
          'Технология дисплея',
          'Сенсорный экран',
          'Внутренняя память',
          'Водонепроницаемость'
        ],
        values: ['Алюминий', 'Да', '42мм', 'Фторэластомер', 'сапфировое', 'OLED LTPO', 'Ёмкостный Force Touch', '32 ГБ', '50m'],
      },
      description: 'Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Передовые датчики, которые отслеживают все виды физической активности и показатели ваших любимых тренировок. Apple Watch SE — часы, с которыми вы оцените каждую секунду.',
      price: 800,
    },
    {
      id: 6,
      title: 'Apple Watch 7 42мм',
      chapter: 'часы',
      photos: [
        {
          imgLink: ['/assets/imgs/watch7gray-2-removebg-preview.png', '/assets/imgs/watch7gray-1-removebg-preview.png',],
          imgColor: '#34353C',
          colorName: 'Серый',
        },
        {
          imgLink:['/assets/imgs/watch7green-1-removebg-preview.png', '/assets/imgs/watch7green-2-removebg-preview.png',],
          imgColor: '#036318',
          colorName: 'Зеленый',
        },
        {
          imgLink:[ '/assets/imgs/watch7red-1-removebg-preview.png', '/assets/imgs/watch7red-2-removebg-preview.png',],
          imgColor: '#DF1010',
          colorName: 'Красный',
        },
      ],
      features: {
        keys: [
          'Материал',
          'Сменный ремешок',
          'Размер',
          'Материал браслета',
          'Стекло',
          'Технология дисплея',
          'Сенсорный экран',
          'Внутренняя память',
          'Водонепроницаемость'
        ],
        values: ['Алюминий', 'Да', '42мм', 'Фторэластомер', 'сапфировое', 'OLED LTPO', 'Ёмкостный Force Touch', '32 ГБ', '50m'],
      },
      description: 'Мощные функции, с которыми ещё проще вести активный образ жизни, следить за здоровьем, оставаться на связи и чувствовать себя в безопасности. Передовые датчики, которые отслеживают все виды физической активности и показатели ваших любимых тренировок. Apple Watch SE — часы, с которыми вы оцените каждую секунду.',
      price: 900,
    },
  ];

  const [filter, setFilter] = useState<'все' | 'часы' | 'наушники'>('все');

  return (
    <div className={styles.catalog} id='catalog'>
      <div className={styles.catalog__container}>
        <div className={styles.catalog__selections}>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="all"
            onClick={() => {
              setFilter('все');
            }}
          >
            Все товары
          </button>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="watches"
            onClick={() => {
              setFilter('часы');
            }}
          >
            Watches
          </button>
          <button
            className={styles.catalog__selection_btn}
            name="catalog__btn"
            value="airpods"
            onClick={() => {
              setFilter('наушники');
            }}
          >
            Airpods
          </button>
        </div>
        <div className={styles.catalog__list}>
          {filter === 'все'
            ? catalogData?.map((item) => {
                return (
                  <CatalogItem
                    photo={item.photos[0]?.imgLink[0]}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                  />
                );
              })
            : catalogData?.filter(item => item.chapter === filter).map(item =>{
              return (
                <CatalogItem
                  photo={item.photos[0]?.imgLink[0]}
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
