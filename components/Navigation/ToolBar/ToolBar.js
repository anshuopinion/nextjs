import styles from './ToolBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const ToolBar = ({ open }) => {
  return (
    <div className={styles.ToolBar}>
      <i onClick={open}>
        <FontAwesomeIcon icon={faBars} size="2x" className={styles.Bars} />
      </i>
    </div>
  );
};
export default ToolBar;
