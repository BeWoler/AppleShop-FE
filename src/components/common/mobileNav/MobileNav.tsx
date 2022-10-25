import Link from 'next/link';
import { FC } from 'react';
import styles from './styles/mobileNav.module.sass';
import Image from 'next/image';
import { IMobileNavProps } from './interfaces/mobileNav.interface';

const navData = [
  { id: 1, title: 'О продукции', href: '' },
  { id: 2, title: 'Каталог', href: '' },
  { id: 3, title: 'Акции', href: '' },
  { id: 4, title: 'Доставка & Оплата', href: '' },
];

const MobileNav: FC<IMobileNavProps> = ({
  isOpen,
  setOpen,
}: IMobileNavProps): JSX.Element => {
  return (
    <nav
      className={
        isOpen
          ? `${styles.nav} ${styles.active}`
          : `${styles.nav} ${styles.inactive}`
      }
    >
      <h2 className={styles.nav__title}>AppleShop</h2>
      <div className={styles.cross}>
        <div
          className={styles.cross__relative}
          onClick={() => setOpen(!isOpen)}
        >
          <Image src="/assets/icons/cross.svg" layout="fill" alt="закрыть" />
        </div>
      </div>
      <ul className={styles.nav__menu}>
        {navData?.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.nav__menu__item}
              onClick={() => setOpen(!isOpen)}
            >
              <Link href={item.href}>
                <a className={styles.nav__menu__link} title={item.title}>
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.nav__inst}>
        <Link href="/yandex.ru">
          <a>
            <Image
              src="/assets/icons/inst-icon.svg"
              layout="fill"
              alt="instagram"
            />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
