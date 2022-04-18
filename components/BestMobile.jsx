import Image from 'next/image'
import styles from '../styles/BestMobile.module.css'


function BestMobile() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <h1 className={styles.title}>Best mobile phone Store in Port Harcourt</h1>
                <p className={styles.desc}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence <br /> own.</p>

                <div className={styles.cardBox}>
                <p className={styles.cardDesc}>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows .</p>
                <p className={styles.cardQuote}>- Mike Taylor, Web Designer</p>
                <div className={styles.quoteIcon}>
                 <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/quote.png"} alt='quote image' width="44px" height="44px"/>
                </div>
                 </div>
            </div>

            
            <div className={styles.card}>
            <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/tessimg.png"} alt="Tess Hub" width="792" height="711"  objectFit="contain" />
            </div>
        </div>
    </div>
  )
}

export default BestMobile