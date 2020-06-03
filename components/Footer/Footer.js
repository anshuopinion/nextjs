import styles from './Footer.module.scss';
import Logo from '../../utils/Logo/Logo';
import classnames from 'classnames';
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={classnames(styles.Nav, 'container')}>
        <div>
          <Logo />
        </div>

        <span className={styles.NavElement}>
          <div>
            <a>About</a>
          </div>
          <div>
            <a>Contact</a>
          </div>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
