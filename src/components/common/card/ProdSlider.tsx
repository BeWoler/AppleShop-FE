import Image from 'next/image';
import { FC } from 'react';
import styles from './styles/prodslider.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ISlider {
  photos: Array<string>;
  title: string;
}

const ProdSlider: FC<ISlider> = (props: ISlider): JSX.Element => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {props.photos.map((item) => {
        return (
          <SwiperSlide key={item}>
            <div className={styles.img_wrap}>
              <Image src={item} alt={props.title} width={400} height={400} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProdSlider;
