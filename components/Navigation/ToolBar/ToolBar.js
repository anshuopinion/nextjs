import styles from './ToolBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

const ToolBar = ({ open }, props) => {
  return (
    <div className={styles.ToolBar}>
      <div>
        <i>
          <FontAwesomeIcon icon={faHome} size="2x" className={styles.Home} />
        </i>
      </div>
      <i onClick={open}>
        <FontAwesomeIcon icon={faBars} size="2x" className={styles.Bars} />
      </i>
    </div>
  );
};
export default ToolBar;
