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
          <div>
            <Link href="/about">
              <a className={styles.NavElement}>About</a>
            </Link>
          </div>
          <div>
            <Link href="/contact">
              <a className={styles.NavElement}>Contact</a>
            </Link>
          </div>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
