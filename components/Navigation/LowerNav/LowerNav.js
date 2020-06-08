import React from 'react';
import styles from './LowerNav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
const LowerNav = ({ navigations, clicked }) => {
  const router = useRouter();

  return (
    <div className={styles.LowerNav}>
      <ul>
        {navigations.map((navigation, i) => (
          <Link href={`/${navigation.slug}`} key={i}>
            <a
              onClick={clicked}
              className={router.pathname === navigation.slug ? styles.active : ''}
            >
              {navigation.tittle}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LowerNav;
