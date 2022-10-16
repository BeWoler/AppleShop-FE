import Image from 'next/image';
import { FC } from 'react';
import { IBenefitVideo } from './interfaces/BenefitVideo.interface';

const BenefitVideo: FC<IBenefitVideo> = ({ url }: IBenefitVideo) => {
  return (
    <Image
      src="/assets/imgs/watch.jpg"
      alt="appleWatch"
      width={550}
      height={900}
    />
  );
};

export default BenefitVideo;
