import styles from './styles/404.module.sass'
import Image from 'next/image';

const Page404 = () => {
  return (
    <div className={styles.erroePage}>
      <div className={styles.erroePage__container}>
        <h1 className={styles.erroePage__title}>404</h1>
        <h2 className={styles.erroePage__subtitle}>Ой, кажется, что-то пошло не так!<br/>Такой страницы не существует</h2>
        {/* <button className={styles.erroePage__btn}>Вернуться на главную</button> */}
        <div className={styles.erroePage__img}>
          <Image src='/assets/imgs/sadDog1.png' layout='fill' alt='sad dog'/>
        </div>
      </div>
    </div>
  );
};

export default Page404;
