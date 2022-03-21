import Link from "next/link"
import styles from '../styles/Footer.module.css'


export default function Footer() {
    return (
        <footer className={styles.footer}>
  
        <Link href='/about'>
            About us?
        </Link>    
        <p>Copyright &copy; Africheza 2021</p>
        </footer>
    )
}
