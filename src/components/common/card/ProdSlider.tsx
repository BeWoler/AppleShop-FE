import Image from 'next/image';
import { FC } from 'react';
import styles from './styles/prodslider.module.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';


interface ISlider {
  photos: Array<{ 
  imgLink: string,
  imgColor: string,
  colorName: string,
  }>
  title: string;
  colorFilter: string;
}

const ProdSlider: FC<ISlider> = (props: ISlider): JSX.Element => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {props.photos.map((item, i) => {
        if(props.colorFilter===item.imgColor){
          return (
          <SwiperSlide key={uuidv4()}>
            <div className={styles.img_wrap}>
              <Image src={item.imgLink} alt={props.title} layout='fill' />
            </div>
          </SwiperSlide>
        );
        }
      })}
    </Swiper>
  );
};

export default ProdSlider;
