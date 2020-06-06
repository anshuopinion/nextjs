import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Search = () => {
  return (
    <div className={styles.Search}>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
      <button className={styles.SearchBtn}>
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </button>
    </div>
  );
};

export default Search;
