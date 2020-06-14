import styles from './PageChanger.module.scss';
import Link from 'next/link';
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
          <Link
            href={page === 2 ? `${mainPagePath}` : `/[currentPage]`}
            as={page === 2 ? `${mainPagePath}` : `/${page - 1}`}
          >
            <button className={styles.Prev} disabled={page <= 1}>
              <a>
                <i>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </i>
                prev
              </a>
            </button>
          </Link>

          <div className={styles.pagenoContainer}>
            <Link href={`${mainPagePath}`}>
              <li className={styles.pageNumber}>
                <a className={router.asPath === `${mainPagePath}` ? styles.active : ''}>1</a>
              </li>
            </Link>
            {noOfPages.map((page, i) => (
              <Link href="/[currentPage]" as={`/${page}`}>
                <li className={styles.pageNumber} key={i}>
                  <a className={router.asPath === `/${page}` ? styles.active : ''}>{page}</a>
                </li>
              </Link>
            ))}
          </div>
          <Link href="/[currentPage]" as={`/${page + 1}`}>
            <button
              className={styles.Next}
              disabled={page >= lastPage}
              // onClick={() => router.push(`/${page + 1}`)}
            >
              <a>
                next
                <i>
                  <FontAwesomeIcon icon={faArrowRight} />
                </i>
              </a>
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default PageChanger;
