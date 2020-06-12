import styles from './PageChanger.module.scss';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
const PageChanger = ({ page, lastPage }) => {
  const router = useRouter();
  const noOfPages = [];
  const mainPagePath = '/';
  for (let i = 2; i <= lastPage; i++) {
    noOfPages.push(i);
  }

  return (
    <div className="container">
      <div className={styles.PageChanger}>
        <ul>
          <button
            className={styles.Prev}
            disabled={page <= 1}
            onClick={() => router.push(`/?page=${page - 1}`)}
          >
            <a>
              <i>
                <FontAwesomeIcon icon={faArrowLeft} />
              </i>
              prev
            </a>
          </button>

          <div className={styles.pagenoContainer}>
            <li className={styles.pageNumber}>
              <a className={router.asPath === `${mainPagePath}` ? styles.active : ''}>1</a>
            </li>
            {noOfPages.map((page, i) => (
              <li className={styles.pageNumber} key={i}>
                <a
                  onClick={() => router.push(`/?page=${page}`)}
                  className={router.asPath === `/?page=${page}` ? styles.active : ''}
                >
                  {page}
                </a>
              </li>
            ))}
          </div>
          <button
            className={styles.Next}
            disabled={page >= lastPage}
            onClick={() => router.push(`/?page=${page + 1}`)}
          >
            <a>
              next
              <i>
                <FontAwesomeIcon icon={faArrowRight} />
              </i>
            </a>
          </button>
        </ul>
      </div>
    </div>
  );
};
export default PageChanger;
