import Link from "next/link"
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {useState} from 'react'
function Navbar() {
    const [open, setOpen] = useState(false)
  return (
   <div className={styles.container}>
       <div className={styles.wrapper}>
       <Link href="/" passHref>
           <Image src={process.env.NEXT_PUBLIC_URL + "/imgs/tesshublogo.png"} alt="TessHub" width="79px" height="59px" ></Image>
           </Link>
    <ul className={styles.list}>
        <li className={styles.listItem}>
            <Link href="/" passHref>About Us</Link>
        </li>
        <li className={styles.listItem}>
            <Link href="/" passHref>Products</Link>
        </li>
        <li className={styles.listItem}>
            <Link href="/" passHref>Blog</Link>
        </li>
        <li className={styles.listItem}>
            <Link href="/" passHref>Testimonials</Link>
        </li>
        <li className={styles.listItem}>
            <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref className={styles.cbutton}>
            <a target="_blank" re="noopener noreferrer">Contact Us
            </a>
            </Link>
        </li>
    </ul>
    <div className={styles.hamburger} onClick={()=>setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
    </div>

    <ul onClick={()=>setOpen(false)} className={styles.menu} style={{right: open ? "0px" : "-50vw"}}>
        <li className={styles.menuItem}>
            <Link href="/" passHref>About Us</Link>
        </li>
        <li className={styles.menuItem}>
            <Link href="/" passHref>Products</Link>
        </li>
        <li className={styles.menuItem}>
            <Link href="/" passHref>Blog</Link>
        </li>
        <li className={styles.menuItem}>
            <Link href="/" passHref>Testimonials</Link>
        </li>
        <li className={styles.menuItem}>
            <Link href="https://wa.me/2349058830412?text=Welcome%20to%20Tess%20Smart%20Hub.%20Your%20Number%201%20Mobile%20Phones,%20Accessories%20and%20Gadgets%20Dealers!" passHref className={styles.cbutton}>Contact Us</Link>
        </li>
    </ul>

    </div>

   </div>
  );
}

export default Navbar;
