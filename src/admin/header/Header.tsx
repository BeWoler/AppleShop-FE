import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/menu.module.sass';
import SaveBtn from 'admin/SaveBtn/SaveBtn';
import Link from 'next/link';

const Header: FC = (): JSX.Element => {

  return <div className={styles.header}>
    <div className={styles.header__container}>
      <h1 className={styles.header__title}>Шапка;</h1>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <h2 className={styles.header__subtitle}>Лого (в формате svg)</h2>
          <div className={styles.header__logo__item}>
            <input className={styles.header__input_file} type="file" />
            <button className={styles.header__changeBtn}>
                <Image src='/assets/icons/change.svg' alt='Change image' layout='fill'/>
            </button>
          </div>
        </div>
        <div className={styles.header__socials}>
          <h2 className={styles.header__subtitle}>Соцсети</h2>
          <div className={styles.header__socials__item}>
            <input className={styles.header__input_file} type="file" />
            <button  className={styles.header__changeBtn}>
              <Image src='/assets/icons/change.svg' alt='Change image' layout='fill'/>
            </button>
            <input className={styles.header__input_text} type="text" placeholder='Введите ссылку'/>
            </div>
          <div className={styles.header__socials__item}>
            <input className={styles.header__input_file} type="file" />
            <button  className={styles.header__changeBtn}>
              <Image src='/assets/icons/change.svg'  alt='Change image' layout='fill'/>
            </button>
            <input className={styles.header__input_text} type="text" placeholder='Введите ссылку'/>
          </div>
          <div className={styles.header__socials__item}>
            <input className={styles.header__input_file} type="file" />
            <button  className={styles.header__changeBtn}>
              <Image src='/assets/icons/change.svg'  alt='Change image' layout='fill'/>
            </button>
            <input className={styles.header__input_text} type="text" placeholder='Введите ссылку' />
          </div>
        </div>
        <SaveBtn/>
      </div>
    </div>
  </div>;
};

export default Header;