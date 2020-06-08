import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UpperNav.module.scss';
import Logo from '../../../public/images/Blogo.png';
import Search from '../../../utils/Search/Search';
import Link from 'next/link';

import { faTelegram, faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
const UpperNav = ({ clicked }) => {
  const socialElement = [
    {
      name: 'Telegram',
      link: 'https://telegram.me/anshuopinion',
      icon: <FontAwesomeIcon icon={faTelegram} className={styles.icon} width="16" size="2x" />,
    },
    {
      name: 'Youtube',
      link: 'https://youtube.com/anshuopinion',
      icon: <FontAwesomeIcon icon={faYoutube} className={styles.icon} width="16" size="2x" />,
    },
    {
      name: 'Instagram',
      link: 'https://Instagram.com/anshuopinion',
      icon: <FontAwesomeIcon icon={faInstagram} className={styles.icon} width="16" size="2x" />,
    },
    {
      name: 'Facebook',
      link: 'https://Facebook.com/anshuopinion',
      icon: <FontAwesomeIcon icon={faFacebook} className={styles.icon} width="16" size="2x" />,
    },
  ];
  return (
    <div className={styles.UpperNav}>
      <Link href="/">
        <a onClick={clicked}>
          <img src={Logo} alt="logo" className={styles.Logo} />
        </a>
      </Link>
      <div className={styles.WrapSearch}>
        <div className={styles.Social}>
          {socialElement.map((social) => (
            <div className={`${styles}.${social.name}`} key={social.name}>
              <a href={social.link} target="_blank">
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
