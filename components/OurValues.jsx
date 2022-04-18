import Image from "next/image"
import styles from '../styles/OurValues.module.css'

function OurValues() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <div className={styles.cardBox}>
                    <div className={styles.cardBoxes}>
                    <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/truck.png"} alt="Shipping" width="72" height="72" objectFit="responsive" />
                    </div>
                    <div className={styles.cardBox1}>
                    <h1 className={styles.cardTitle}>Nationwide shipping</h1>
                    <p className={styles.cardDesc}>We ship your items anywhere in Nigeria</p>
                    </div>
                </div>
            </div>



            <div className={styles.card}>
                <div className={styles.cardBox}>
                    <div className={styles.cardBoxes}>
                    <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/smiles.png"} alt="Smiles" width="43" height="43" objectFit="responsive" />
                    </div>
                    <div className={styles.cardBox1}>
                    <h1 className={styles.cardTitle}>100% Satisfaction</h1>
                    <p className={styles.cardDesc}>Your happiness is our motivation</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardBox}>
                    <div className={styles.cardBoxes}>
                    <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/mbag.png"} alt="Money back" width="60" height="60" objectFit="responsive" />
                    </div>
                    <div className={styles.cardBox1}>
                    <h1 className={styles.cardTitle}>Money Back</h1>
                    <p className={styles.cardDesc}>We guarantee money back within 7 days</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default OurValues