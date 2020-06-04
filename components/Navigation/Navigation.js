import React from 'react';
import styles from './Navigation.module.scss';
import UpperNav from '../Navigation/UpperNav/UpperNav';
import LowerNav from '../Navigation/LowerNav/LowerNav';
const Navigation = ({ navigations }) => {
  return (
    <nav className={styles.Navigation}>
      <UpperNav />
      <LowerNav navigations={navigations} />
    </nav>
  );
};

export default Navigation;
