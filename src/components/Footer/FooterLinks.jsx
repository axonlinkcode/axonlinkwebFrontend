import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const groups = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Solution', to: '/solution' },
      { label: 'How it Works', to: '/workings' },
      { label: 'Security', to: '/security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/aboutus' },
      { label: 'Team', to: '/aboutus#team' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: "FAQ's", to: '/#faqs' },
      { label: 'Help Center', to: '/contact' },
    ],
  },
  {
    title: 'Terms and Policy',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
    ],
  },
];

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      {groups.map((group) => (
        <div key={group.title}>
          <h4>{group.title}</h4>
          {group.links.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
