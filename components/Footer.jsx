import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

      <div className={styles.card}>
        <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/logoband.png"} alt="logo" width="177" height="132" objectFit="contain" />
          <p className={styles.logoDesc}>We offer best mobile phone, <br/> accessories and electronic gadgets <br/>at best and discounted prices.
</p>
        </div>


        <div className={styles.card}>
          <h1 className={styles.title}>Address</h1>
          <p className={styles.desc}>FOT Junction, Opp. PRODECO Camp,<br/>
              Onne-Eleme, Rivers State</p>
          <p className={styles.desc}>Oiler Plazz, Akpajo Junction,<br/>
              Eleme, Rivers State</p>
          <p className={styles.desc}>Plot 181 Peter Odili Road @ Bejowil Plaza,<br/>
              Port Harcourt</p>
        </div>


        <div className={styles.card}>
          <h1 className={styles.title}>Company</h1>
          <ul className={styles.list}>
           <li className={styles.listItem}> 
           <Link href="/" passHref>About us</Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="/" passHref>Products</Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref>
           <a target="_blank" re="noopener noreferrer">Contact us</a></Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="/" passHref>Swap Phones</Link>
           </li>
          </ul>
        </div>


        <div className={styles.card}>
          <h1 className={styles.title}>Connect</h1>
          <ul className={styles.list}>
           <li className={styles.listItem}> 
           <Link href="/" passHref>Instagram</Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="/" passHref>Facebook</Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="/" passHref>Twitter</Link>
           </li>
           <li className={styles.listItem}> 
           <Link href="/" passHref>YouTube</Link>
           </li>
          </ul>
        </div>
      </div>
    

    {/*COPYRIGHT */}

    <div className={styles.copyRight}>
      <hr/>
      <p className={styles.copyDesc}>Copyright &copy; Tess Smart Hub 2022. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default Footer
