import { useEffect, useState } from 'react';
import styles from './PrivacyPolicyPage.module.css';

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'data-controller', label: 'Data Controller' },
  { id: 'scope', label: 'Scope of This Policy' },
  { id: 'principles', label: 'Data Protection Principles' },
  { id: 'categories', label: 'Categories of Personal Data Collected' },
  { id: 'collection', label: 'Methods of Data Collection' },
  { id: 'legal-basis', label: 'Legal Basis for Processing' },
  { id: 'purpose', label: 'Purpose of Data Processing' },
  { id: 'ai', label: 'Artificial Intelligence, Analytics, and Research' },
  { id: 'marketing', label: 'Marketing Communications' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'security', label: 'Information Security and Cybersecurity Measures' },
  { id: 'sharing', label: 'Data Sharing and Disclosure' },
  { id: 'transfers', label: 'International Data Transfers' },
  { id: 'children', label: "Children's Data" },
  { id: 'rights', label: 'Data Subject Rights' },
  { id: 'breach', label: 'Data Breach Management' },
  { id: 'contact', label: 'Contact Information' },
  { id: 'updates', label: 'Policy Updates' },
];

const Section = ({ id, number, title, children }) => (
  <section id={id} className={styles.section}>
    <h2>{number}. {title}</h2>
    {children}
  </section>
);

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = 150;
      let currentSection = sections[0].id;

      sections.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element && element.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Privacy Policy</h1>
          <span>Effective Date: April 2026</span>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label='Privacy policy sections'>
          <nav>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={activeSection === section.id ? styles.active : undefined}
                aria-current={activeSection === section.id ? 'location' : undefined}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className={styles.content}>
          <Section id='introduction' number='1' title='Introduction'>
            <p>Axonlink Limited (“Axonlink”, “we”, “our”, or “us”) is committed to safeguarding the privacy, security, and confidentiality of all personal and health-related data entrusted to us. As a medical referral and digital health platform, we recognize the critical sensitivity of healthcare information and apply strict data protection and cybersecurity standards in all processing activities.</p>
            <p>This Privacy Policy explains how we collect, use, store, secure, and share personal data in connection with our healthcare services, digital platforms, and related operations.</p>
            <p>We process personal data in compliance with applicable laws, including the Nigeria Data Protection Regulation (NDPR), and aligned with internationally recognized data protection and information security best practices.</p>
          </Section>

          <Section id='data-controller' number='2' title='Data Controller'>
            <p>Axonlink Limited is the Data Controller responsible for determining how and why your personal data is processed.</p>
            <p><strong>Contact Details:</strong><br />Address: No. 20, Gwari Avenue Barnawa Kaduna, Kaduna State, Nigeria<br />Email: axonlinklimited@gmail.com</p>
          </Section>

          <Section id='scope' number='3' title='Scope of This Policy'>
            <p>This Policy applies to all individuals interacting with Axonlink, including:</p>
            <ul><li>Patients receiving medical referrals or healthcare services</li><li>Users of our digital platforms and applications</li><li>Healthcare professionals using our systems</li><li>Website visitors and other stakeholders engaging with our services</li></ul>
          </Section>

          <Section id='principles' number='4' title='Data Protection Principles'>
            <p>Axonlink adheres to the following core data protection principles:</p>
            <ul><li>Lawfulness, fairness, and transparency</li><li>Purpose limitation (data used only for specified purposes)</li><li>Data minimization (only necessary data is collected)</li><li>Accuracy (data is kept up to date)</li><li>Storage limitation (data retained only as long as necessary)</li><li>Integrity and confidentiality (security of data ensured)</li><li>Accountability (demonstrable compliance with regulations)</li></ul>
            <p>These principles underpin all data processing and cybersecurity practices within Axonlink.</p>
          </Section>

          <Section id='categories' number='5' title='Categories of Personal Data Collected'>
            <h3>A. Personal Identification Data</h3><p>We may collect:</p>
            <ul><li>Full name</li><li>Date of birth</li><li>Phone number</li><li>Email address</li><li>Residential address</li><li>Government-issued identifiers (e.g., NIN, BVN where applicable)</li></ul>
            <h3>B. Health and Medical Data (Sensitive Personal Data)</h3><p>Due to the nature of our services, we process sensitive health data, including:</p>
            <ul><li>Medical history and diagnoses</li><li>Treatment and referral records</li><li>Laboratory and diagnostic results</li><li>Prescriptions and medication records</li><li>Imaging and radiology data</li><li>Biometric or genetic data (where applicable)</li><li>Mental health information</li><li>Vital signs and clinical observations</li></ul>
            <p>Sensitive data is subject to enhanced technical and organizational safeguards.</p>
          </Section>

          <Section id='collection' number='6' title='Methods of Data Collection'>
            <p>We collect personal data through:</p><ul><li>Patient intake and registration processes</li><li>Clinical consultations and referrals</li><li>Laboratory and diagnostic systems</li><li>Integrated medical devices and monitoring tools</li><li>Mobile applications and web platforms</li><li>Communication with healthcare providers and users</li></ul>
          </Section>

          <Section id='legal-basis' number='7' title='Legal Basis for Processing'>
            <p>We process personal data under the following lawful bases:</p><ul><li>Explicit consent of the data subject</li><li>Provision of healthcare services and medical referrals</li><li>Compliance with legal and regulatory obligations</li><li>Protection of vital interests (life-saving situations)</li><li>Public health and healthcare system requirements</li></ul>
            <p>Processing of sensitive health data is strictly limited to legitimate medical and healthcare purposes.</p>
          </Section>

          <Section id='purpose' number='8' title='Purpose of Data Processing'>
            <p>Your data is processed to:</p><ul><li>Deliver medical referral and healthcare services</li><li>Maintain accurate medical records</li><li>Coordinate care among healthcare providers</li><li>Enable laboratory and diagnostic services</li><li>Support billing, insurance, and administrative processes</li><li>Improve healthcare quality and service delivery</li><li>Comply with regulatory reporting obligations</li><li>Conduct internal analytics for system improvement</li></ul>
          </Section>

          <Section id='ai' number='9' title='Artificial Intelligence, Analytics, and Research'>
            <p>Subject to explicit consent and strict safeguards, Axonlink may process anonymized or de-identified data for:</p><ul><li>Clinical research and innovation</li><li>Healthcare analytics</li><li>Machine learning model development</li><li>Enhancement of diagnostic and referral systems</li><li>Clinical decision support improvements</li></ul>
            <p><strong>All such data:</strong></p><ul><li>Is stripped of identifying elements</li><li>Cannot be traced back to individuals</li><li>Is never sold or used for re-identification</li><li>Is processed in accordance with ethical and regulatory standards</li></ul>
          </Section>

          <Section id='marketing' number='10' title='Marketing Communications'>
            <p>We may send limited communications related to:</p><ul><li>Health education and awareness</li><li>Preventive care reminders</li><li>Service updates and new offerings</li></ul>
            <p>These communications are only sent with prior consent, which can be withdrawn at any time.<br />Under no circumstances is medical or sensitive data shared for marketing purposes.</p>
          </Section>

          <Section id='retention' number='11' title='Data Retention'>
            <p>We retain personal and medical data for a minimum of seven (7) years from the last clinical interaction, or longer where required by applicable law or medical regulations.</p>
            <p><strong>After this period, data will be:</strong></p><ul><li>Securely deleted, or</li><li>Anonymized for research purposes, or</li><li>Archived in compliance with legal requirements</li></ul>
          </Section>

          <Section id='security' number='12' title='Information Security and Cybersecurity Measures'>
            <p>Axonlink implements robust technical and organizational measures, including:</p><ul><li>End-to-end encryption (data in transit and at rest)</li><li>Role-based access controls (RBAC)</li><li>Multi-factor authentication (MFA)</li><li>Secure cloud infrastructure with hardened configurations</li><li>Continuous monitoring and threat detection systems</li><li>Audit logs and access tracking</li><li>Regular vulnerability assessments and penetration testing</li><li>Incident response and breach management procedures</li><li>Ongoing staff training on data protection and cybersecurity</li></ul>
            <p>Access to sensitive data is strictly limited to authorized personnel on a need-to-know basis.</p>
          </Section>

          <Section id='sharing' number='13' title='Data Sharing and Disclosure'>
            <p>We only share personal data where necessary and lawful, with:</p><ul><li>Licensed healthcare professionals involved in patient care</li><li>Diagnostic laboratories and imaging centers</li><li>Pharmacies and medication providers</li><li>Insurance providers</li><li>Regulatory and public health authorities</li><li>Approved technology and service partners</li></ul>
            <p>All third parties are bound by strict data protection agreements and confidentiality obligations.</p><p>Axonlink does not sell personal or medical data.</p>
          </Section>

          <Section id='transfers' number='14' title='International Data Transfers'>
            <p>Where data is transferred or stored outside Nigeria, Axonlink ensures adequate safeguards, including:</p><ul><li>Data protection agreements and standard contractual clauses</li><li>Encryption and secure transmission protocols</li><li>Compliance with recognized international data protection standards</li></ul>
          </Section>

          <Section id='children' number='15' title="Children's Data">
            <p>For individuals under the age of 18, personal data is processed only with verifiable consent from a parent or legal guardian, in accordance with applicable laws.</p>
          </Section>

          <Section id='rights' number='16' title='Data Subject Rights'>
            <p>You have the right to:</p><ul><li>Access your personal data</li><li>Request correction of inaccurate data</li><li>Withdraw consent at any time</li><li>Request deletion (where legally permissible)</li><li>Object to certain processing activities</li><li>Request restriction of processing</li></ul><p>All requests should be directed to the Data Protection Officer.</p>
          </Section>

          <Section id='breach' number='17' title='Data Breach Management'>
            <p>In the event of a data breach, Axonlink will:</p><ul><li>Immediately investigate and contain the incident</li><li>Assess risks to affected individuals</li><li>Notify relevant regulatory authorities</li><li>Inform affected individuals where required</li></ul><p>Notification will be made within 72 hours, where feasible, in line with regulatory requirements.</p>
          </Section>

          <Section id='contact' number='18' title='Contact Information'>
            <p><strong>Data Protection Officer (DPO)</strong><br />Axonlink Limited<br />Email: <a href='mailto:axonlinklimited@gmail.com'>axonlinklimited@gmail.com</a><br />Phone: <a href='tel:+2348060906532'>(+234) 806 090 6532</a></p>
          </Section>

          <Section id='updates' number='19' title='Policy Updates'>
            <p>This Privacy Policy may be updated periodically to reflect changes in legal requirements, technology, or business operations.</p><p>Updates will be communicated via official Axonlink channels, and continued use of our services constitutes acceptance of such updates.</p>
          </Section>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
