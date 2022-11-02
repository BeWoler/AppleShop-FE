import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/changeDelivery.module.sass';
import Link from 'next/link';

const ChangeDelivery: FC = (): JSX.Element => {
  return <div className={styles.changeDelivery}>
    <div className={styles.changeDelivery__container}>
      <h1>Изменить/Добавить доставку</h1>
      <div className={styles.changeDelivery__content}>
      <div className={styles.changeDelivery__content__item}>
          <h3>Раздел</h3>
          <div className={styles.changeDelivery__radioItems}>
          <label className={styles.label__radio} htmlFor='доставка'>Доставка
            <input className={styles.input__radio} type="radio" name='раздел' id='доставка'/>
          </label>
          <label className={styles.label__radio} htmlFor='оплата'>Оплата
            <input className={styles.input__radio} type="radio" name='раздел' id='оплата'/>
          </label>
          </div>
        </div>
        <div className={styles.changeDelivery__content__item}>
          <h3>Название</h3>
          <input className={styles.changeDelivery__textInput} placeholder='введите заголовок' type="text"/>
        </div>
        <div className={styles.changeDelivery__content__item}>
          <h3>Описание</h3>
          <textarea className={styles.changeDelivery__textareaInput} placeholder='введите текст' />
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
    </div>
  </div>
};

export default ChangeDelivery;