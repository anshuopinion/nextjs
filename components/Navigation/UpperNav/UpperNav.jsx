import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./UpperNav.module.scss";
// import Logo from "../../../utils/Logo/Logo";
import Logo from '../../../utils/Logo/Logo'
import Search from "../../../utils/Search/Search";
import {
  faTelegram,
  faYoutube,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
const UpperNav = () => {
  const socialElement = [
    {
      name: "Telegram",
      link: "https://telegram.me/anshuopinion",
      icon: <FontAwesomeIcon icon={faTelegram} />,
    },
    {
      name: "Youtube",
      link: "https://youtube.com/anshuopinion",
      icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
      name: "Instagram",
      link: "https://Instagram.com/anshuopinion",
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      name: "Facebook",
      link: "https://Facebook.com/anshuopinion",
      icon: <FontAwesomeIcon icon={faFacebook} />,
    },
  ];
  return (
    <div className={styles.UpperNav}>
      <a href="/home" className={styles.Logo}>
        <Logo />
      </a>
      <div className={styles.WrapSearch}>
        <div className={styles.Social}>
          {socialElement.map((social) => (
            <div className={`${styles}.${social.name}`} key={social.name}>
              <a href={social.link}>
                <i>{social.icon}</i>
              </a>
            </div>
          ))}
        </div>
        <Search />
      </div>
    </div>
  );
};

export default UpperNav;
