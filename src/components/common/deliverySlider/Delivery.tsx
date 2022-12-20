import { FC } from 'react';
import styles from './styles/delivery.module.sass';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DeliverySlider: FC = (): JSX.Element => {
  const deliveryData = [
    {
      id: 1,
      title: 'Доставка по Минску',
      content:
        'Возможна доставка по Минску курьером. При заказе до 15:00 доставка возможна в этот же день, при заказе после 15:00 - доставка на следующий день. Стоимость доставки - 5р.',
    },
    {
      id: 2,
      title: 'Доставка по РБ',
      content:
        'Доставка почтой или европочтой наложенным платежом. Отправка на следующий день после заказа, доставка 3-5дн (в зависимости от города и условий почты. Стоимость почтой - 5р, европочтой -3р.',
    },
    {
      id: 3,
      title: 'Оплата',
      content:
        'Оплата возможна наличными или по карте при доставке курьером, а так же на почте, оплатив наложенный платеж.',
    },
  ];

  const newDeliveryData = [
    ...deliveryData,
    {
      id: uuidv4(),
      title: 'Нет подходящего варианта?',
      content:
        'Оставьте свой номер телефона, менеджер свжется с вами и обязательно поможет с вашим запросом!',
    },
  ];

  const [imgIndex, setImgIndex] = useState(0);

  const NextArrow = ({ onClick }: any) => {
    return (
      <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
        <div>
          <Image
            src={'/assets/icons/arrowNext.svg'}
            alt="next slide"
            layout="fill"
          />
        </div>
      </div>
    );
  };

  const PrevArrow = ({ onClick }: any) => {
    return (
      <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
        <div>
          <Image
            src={'/assets/icons/arrowPrev.svg'}
            alt="next slide"
            layout="fill"
          />
        </div>
      </div>
    );
  };

  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () =>
        setWindowWidth(window.innerWidth)
      );
  }, [windowWidth]);

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: windowWidth <= 750 ? true : false,
    speed: 500,
    slidesToShow: windowWidth <= 750 ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    touchMove: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: any) => setImgIndex(next),
  };

  return (
    <div className={styles.delivery} id='delivery'>
      <div className={styles.delivery__container}>
        <h2 className={styles.delivery__title}>Доставка & Оплата</h2>
        {/* @ts-ignore */}
        <Slider {...settings}>
          {newDeliveryData?.map((item, i) => {
            if (i === newDeliveryData.length - 1) {
              return (
                <div
                  className={
                    i === imgIndex
                      ? `${styles.slide} ${styles.activeSlide} ${styles.delivery__item}`
                      : `${styles.slide} ${styles.delivery__item}`
                  }
                  key={item.id}
                >
                  <div>
                  <h3 className={styles.delivery__item__title}>
                    Нет подходящего варианта?
                  </h3>
                  <p className={styles.delivery__item__text}>
                    Оставьте свой номер телефона, менеджер свжется с вами и
                    обязательно поможет с вашим запросом!
                  </p>
                  <input
                    type="tel"
                    placeholder="+375(__)___-__-__"
                    className={styles.delivery__item__input}
                  />
                  <button className={styles.delivery__item__btn}>
                    Отправить
                  </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className={
                    i === imgIndex
                      ? `${styles.slide} ${styles.activeSlide} ${styles.delivery__item}`
                      : `${styles.slide} ${styles.delivery__item}`
                  }
                  key={item.id}
                >
                  <div>
                  <h3 className={styles.delivery__item__title}>{item.title}</h3>
                  <p className={styles.delivery__item__text}>{item.content}</p>
                  </div>
                </div>
              );
            }
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DeliverySlider;
