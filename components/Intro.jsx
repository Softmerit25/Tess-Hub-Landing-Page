import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Intro.module.css'


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



function Intro() {
  SwiperCore.use([Autoplay]);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
        <div className={styles.card}>
            <h1 className={styles.title}>Best deals on Apple iPhone 13 Pro Max</h1>
            <h4 className={styles.subTitle}>from N500,000</h4>
            <p className={styles.desc}>Yet bed any for travelling assistance indulgence <br/>unpleasing. Not thoughts all exercise blessing. </p>
            <div className={styles.button}>
                <div className={styles.btnOrder}>
                <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
                <a target="_blank" re="noopener noreferrer">Place Order</a>
                </Link>
                </div>
                <div className={styles.btnTrailer}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/play.png"} alt="playTrailer" width="60px" height="60px"></Image>
                <Link href="/" passHref> Watch Phone Trailer</Link>
                </div>
            </div>
        </div>
        <div className={styles.card}>
          <Swiper className={styles.introSl}
          spaceBetween={10}
          slidesPerView={1}
          effect={'coverflow'}
          autoplay={{delay:3000}}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}
          >
            <SwiperSlide>
           <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/ipgb.png"} alt="iPhone 13 Pro"  width={600} height={416} objectFit="cover"></Image> 
            </SwiperSlide>

            <SwiperSlide>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/ipgb.png"} alt="iPhone 13 Pro"  width={600} height={416} objectFit="cover"></Image>
            </SwiperSlide>
            

          </Swiper>
        </div>
        </div>
    </div>
  )
}

export default Intro