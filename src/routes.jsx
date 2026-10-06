import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import LandingPage from './pages/LandingPage/LandingPage';
import SolutionPage from './pages/SolutionPage/SolutionPage.jsx';
import FeaturesPage from './pages/FeaturesPage/FeaturesPage.jsx';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import HowItWorksPage from './pages/HowItWorksPage/HowItWorksPage.jsx';
import SecurityPage from './pages/SecurityPage/SecurityPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx';
import TermsOfServicePage from './pages/TermsOfServicePage/TermsOfServicePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx'
import PatientInvitePage from './pages/PatientInvitePage/PatientInvitePage.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/patient-invite" element={<PatientInvitePage />} />

      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="solution" element={<SolutionPage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="workings" element={<HowItWorksPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />

        {/* Catch-all route for 404 */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
