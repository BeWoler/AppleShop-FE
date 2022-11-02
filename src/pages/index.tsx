import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '@/components/common/banner/Banner';
import Benefits from '@/components/common/benefits/Benefits';
import Delivery from '@/components/common/delivery/Delivery';
import Discounts from '@/components/common/discounts/Discounts';
import Catalog from '@/components/common/catalog/Catalog';
import Basket from '@/components/common/basket/Basket';
import Card from '@/components/common/card/Card';
import MobileNav from '@/components/common/mobileNav/MobileNav';
import BenefitsAdmin from 'admin/benefits/Benefits';
import HeaderAdmin from 'admin/header/Header';
import ChangeBenefits from 'admin/changeBenefits/ChangeBenefits';
import CatalogAdmin from 'admin/catalog/Catalog';
import AddCatalogItem from 'admin/addCatalogItem/AddCatalogItem';
import DiscountsAdmin from 'admin/discounts/Discounts';
import ChangeDiscounts from 'admin/changeDiscounts/ChangeDiscounts';
import DeliveryAdmin from 'admin/delivery/Delivery';
import ChangeDelivery from 'admin/changeDelivery/changeDelivery';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Apple Shop</title>
        <meta name="description" content="Apple Shop" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main>
        <Banner/>
        <ChangeDiscounts/>
        <BenefitsAdmin/>
        <ChangeDelivery/>
        <AddCatalogItem/>
        <DiscountsAdmin/>
        <DeliveryAdmin/>
        <HeaderAdmin/>
        <ChangeBenefits/>
        <CatalogAdmin/>
        <Benefits/>
        <Catalog/>
        <Discounts/>
        <Delivery/>
        <Basket/>
        <Card/> 
      </main>
    </>
  );
};

export default Home;
