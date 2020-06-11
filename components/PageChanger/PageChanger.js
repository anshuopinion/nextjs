import React from 'react';
import styles from './PageChanger.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const PageChanger = ({ page, lastPage }) => {
  const noOfPages = [];
  for (let i = 1; i <= lastPage; i++) {
    noOfPages.push(i);
  }

  const router = useRouter();

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
          {}
          <div className={styles.pagenoContainer}>
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
