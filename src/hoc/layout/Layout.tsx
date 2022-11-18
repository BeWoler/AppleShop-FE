import { FC, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ILayout } from './interfaces/Layout.interface';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Menu from '@/admin/menu/Menu';
import styles from './styles/layout.module.sass';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  const router = useRouter();

  useEffect(() => {
    router.pathname === '/admin' && router.push('/admin/header');
  }, [router]);

  if (router.pathname.includes('/admin')) {
    return (
      <div className={styles.containerAdmin}>
        <div style={{marginRight: '480px'}}>
          <Menu />
        </div>
        {children}
      </div>
    );
  } else {
    return (
      <Fragment>
        <Header />
        {children}
        <Footer />
      </Fragment>
    );
  }
};

export default Layout;
