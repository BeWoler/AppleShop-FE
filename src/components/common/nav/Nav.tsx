import Link from 'next/link';
import { FC } from 'react';
import styles from './styles/nav.module.sass';
import Image from 'next/image';

const navData = [
  { id: 1, title: 'О продукции', href: '#benefits'},
  { id: 2, title: 'Каталог', href: '#catalog' },
  { id: 3, title: 'Акции', href: '#discounts' },
  { id: 4, title: 'Доставка & Оплата', href: '#delivery' },
];

const Nav: FC = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__menu}>
        {navData?.map((item) => {
          return (
            <li key={item.id} className={styles.nav__menu__item}>
              <Link href={item.href}>
                <a className={styles.nav__menu__link} title={item.title}>
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
