import styles from '../styles/Brands.module.css'
import Image from 'next/image'

function Brands() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

      <p className={styles.desc}>We deal on quality products from major brands such as:</p>
      <div className={styles.brands}>
          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/openz.png"} alt='OpenZ' width="138px" height="22px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/oracle.png"} alt='ORACLE' width="138px" height="18px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/morp.png"} alt='MORPHEUS' width="138px" height="30px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/samsung.png"} alt='Samsung' width="138px" height="22px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/monday.png"} alt='MONDAY.COM' width="138px" height="26px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/segment.png"} alt='SEGMENT' width="138px" height="29px" objectFit="responsive"/>
          </div>

          <div className={styles.brandLogo}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/brands/protonet.png"} alt='PROTONET' width="138px" height="33px" objectFit="responsive"/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Brands
