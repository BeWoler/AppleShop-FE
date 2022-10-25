import { FC } from 'react';
import Image from 'next/image';
import styles from './styles/menu.module.sass';
import Link from 'next/link';

const Menu: FC = (): JSX.Element => {

  const navData = [
    { id: 1, title: 'Шапка', href: '' },
    { id: 2, title: 'О продукции', href: '' },
    { id: 3, title: 'Каталог', href: '' },
    { id: 4, title: 'Акции', href: '' },
    { id: 5, title: 'Доставка & Оплата', href: '' },
  ];

  return <div className={styles.menu}>
    <div className={styles.menu__container}>
      <div className={styles.menu__sign}>
        <div className={styles.menu__user_wrap}>
          <Image src='assets/icons/user.svg' alt='user icon' layout='fill'></Image>
        </div>
        <button className={styles.menu__sign_in__btn}>Войти</button>
      </div>
      <nav className={styles.nav}>
      <ul className={styles.nav__list}>
      {navData?.map((item) => {
          return (
            <li  key={item.id} className={styles.nav__item}>
              <Link href={item.href}>
                <a className={styles.nav__link} title={item.title}>{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
  </div>;
};

export default Menu;