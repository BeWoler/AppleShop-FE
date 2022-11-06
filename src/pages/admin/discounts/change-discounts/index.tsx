import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/changeDiscounts.module.sass';
import Link from 'next/link';

const ChangeDiscounts: FC = (): JSX.Element => {
  return <div className={styles.changeDiscounts}>
    <div className={styles.changeDiscounts__container}>
      <h1>Изменить/Добавить акцию</h1>
      <div className={styles.changeDiscounts__content}>
        <div className={styles.changeDiscounts__content__item}>
          <h3>Дата</h3>
          <input className={styles.changeDiscounts__textInput} placeholder='введите заголовок' type="text"/>
        </div>
        <div className={styles.changeDiscounts__content__item}>
          <h3>Описание</h3>
          <textarea className={styles.changeDiscounts__textareaInput} placeholder='введите текст' />
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
    </div>
  </div>
};

export default ChangeDiscounts;