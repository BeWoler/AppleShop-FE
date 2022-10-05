import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { FC, Fragment } from 'react';
import { ILayout } from './Layout.interface';

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
