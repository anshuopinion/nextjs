import React from "react";
import styles from "./LowerNav.module.scss";
const LowerNav = () => {
  const NavElement = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "dod",
      link: "/dod",
    },
    {
      name: "Offers",
      link: "/dod",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Tv Apps",
      link: "/tvapps",
    },
    {
      name: "Tv Products",
      link: "/tvproducts",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  return (
    <div className={styles.LowerNav}>
      <ul>
        {NavElement.map((el) => (
          <a href={el.link} key={el.name}>
            <li className={styles.navElement}>{el.name.toUpperCase()}</li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default LowerNav;
