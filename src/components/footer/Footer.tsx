import { FC } from 'react';
import styles from './styles/footer.module.sass';
import Image from 'next/image';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
      <p className={styles.footer__info}>
        ИП Лазарчик Евгений Владимирович, Республика Беларусь, г. Петриков, ул.
        Мира, 22-27 Зарегистрирован Крупским РИК 15.02.2019, 690793068.
        Зарегистрирован в Торговом Реестре РБ 29.07.2020
      </p>
      {/* <div className={styles.footer__logo}>
        <Image src='/assets/icons/apple-icon.svg' alt='icon' layout='fill'></Image>
      </div>
      <div className={styles.footer__inst}>
        <Image src='/assets/icons/inst-icon.svg' alt='instagram' layout='fill'></Image>
      </div> */}
      </div>
    </footer>
  );
};

export default Footer;
