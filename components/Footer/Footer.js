import styles from './Footer.module.scss';
import Logo from '../../public/images/Wlogo.png';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.border}></div>
      <div className={styles.Nav}>
        <div>
          <img src={Logo} alt="logo" className={styles.Logo} />
        </div>
        <span className={styles.NavElements}>
          <div className={styles.NavElement}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
          <div className={styles.NavElement}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
