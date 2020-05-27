import React from "react";
import styles from "./LowerNav.module.scss";
import Link from 'next/link'
import {useRouter} from 'next/router'
const LowerNav = ({navigations}) => {

  const router = useRouter();

  return (
    <div className={styles.LowerNav}>
      <ul>
        {navigations.map((navigation) => (
          
          <Link href={navigation.slug} key={navigation.tittle}>
          <a className={router.pathname === navigation.slug ? styles.active:''}>
            {navigation.tittle}
          </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LowerNav;
