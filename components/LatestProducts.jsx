import Image from "next/image"
import styles from '../styles/LatestProducts.module.css'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay,} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function LatestProducts() {
    SwiperCore.use([Autoplay]);
  return (
    <div className={styles.container}>
    <div className={styles.wrapperContainer}>
      <h1 className={styles.title}>Latest gadgets &amp; accessories</h1>
      <div className={styles.wrapper}>
      <Swiper className={styles.sellingSlide}
          spaceBetween={50}
          slidesPerView={6}
          effect={'coverflow'}
          autoplay={{delay:3000}}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          >
        <SwiperSlide >
          <div className={styles.card}>
              <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/clipper.png"} alt="Smart Clippers" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>


        <SwiperSlide >
          <div className={styles.card}>
          <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/speaker.png"} alt="SPEAKERS" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>


        <SwiperSlide >
          <div className={styles.card}>
          <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/chair.png"} alt="CHAIRS" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>

        <SwiperSlide  >
          <div className={styles.card}>
          <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/watch.png"} alt="Smart Watch" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className={styles.card}>
          <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/handbags.png"} alt="Hangbags" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className={styles.card}>
          <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/chargers.png"} alt="Smart Chargers" width="100%" height="100%" objectFit="responsive" />
              <h1 className={styles.cardTitle}> Smart Clipper</h1>
              <p className={styles.cardOffers}>Extra 5% Off</p>
              <p className={styles.cardDesc}>Hurry!</p>
          </div>
        </SwiperSlide>

        </Swiper>
      </div>



        {/* LATEST PHONES */}
        <div className={styles.latestContainer}>
      <h1 className={styles.title}>Latest Phones</h1>
        <div className={styles.wrapper}>
        <Swiper className={styles.sellingSlide}
          spaceBetween={50}
          slidesPerView={'auto'}
          effect={'coverflow'}
          autoplay={{delay:3000}}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          >
              <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/mi.png"} alt="MI A2" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}> MI A2 (64 GB)</h1>
                <p className={styles.cardOffers}>4GB RAM</p>
            </div>
              </SwiperSlide>
            

            <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/redmi.png"} alt="Redmi Note 7S" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}> Redmi Note 7S</h1>
                <p className={styles.cardOffers}>3GB RAM</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/moto.png"} alt="Motorola One" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}> Motorola One</h1>
                <p className={styles.cardOffers}>4GB RAM</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/redmi7.png"} alt="Redmi Note 7" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}> Redmi Note 7</h1>
                <p className={styles.cardOffers}>4GB RAM</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/oppo.png"} alt="OPPO F11 Pro" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}>OPPO F11 Pro</h1>
                <p className={styles.cardOffers}>6GB RAM</p>
            </div>
            </SwiperSlide>

            <SwiperSlide>

            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/proimgs/realme.png"} alt="Realme C2" width="50" height="111" objectFit="responsive" />
                <h1 className={styles.cardTitle}>Realme C2</h1>
                <p className={styles.cardOffers}>2GB RAM</p>
            </div>
            </SwiperSlide>

            </Swiper>
        </div>
        </div>
        </div>
       
    </div>
    
  )
}

export default LatestProducts;
