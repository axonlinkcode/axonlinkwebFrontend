import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './PatientInvitePage.module.css';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.axonlink.health';

function PatientInvitePage() {
  const [searchParams] = useSearchParams();
  const inviteToken = (searchParams.get('inviteToken') || '').trim();

  const appUrl = useMemo(() => {
    if (!inviteToken) return '';
    return `axonlink://patient-invite?role=patient&inviteToken=${encodeURIComponent(inviteToken)}`;
  }, [inviteToken]);

  if (!inviteToken) {
    return (
      <main className={styles.page}>
        <section className={styles.card}>
          <div className={styles.mark}>A</div>
          <h1>This invitation link is incomplete</h1>
          <p>
            We could not find the information needed to open your Axonlink
            patient invitation.
          </p>
          <p className={styles.help}>
            Return to the invitation email from your clinician and select
            Create My Account again.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.mark}>A</div>

        <h1>Your Axonlink patient profile is ready</h1>

        <p>
          Open Axonlink to create your account. The health information already
          added by your clinician will remain connected to your profile.
        </p>

        <a className={styles.primaryButton} href={appUrl}>
          Open Axonlink
        </a>

        <a
          className={styles.secondaryButton}
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noreferrer"
        >
          Get Axonlink on Google Play
        </a>

        <p className={styles.help}>
          If you install Axonlink now, return to your invitation email and
          select Create My Account again.
        </p>
      </section>
    </main>
  );
}

export default PatientInvitePage;
