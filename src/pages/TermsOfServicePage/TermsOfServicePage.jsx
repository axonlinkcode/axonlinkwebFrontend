import { useEffect, useState } from 'react';
import styles from '../PrivacyPolicyPage/PrivacyPolicyPage.module.css';

const sections = [
  { id: 'acceptance', label: 'Introduction and Acceptance of Terms' },
  { id: 'nature', label: 'Nature of Services' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'responsibilities', label: 'User Responsibilities' },
  { id: 'professional-obligations', label: 'Healthcare Professional Obligations' },
  { id: 'privacy', label: 'Data Protection and Privacy' },
  { id: 'consent', label: 'Consent to Data Processing' },
  { id: 'availability', label: 'Platform Availability and Service Continuity' },
  { id: 'cybersecurity', label: 'Cybersecurity and Acceptable Use' },
  { id: 'third-party', label: 'Third-Party Services' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'suspension', label: 'Suspension and Termination' },
  { id: 'incident-response', label: 'Incident Response and Security Reporting' },
  { id: 'governing-law', label: 'Governing Law and Jurisdiction' },
  { id: 'changes', label: 'Changes to Terms' },
  { id: 'contact', label: 'Contact Information' },
];

const Section = ({ id, number, title, children }) => (
  <section id={id} className={styles.section}>
    <h2>{number}. {title}</h2>
    {children}
  </section>
);

