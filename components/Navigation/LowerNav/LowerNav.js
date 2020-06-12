import React, { useContext } from 'react';
import styles from './LowerNav.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
const LowerNav = ({ clicked }) => {
  const navigations = [
    { title: 'Home', slug: '' },
    { title: 'Tv Apps', slug: 'tvapps' },
    { title: 'DOD', slug: 'dod' },
    { title: 'About', slug: 'about' },
    { title: 'Contact', slug: 'contact' },
  ];

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
              {navigation.title}
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LowerNav;
