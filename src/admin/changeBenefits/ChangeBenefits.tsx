import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/changeBenefits.module.sass';
import Link from 'next/link';

const ChangeBenefits: FC = (): JSX.Element => {
  return <div className={styles.changeBenefits}>
    <div className={styles.changeBenefits__container}>
      <h1>Изменить/Добавить преимущество</h1>
      <div className={styles.changeBenefits__content}>
        <div className={styles.changeBenefits__content__item}>
          <h3>Иконка (в формате svg)</h3>
          <div className={styles.inputBtn}>
          <input className={styles.changeBenefits__fileInput} type="file"/>
          <button className={styles.changeBenefits__changeBtn}>
                <Image src='/assets/icons/change.svg' alt='Change image' layout='fill'/>
          </button>
          </div>
        </div>
        <div className={styles.changeBenefits__content__item}>
          <h3>Заголовок</h3>
          <input className={styles.changeBenefits__textInput} placeholder='введите заголовок' type="text"/>
        </div>
        <div className={styles.changeBenefits__content__item}>
          <h3>Контент</h3>
          <textarea className={styles.changeBenefits__textareaInput} placeholder='введите текст'/>
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
    </div>
  </div>
};

export default ChangeBenefits;