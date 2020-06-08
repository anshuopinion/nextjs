import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import UpperNav from '../Navigation/UpperNav/UpperNav';
import LowerNav from '../Navigation/LowerNav/LowerNav';
import SideDrawer from './SideDrawer/SideDrawer';

import ToolBar from './ToolBar/ToolBar';

const Navigation = ({ navigations }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);
  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };
  const sideDrawerShowHandler = () => {
    setShowSideDrawer(true);
  };
  return (
    <nav className={styles.Navigation}>
      <div className={styles.ToolBar}>
        <UpperNav />
        <LowerNav navigations={navigations} />
      </div>
      <ToolBar open={sideDrawerShowHandler} />
      <SideDrawer navigations={navigations} show={showSideDrawer} Close={sideDrawerClosedHandler} />
    </nav>
  );
};

export default Navigation;
