import Image from 'next/image';
import { FC } from 'react';
import BenefitVideo from './BenefitVideo';
import styles from './styles/benefits.module.sass';

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

const Benefits: FC = (): JSX.Element => {
  return (
    <div className={styles.benefits__box}>
      <BenefitVideo url="https://youtu.be/QqgCmjiUwxM" />
      <div className={styles.benefits__items}>
        <ul className={styles.benefits__list}>
          {benefitsData?.map((item) => {
            return (
              <li key={item.id}>
                <Image src={item.icon} width="60" height="60" alt={item.icon} />
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
