import styles from './Backdrop.module.scss';
const Backdrop = ({ show, clicked, children }) => {
  return show ? <div className={styles.Backdrop} onClick={clicked}></div> : null;
};
export default Backdrop;
