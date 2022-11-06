import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/header.module.sass';
import Link from 'next/link';

const HeaderAdmin: FC = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>Шапка:</h1>
        <div className={styles.header__content}>
          <div className={styles.header__logo}>
            <h2 className={styles.header__subtitle}>Лого (в формате svg)</h2>
            <div className={styles.header__logo__item}>
              <input className={styles.header__input_file} type="file" />
              <button className={styles.header__changeBtn}>
                <Image
                  src="/assets/icons/change.svg"
                  alt="Change image"
                  layout="fill"
                />
              </button>
            </div>
          </div>
          <div className={styles.header__socials}>
            <h2 className={styles.header__subtitle}>Соцсети</h2>
            <div className={styles.header__socials__item}>
              <input className={styles.header__input_file} type="file" />
              <button className={styles.header__changeBtn}>
                <Image
                  src="/assets/icons/change.svg"
                  alt="Change image"
                  layout="fill"
                />
              </button>
              <input
                className={styles.header__input_text}
                type="text"
                placeholder="Введите ссылку"
              />
            </div>
            <div className={styles.header__socials__item}>
              <input className={styles.header__input_file} type="file" />
              <button className={styles.header__changeBtn}>
                <Image
                  src="/assets/icons/change.svg"
                  alt="Change image"
                  layout="fill"
                />
              </button>
              <input
                className={styles.header__input_text}
                type="text"
                placeholder="Введите ссылку"
              />
            </div>
            <div className={styles.header__socials__item}>
              <input className={styles.header__input_file} type="file" />
              <button className={styles.header__changeBtn}>
                <Image
                  src="/assets/icons/change.svg"
                  alt="Change image"
                  layout="fill"
                />
              </button>
              <input
                className={styles.header__input_text}
                type="text"
                placeholder="Введите ссылку"
              />
            </div>
          </div>
          <button className={styles.save__btn}>Сохранить</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
