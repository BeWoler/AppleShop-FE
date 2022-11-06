import { FC, Fragment } from 'react';
import Image from 'next/image';
import styles from './styles/benefits.module.sass';
import Link from 'next/link';
const BenefitsAdmin: FC = (): JSX.Element => {

  const benefitsData = [
    {
      id: 1,
      icon: '/assets/icons/apple-default-icon.svg',
      title: 'Точная копия',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.',
    },
    {
      id: 2,
      icon: '/assets/icons/airpods-icon.svg',
      title: 'Шумоподавление',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.',
    },
    {
      id: 3,
      icon: '/assets/icons/apWatch-icon.svg',
      title: 'Сапфировое стекло',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.',
    },
    {
      id: 4,
      icon: '/assets/icons/bonefire-icon.svg',
      title: 'Коннектятся с IOS и Android',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et illum explicabo, fugit culpa fuga inventore voluptatibus.',
    },
  ];

  return <div className={styles.benefits}>
      <div className={styles.benefits__container}>
        <h1 className={styles.benefits__title}>Преимущества:</h1>
        <div className={styles.benefits__paragpaph}>
        <h2 className={styles.benefits__subtitle}>Список преимуществ</h2>
        <div className={styles.benefits__table}>
          {benefitsData.map((item, i) =>{
            return <Fragment key={item.id}>
              <div className={styles.benefits__table__cell}>
                <div className={styles.benefits__table__icon}>
                  <Image src={item.icon} alt='изменить' layout='fill'></Image>
                </div>
              </div>
              <div className={styles.benefits__table__cell}>
              <p className={styles.benefits__table__title}>{item.title}</p>
              </div>
              <div className={styles.benefits__table__cell}>
              <p className={styles.benefits__table__text}>{item.text}</p>
              </div>
              <div className={styles.benefits__table__cell}>
              <div className={styles.benefits__table__btns}>
                <button>
                  <Image src='/assets/icons/changeBtn.svg' alt='изменить' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/copyBtn.svg' alt='копировать' layout='fill'></Image>
                </button>
                <button>
                <Image src='/assets/icons/delteBtn.svg' alt='удалить' layout='fill'></Image>
                </button>
              </div>
              </div>
            </Fragment>
          })}
        </div>
        </div>
        <div className={styles.benefits__paragpaph}>
          <h2 className={styles.benefits__subtitle}>Ссылка на видео</h2>
          <input className={styles.benefits__linkInput} placeholder='Введите ссылку' type="text" />
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
  </div>;
};

export default BenefitsAdmin;