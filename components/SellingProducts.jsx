import Image from "next/image"
import styles from '../styles/SellingProducts.module.css'
import Link from "next/link"


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


function SellingProducts() {
    SwiperCore.use([Autoplay]);
  return (
    <div className={styles.container}>
        <div className={styles.wrapperContainer}>
        <h1 className={styles.title}>Top Selling Products</h1>
        <div className={styles.wrapper}>
        <Swiper className={styles.topSellingSlide}
          spaceBetween={30}
          slidesPerView={'auto'}
          effect={'coverflow'}
          autoplay={{delay:3000}}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true }}  
          >
             
            <SwiperSlide>
            <div className={styles.card} >
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/iphones.png"} alt="iPhone 13 Pro Max" width="284px" height="203px"  objectFit="cover" />
                <h1 className={styles.cardTitle}>iPhone 13 Pro Max (128gb)</h1>
                <p className={styles.cardDesc}>Buy latest pocket friendly laptops with specification</p>
                <div className={styles.cardOptions}>
                    <span className={styles.cardPrice}>N299.95</span>
                    <div className={styles.cardBtn}>
                    <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
                    <a target="_blank" re="noopener noreferrer">Place Order</a></Link>
                    </div>
                </div>
            </div>
              </SwiperSlide>
              
              
            <SwiperSlide >
            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/oppos.png"} alt="Oppo A92" width="256px" height="192px" objectFit="cover" />
                <h1 className={styles.cardTitle}>Oppo A92</h1>
                <p className={styles.cardDesc}>Buy latest pocket friendly laptops with specification</p>
                <div className={styles.cardOptions}>
                    <span className={styles.cardPrice}>N299.95</span>
                    <div className={styles.cardBtn}>
                    <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
                    <a target="_blank" re="noopener noreferrer">Place Order</a></Link>
                    </div>
                </div>
            </div>
            </SwiperSlide>
    

            <SwiperSlide >
            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/ps5.png"} alt="Ps 5 Game" width="284px" height="203px" objectFit="cover" />
                <h1 className={styles.cardTitle}>iPhone 13 Pro Max (128gb)</h1>
                <p className={styles.cardDesc}>Buy latest pocket friendly laptops with specification</p>
                <div className={styles.cardOptions}>
                    <span className={styles.cardPrice}>N299.95</span>
                    <div className={styles.cardBtn}>
                    <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
                    <a target="_blank" re="noopener noreferrer">Place Order</a></Link>
                    </div>
                </div>
            </div>
            </SwiperSlide>


            <SwiperSlide >
            <div className={styles.card}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/ps5.png"} alt="Game Console PS5" width="284px" height="203px"  objectFit="cover" />
                <h1 className={styles.cardTitle}>iPhone 13 Pro Max (128gb)</h1>
                <p className={styles.cardDesc}>Buy latest pocket friendly laptops with specification</p>
                <div className={styles.cardOptions}>
                    <span className={styles.cardPrice}>N299.95</span>
                    <div className={styles.cardBtn}>
                    <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
                    <a target="_blank" re="noopener noreferrer">Place Order</a></Link>
                    </div>
                </div>
            </div>
            </SwiperSlide>
        </Swiper>
        </div>
        </div>
    </div>
  )
}

export default SellingProducts