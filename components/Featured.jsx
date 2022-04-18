import styles from '../styles/Featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
        <div className={styles.card} >
            <h1 className={styles.title}>What we sell</h1>
            <p className={styles.desc}>Tess Smart Hub is an online and offline mobile phone, accessory and gadget store<br/> in Port Harcourt, Nigeria. We offer best mobile phone, accessories and electronic <br/>gadgets at best and discounted prices.</p>
        </div>    
        <div className={styles.card}>
        <div className={styles.quoteContainer}>
        <p className={styles.quoteDesc}>Tess Hub guaranetess 100% delivery. I ordered a brand new iPhone 13 from Tess and it got delivered on time and in good condition</p>
        <p className={styles.quoteName}>- Tonye Freeman, Bayelsa</p>
        </div>
        <div className={styles.quoteIcon}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/quote.png"} alt='quote image' width="44px" height="44px"/>
        </div>
        </div>
        </div>


        {/*FEATURE PRODUCT IMAGE */}
        <div className={styles.featuredProducts}>
            <div className={styles.featuredWrapper}>
                <div className={styles.box}>
                    <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/nokia.png"} alt="Nokia-7.7" width="52px" height="111px"  objectFit="cover"/>
                    <h1 className={styles.boxTitle}>Mobile Phones</h1>
                    <p className={styles.boxDesc}>We are the best mobile phone store in the country and we deliver the best range of mobile devices from the best brands</p>
                </div>

                <div className={styles.box}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/electro.png"} alt="Electronic and Accessories" width="143px" height="67px" objectFit="cover"/>
                    <h1 className={styles.boxTitle}>Gadgets</h1>
                    <p className={styles.boxDesc}>Enjoy our collection of gadgets such as wearables, smartwatches, airpods, playstation, speakers and so on.</p>
                </div>

                <div className={styles.box}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/accessories.png"} alt="Accessories" width="114px" height="110px" objectFit="cover"/>
                    <h1 className={styles.boxTitle}>Accessories</h1>
                    <p className={styles.boxDesc}>We sell mobile accessories such as headphones, headsets, power banks, memory cards for all devices</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
