import Image from "next/image"
import styles from '../styles/Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapperContainer}>
            
        <div className={styles.wrapper}>
        <div className={styles.card}>
        <h1 className={styles.title}>What our customers are saying</h1>
        <p className={styles.desc}>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
        </div>

        <div className={styles.card}>
        <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/fill.png"} alt="fill" width="189" height="118" objectFit="cover"/>
        </div>
        </div>

        <div className={styles.cardTest}>
            <div className={styles.cardBox}>
                <div className={styles.cardContent}>
                    <div className={styles.cards}>
                    <p className={styles.cardP}>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.</p>
                    <p className={styles.cardQuote}>- Mike Taylor, <br/>Web Designer</p>
                    </div>
                    <div className={styles.cards}>
                <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/lady.png"} alt="lady" width="205" height="299" objectFit="responsive" />
                    </div>
                </div>
            </div>

            <div className={styles.cardBox}>
                <div className={styles.cardContent}>
                    <div className={styles.cards}>
                    <p className={styles.cardP}>Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows . Blessing welcomed ladyship.</p>
                    <p className={styles.cardQuote}>- Mike Taylor, <br/>Web Designer</p>
                    </div>
                    <div className={styles.cards}>
                     
                    <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/guy.png"} alt="guy" width="205" height="299" objectFit="responsive" />
                    
                    </div>
                </div>
            </div>


        </div>
        </div>
    </div>
  )
}

export default Testimonials
