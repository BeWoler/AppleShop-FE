import { FC, useState } from 'react';
import Nav from '../common/nav/Nav';
import styles from './styles/header.module.sass';
import Image from 'next/image';
import Link from 'next/link';
import MobileNav from '../common/mobileNav/MobileNav';

const Header: FC = (): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        {isOpen ? (
          <div
            style={{ opacity: '0' }}
            className={styles.header__icom_menu}
            onClick={() => setOpen(!isOpen)}
          >
            <Image src="/assets/icons/menu.svg" layout="fill" alt="меню" />
          </div>
        ) : (
          <div
            className={styles.header__icom_menu}
            onClick={() => setOpen(!isOpen)}
          >
            <Image src="/assets/icons/menu.svg" layout="fill" alt="меню" />
          </div>
        )}
        <div className={styles.header__logo}>
          <Image
            src="/assets/icons/apple-icon.svg"
            layout="fill"
            alt="apple icon"
          />
        </div>
        <Nav />
        <div className={styles.header__container_svg}>
          <div className={styles.header__inst}>
            <Link href="/yandex.ru">
              <a className={styles.header__inst__link}>
                <Image
                  src="/assets/icons/inst-icon.svg"
                  layout="fill"
                  alt="instagram"
                />
              </a>
            </Link>
          </div>
          <div className={styles.header__cart}>
            <Image
              src="/assets/icons/cart-icon.svg"
              layout="fill"
              alt="корзина"
            />
          </div>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
    </header>
  );
};

export default Header;
