import Logo from '../../../public/images/Blogo.png';
import styles from './SideDrawer.module.scss';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import UpperNav from '../UpperNav/UpperNav';
import LowerNav from '../LowerNav/LowerNav';
import classnames from 'classnames';
const SideDrawer = ({ navigations, show, Close, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={Close} />
      <div className={classnames(show ? styles.Open : styles.Close, styles.SideDrawer)}>
        <UpperNav />
        <LowerNav navigations={navigations} />
      </div>
    </>
  );
};

export default SideDrawer;
