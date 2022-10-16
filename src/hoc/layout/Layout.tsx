import { FC, Fragment } from 'react';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { ILayout } from './interfaces/Layout.interface';

const Layout: FC<ILayout> = ({ children }: ILayout) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
