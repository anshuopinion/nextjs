import React from 'react';
import styles from './Navigation.module.scss';
import { UpperNav, LowerNav } from '/';
const Navigation = ({ navigations }) => {
  return (
    <nav className={styles.Navigation}>
      <UpperNav />
      <LowerNav navigations={navigations} />
    </nav>
  );
};

export default Navigation;
