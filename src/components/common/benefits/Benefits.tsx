import Image from 'next/image';
import { FC } from 'react';
import styles from './styles/benefits.module.sass';

const benefitsData = [
  {
    id: 1,
    icon: '/assets/icons/apple-default-icon.svg',
    title: 'Точная копия',
    text: 'Наши девайсы не отличаются от оригинала ни визуально, ни по техническим характеристикам',
  },
  {
    id: 2,
    icon: '/assets/icons/airpods-icon.svg',
    title: 'Шумоподавление',
    text: 'Наушники AirPods Pro и AirPods 3 имеют шумоподавление. Больше ничто не помешает наслаждаться музыкой! ',
  },
  {
    id: 3,
    icon: '/assets/icons/apWatch-icon.svg',
    title: 'Сапфировое стекло',
    text: 'Все Apple watch изготовлены из сапфирового стекла, а значит вы можете не беспокоиться о циферблате даже в самых экстремальных ситуациях!',
  },
  {
    id: 4,
    icon: '/assets/icons/bonefire-icon.svg',
    title: 'Коннектятся с IOS и Android',
    text: 'Все часы и наушники в нашем магазине отлично подходят для IOS и Android смартфонов, никаких дополнительных программ не нужно',
  },
];

const Benefits: FC = (): JSX.Element => {
  return (
    <div className={styles.benefits__box} id='benefits'>
      <div className={styles.benefits__img__overflow}>
        <div className={styles.benefits__img_wrap}>
          <Image
            src="/assets/imgs/benefits.png"
            alt="appleWatch"
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.benefits__items}>
        <ul className={styles.benefits__list}>
          {benefitsData?.map((item) => {
            return (
              <li key={item.id}>
                <div className={styles.benefits__svg}>
                  <Image src={item.icon} layout="fill" alt={item.icon} />
                </div>
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
