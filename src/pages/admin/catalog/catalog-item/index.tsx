import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/addCatalogItem.module.sass';
import Link from 'next/link';
import { useState } from 'react';

const AddCatalogItem: FC = (): JSX.Element => {

  interface Objs {
    key: string,
    value: string
  }

  const initialState = [
    {
      key: 'введите критерий',
      value: 'введите значение'
    },
    {
      key: 'введите критерий',
      value: 'введите значение'
    },
    {
      key: 'введите критерий',
      value: 'введите значение'
    },
  ]
  const keyValueObj = {
    key: 'введите критерий',
    value: 'введите значение'
  }

  const [charsInputs, setCharsInputs] = useState<Array<Objs>>(initialState);

  return <div className={styles.addItem}>
    <div className={styles.addItem__container}>
      <h1>Изменить/Добавить карточку товара</h1>
      <div className={styles.addItem__content}>
        <div className={styles.addItem__content__item}>
        <div className={styles.addItem__content__subitem}>
          <h3>Фото (с прозрачным фоном)</h3>
          <div className={styles.inputBtn}>
          <input className={styles.addItem__fileInput} type="file"/>
          <button className={styles.addItem__changeBtn}>
                <Image src='/assets/icons/change.svg' alt='Change image' layout='fill'/>
          </button>
          </div>
        </div>
        <div className={styles.addItem__content__subitem}>
          <h3>Hex код цвета для этого фото</h3>
          <input className={styles.addItem__textInput} placeholder='введите заголовок' type="text"/>
        </div>
        <div className={styles.addItem__content__subitem}>
          <h3>Расшифровка (название) цвета</h3>
          <input className={styles.addItem__textInput} placeholder='введите текст' type="text"/>
        </div>
        </div>
        <div className={styles.addItem__content__item}>
          <h3>Название товара</h3>
          <input className={styles.addItem__textInput} placeholder='введите текст' type="text"/>
        </div>
        <div className={styles.addItem__content__item}>
          <h3>Характеристики</h3>
          <div className={styles.addItem__charList}>
          {charsInputs?.map((item, i) =>{
            return <div key={i} className={styles.addItem__chars}>
              <input className={styles.addItem__charInput} placeholder={item.key} type="text"/>
              <input className={styles.addItem__charInput} placeholder={item.value} type="text"/>
              <button className={styles.addItem__charDelete} onClick={()=> setCharsInputs([...charsInputs.slice(0, i), ...charsInputs.slice(i + 1)])}>
                <Image src='/assets/icons/delteBtn.svg' alt='удалить' layout='fill'></Image>
              </button>
            </div>
          })}
          </div>
          <button onClick={()=> setCharsInputs([...charsInputs, keyValueObj])} className={styles.addItem__charAdd}>Добавить</button>
        </div>
        <div className={styles.addItem__content__item}>
          <h3>Описание</h3>
          <textarea className={styles.addItem__textareaInput} placeholder='введите текст'/>
        </div>
        <div className={styles.addItem__content__item}>
          <h3>Цена (руб)</h3>
          <input className={styles.addItem__textInput} placeholder='введите текст' type="text"/>
        </div>
        <div className={styles.addItem__content__item}>
          <h3>Раздел</h3>
          <div className={styles.addItem__radioItems}>
          <label className={styles.label__radio} htmlFor='наушники'>Наушники
            <input className={styles.input__radio} type="radio" name="delivery" id='наушники'/>
          </label>
          <label className={styles.label__radio} htmlFor='часы'>Часы
            <input className={styles.input__radio} type="radio" name="delivery" id='часы'/>
          </label>
          </div>
        </div>
        <button className={styles.save__btn}>Сохранить</button>
      </div>
    </div>
  </div>
};

export default AddCatalogItem;