import styles from '../sass/contact.module.scss';
import contactImage from '../public/images/img-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
const contact = () => {
  return (
    <div className={styles.ContainerContact}>
      <div className={styles.ContactPic}>
        <img src={contactImage} alt="IMG" />
      </div>

      <form className={styles.ContactForm}>
        <span className={styles.ContactFormTittle}>Get in touch</span>

        <div className={styles.WrapInput} data-validate="Name is required">
          <input className={styles.Input} type="text" name="name" placeholder="Name" />
          <span className={styles.ShadowInput}></span>
        </div>

        <div className={styles.WrapInput} data-validate="Valid email is required: ex@abc.xyz">
          <input className={styles.Input} type="text" name="email" placeholder="Email" />
          <span className={styles.ShadowInput}></span>
        </div>

        <div className={styles.WrapInput} data-validate="Subject is required">
          <input className={styles.Input} type="text" name="subject" placeholder="Subject" />
          <span className={styles.ShadowInput}></span>
        </div>

        <div className={styles.WrapInput} data-validate="Message is required">
          <textarea className={styles.Input} name="message" placeholder="Message"></textarea>
          <span className={styles.ShadowInput}></span>
        </div>

        <div className={styles.ContainerContactFormBtn}>
          <button className={styles.ContactFormBtn}>
            <span>
              Send Email
              <FontAwesomeIcon className={styles.ArrowIcon} icon={faLongArrowAltRight} />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default contact;
