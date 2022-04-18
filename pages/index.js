import Head from 'next/head'
import Image from 'next/image'
import BestMobile from '../components/BestMobile';
import Brands from '../components/Brands';
import Featured from '../components/Featured';
import Intro from '../components/Intro';
import LatestProducts from '../components/LatestProducts';
import OurValues from '../components/OurValues';
import SellingProducts from '../components/SellingProducts';
import Testimonials from '../components/Testimonials';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Official Website of Tess Hub</title>
        <meta name="description" content="Tess Smart Hub is an online and offline mobile phone, accessory and gadget store in Port Harcourt, Nigeria." />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <Intro/>
      <Featured />
      <Brands/>
      <SellingProducts />
      <LatestProducts />
      <OurValues />
      <BestMobile />
      <Testimonials />
  </div>
  );
}