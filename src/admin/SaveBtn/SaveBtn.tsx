import { FC } from 'react';
import styles from './styles/menu.module.sass';


const SaveBtn: FC = (): JSX.Element => {

  return <div className={styles.save}>
    <button className={styles.save__btn}>Сохранить</button>
  </div>;
};

export default SaveBtn;