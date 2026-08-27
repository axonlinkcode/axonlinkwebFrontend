import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import WaitingListModal from '../components/WaitingList/WaitingListModal';

import style from './Layout.module.css';

function Layout() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  const openWaitlist = () => setShowWaitlist(true);
  const closeWaitlist = () => setShowWaitlist(false);
  return (
    <>
      <header className={style.navbar}>
          <Navbar onOpenWaitlist={openWaitlist} />
      </header>
      <main className={style.main}>
        <Outlet context={{ onOpenWaitlist: openWaitlist }} />
      </main>
      <Footer />

      {showWaitlist && <WaitingListModal onClose={closeWaitlist} />}
    </>
  );
}

export default Layout;
