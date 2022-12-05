import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/addCatalogItem.module.sass';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const AddCatalogItem: FC = (): JSX.Element => {

  const initialStateInputs = [
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
  const [charsInputs, setCharsInputs] = useState<Array<{ key: string, value: string}>>(initialStateInputs);

  const initialStatePhotos = ['fistElPhotoesId']
  const [photos, setPhotos] = useState<Array<string>>(initialStatePhotos);

  const initialStateColors = ['fistElColorsId']
  const [colors, setColors] = useState<Array<string>>(initialStateColors);

  return <div className={styles.addItem}>
    <div className={styles.addItem__container}>
      <h1>Изменить/Добавить карточку товара</h1>
      <div className={styles.addItem__content}>
        <div className={styles.addItem__content__item}>
          <h3>Название товара</h3>
          <input className={styles.addItem__textInput} placeholder='введите текст' type="text"/>
        </div>
        <div className={styles.flex}>
        {colors.map((item, i) =>{
          return <div className={`${styles.addItem__content__item} ${styles.addItem__color}`} key={item}>
          <div className={styles.addItem__content__subitem}>
            <h3>Фото (с прозрачным фоном)</h3>
            <div className={styles.flex2}>
            {photos.map((photo, num) =>{
              return(
                <div className={styles.addItem__addImg} key={photo}>
              <div className={styles.addItem__input_file__common}>
                  <input className={styles.addItem__input_file} type="file"/>
                    <div className={styles.addItem__input_file__plus}>
                      <div>
                        <Image src="/assets/icons/plusImg.svg"
                          alt="Add image"
                          layout="fill"/>
                      </div>
                    </div>
              </div>
              <div className={styles.flex3}>
            <button className={styles.addItem__changeBtn}>
                  <Image src='/assets/icons/change.svg' alt='Change image' layout='fill'/>
            </button>
            <button className={styles.addItem__changeBtn} onClick={()=>{setPhotos([...photos.slice(0, num), ...photos.slice(num + 1)])}}>
                    <Image
                      src="/assets/icons/delteBtn.svg"
                      alt="удалить"
                      layout="fill"
                    ></Image>
            </button>
            </div>
            </div>
              )
            })}
            </div>
          </div>
          <button className={styles.addItem__addImg__btn} onClick={()=>{setPhotos([...photos, uuidv4()])}}>Добавить фото</button>
          <div className={styles.addItem__content__subitem}>
            <h3>Hex код цвета для этого фото</h3>
            <input className={styles.addItem__textInput} placeholder='введите заголовок' type="text"/>
          </div>
          <div className={styles.addItem__content__subitem}>
            <h3>Расшифровка (название) цвета</h3>
            <input className={styles.addItem__textInput} placeholder='введите текст' type="text"/>
          </div>
          <button className={styles.deleteColor} onClick={()=>{setColors([...colors.slice(0, i), ...colors.slice(i + 1)])}}>Удалить цвет</button>
          </div>
        })}
        </div>
        <button className={styles.addColor} onClick={()=>{setColors([...colors, uuidv4()])}}>Добавить цвет</button>
        <div className={styles.addItem__content__item}>
          <h3>Характеристики</h3>
          <div className={styles.addItem__charList}>
          {charsInputs?.map((item, i) =>{
            return <div key={i} className={styles.addItem__chars}>
              <input className={styles.addItem__charInput} placeholder={item.key} type="text"/>
              <input className={styles.addItem__charInput} placeholder={item.value} type="text"/>
              <button className={styles.addItem__charDelete} onClick={()=> setCharsInputs([...charsInputs.slice(0, i), ...charsInputs.slice(i + 1)])}>
                <Image src='/assets/icons/delteBtn.svg' alt='удалить' layout='fill'/>
              </button>
            </div>
          })}
          </div>
          <button onClick={()=> setCharsInputs([...charsInputs, keyValueObj])} className={styles.addItem__charAdd}>Добавить характеристику</button>
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