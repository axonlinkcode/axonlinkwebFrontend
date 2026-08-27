import styles from './Footer.module.css';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import FooterLogo from '../../assets/images/footerLogo.png';
import facebook from '../../assets/icons/facebook.png'
import x from '../../assets/icons/x.png'
import instagram from '../../assets/icons/instagram.png'
import linkdin from '../../assets/icons/linkdin.png'

const FooterBrand = () => {
  return (
    <div className={styles.footerBrand}>
      <img src={FooterLogo} alt='Logo' className={styles.footerLogo} />
      <p className={styles.footerDesc}>
        Unifying patient data and clinical workflows into a single, secure
        network.
      </p>

      <div className={styles.footerSocials}>
        <a
          href='https://web.facebook.com/profile.php?id=61591335657932'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Axonlink on Facebook'
        >
         <img src={facebook} alt="facebook" />
        </a>
        <a
          href='https://x.com/Axonlink'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Axonlink on X'
        >
           <img src={x} alt="X" />
        </a>
        <a
          href='https://www.instagram.com/axonlink_ng/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Axonlink on Instagram'
        >
           <img src={instagram} alt="instagram" />
        </a>
        <a
          href='https://www.linkedin.com/company/axonlinkhealth/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Axonlink on LinkedIn'
        >
           <img src={linkdin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