const TermsOfServicePage = () => {
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
    <div className={`${styles.page} ${styles.termsPage}`}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Terms of Service</h1>
          <span>Effective Date: April 2026</span>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar} aria-label='Terms of service sections'>
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
          <Section id='acceptance' number='1' title='Introduction and Acceptance of Terms'>
            <p>These Terms of Use (“Terms”) govern access to and use of the services, platforms, and systems operated by Axonlink Limited (“Axonlink”, “we”, “our”, or “us”).</p>
            <p>By accessing or using Axonlink’s platform, you (“User”, “you”, or “your”) agree to be legally bound by these Terms. If you do not agree, you must not use our services.</p>
            <p>These Terms apply to all users, including patients, healthcare professionals, and general platform visitors.</p>
          </Section>

          <Section id='nature' number='2' title='Nature of Services'>
            <p>Axonlink is a medical referral and healthcare coordination platform. We facilitate connections between patients and licensed healthcare providers, diagnostic centers, and other healthcare services.</p>
            <p><strong>Important Notice:</strong></p>
            <ul><li>Axonlink does not provide medical advice, diagnosis, or treatment.</li><li>All clinical decisions are the sole responsibility of licensed healthcare professionals.</li><li>Use of the platform does not create a doctor-patient relationship with Axonlink.</li></ul>
          </Section>

          <Section id='eligibility' number='3' title='Eligibility'>
            <p>To use Axonlink services, you must:</p>
            <ul><li>Be at least 18 years old, or</li><li>Use the platform under the supervision or consent of a parent or legal guardian</li></ul>
            <p>By using the platform, you confirm that all information provided is accurate and lawful.</p>
          </Section>

          <Section id='responsibilities' number='4' title='User Responsibilities'>
            <p>Users agree to:</p>
            <ul><li>Provide accurate, complete, and up-to-date information</li><li>Use the platform only for lawful and legitimate purposes</li><li>Maintain confidentiality of login credentials</li><li>Notify Axonlink immediately of unauthorized access or security breaches</li></ul>
            <p>You must not:</p>
            <ul><li>Misuse the platform for fraudulent or illegal activities</li><li>Impersonate another individual or entity</li><li>Upload false, misleading, or harmful medical information</li><li>Attempt to compromise system security (e.g., hacking, malware injection)</li></ul>
          </Section>

          <Section id='professional-obligations' number='5' title='Healthcare Professional Obligations'>
            <p>Healthcare professionals using Axonlink must:</p>
            <ul><li>Be duly licensed and authorized under Nigerian law</li><li>Provide accurate credentials and maintain valid professional registration</li><li>Adhere to applicable medical ethics and standards of care</li><li>Maintain patient confidentiality in compliance with NDPR and applicable laws</li></ul>
            <p>Axonlink reserves the right to verify credentials and suspend access where necessary.</p>
          </Section>

          <Section id='privacy' number='6' title='Data Protection and Privacy'>
            <p>Use of the platform is subject to our Privacy Policy.</p>
            <p>Axonlink processes personal and health data in accordance with:</p>
            <ul><li>Nigeria Data Protection Regulation (NDPR)</li><li>Applicable healthcare confidentiality laws</li><li>Industry cybersecurity standards</li></ul>
            <p>Users acknowledge that:</p>
            <ul><li>Sensitive health data may be processed to facilitate referrals and care coordination</li><li>Data is protected through appropriate technical and organizational measures</li></ul>
          </Section>

          <Section id='consent' number='7' title='Consent to Data Processing'>
            <p>By using Axonlink, you consent to the collection and processing of your personal and health data for purposes including:</p>
            <ul><li>Medical referrals and healthcare coordination</li><li>Communication with healthcare providers</li><li>System operation, improvement, and compliance</li></ul>
            <p>You may withdraw consent where applicable, subject to legal and operational limitations.</p>
          </Section>

          <Section id='availability' number='8' title='Platform Availability and Service Continuity'>
            <p>Axonlink strives to ensure continuous platform availability but does not guarantee uninterrupted access.</p>
            <p>We may:</p>
            <ul><li>Perform maintenance or upgrades</li><li>Modify or suspend services</li><li>Restrict access in cases of security risks or misuse</li></ul>
            <p>Axonlink is not liable for service interruptions beyond its reasonable control.</p>
          </Section>

          <Section id='cybersecurity' number='9' title='Cybersecurity and Acceptable Use'>
            <p>Users must not:</p>
            <ul><li>Attempt unauthorized access to systems or data</li><li>Interfere with platform integrity or performance</li><li>Circumvent security controls</li><li>Introduce malicious code or harmful technologies</li></ul>
            <p>Axonlink employs monitoring and security controls and reserves the right to investigate and take action against violations.</p>
          </Section>

          <Section id='third-party' number='10' title='Third-Party Services'>
            <p>Axonlink may integrate with or refer users to third-party providers, including:</p>
            <ul><li>Hospitals and clinics</li><li>Diagnostic laboratories</li><li>Pharmacies</li><li>Insurance providers</li></ul>
            <p>Axonlink does not control and is not responsible for the services, actions, or omissions of third parties.</p>
            <p>Users engage third-party services at their own risk.</p>
          </Section>

          <Section id='intellectual-property' number='11' title='Intellectual Property'>
            <p>All content, systems, and materials on the Axonlink platform—including logos, software, and documentation—are owned by or licensed to Axonlink.</p>
            <p>Users are granted a limited, non-exclusive, non-transferable license to use the platform for its intended purpose.</p>
            <p>Unauthorized reproduction, distribution, or modification is prohibited.</p>
          </Section>

          <Section id='liability' number='12' title='Limitation of Liability'>
            <p>To the fullest extent permitted by law, Axonlink shall not be liable for:</p>
            <ul><li>Medical outcomes or decisions made by healthcare providers</li><li>Errors or omissions in third-party services</li><li>Indirect, incidental, or consequential damages</li><li>Loss of data caused by factors outside our control</li></ul>
            <p>Axonlink’s role is strictly limited to facilitating referrals and coordination.</p>
          </Section>

          <Section id='indemnification' number='13' title='Indemnification'>
            <p>You agree to indemnify and hold harmless Axonlink, its directors, employees, and partners from any claims, damages, or liabilities arising from:</p>
            <ul><li>Your misuse of the platform</li><li>Violation of these Terms</li><li>Infringement of third-party rights</li></ul>
          </Section>

          <Section id='suspension' number='14' title='Suspension and Termination'>
            <p>Axonlink reserves the right to suspend or terminate access where:</p>
            <ul><li>These Terms are violated</li><li>Fraudulent or suspicious activity is detected</li><li>Required by law or regulatory authorities</li></ul>
            <p>Users may also discontinue use at any time.</p>
          </Section>

          <Section id='incident-response' number='15' title='Incident Response and Security Reporting'>
            <p>Users are encouraged to report suspected security incidents or vulnerabilities to:<br />Email: <a href='mailto:axonlinklimited@gmail.com'>axonlinklimited@gmail.com</a></p>
            <p>Axonlink maintains incident response procedures aligned with cybersecurity best practices.</p>
          </Section>

          <Section id='governing-law' number='16' title='Governing Law and Jurisdiction'>
            <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>
            <p>Any disputes arising shall be subject to the jurisdiction of Nigerian courts.</p>
          </Section>

          <Section id='changes' number='17' title='Changes to Terms'>
            <p>Axonlink may update these Terms periodically to reflect changes in law, technology, or services.</p>
            <p>Updated Terms will be communicated via official channels. Continued use of the platform constitutes acceptance of the revised Terms.</p>
          </Section>

          <Section id='contact' number='18' title='Contact Information'>
            <p><strong>Axonlink Limited</strong><br />Email: <a href='mailto:axonlinklimited@gmail.com'>axonlinklimited@gmail.com</a></p>
          </Section>
        </article>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
