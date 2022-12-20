import Image from 'next/image';
import { FC, Fragment } from 'react';
import styles from './styles/prodslider.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';

interface ISlider {
  photos: Array<{
    imgLink: Array<string>;
    imgColor: string;
    colorName: string;
  }>;
  title: string;
  colorFilter: string;
}

const ProdSlider: FC<ISlider> = (props: ISlider): JSX.Element => {
  return (
    <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
      {props.photos.map(
        (item) =>
          props.colorFilter === item.imgColor && 
          item.imgLink.map((photo) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <div className={item.imgLink.length === 1 ? `${styles.img_wrap} ${styles.wihtoutNav}` : styles.img_wrap}>
                  <Image src={photo} alt={props.title} layout="fill" />
                </div>
              </SwiperSlide>
            );
          })
      )}
    </Swiper>
  );
};

export default ProdSlider;
