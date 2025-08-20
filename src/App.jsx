import React from 'react';
import { 
  GetStarted, 
  Features, 
  CTA,
  HyperHack,
  Footer, 
  Hero, 
  Navbar, 
  Stats 
} from './components';
import CampaignPopup from './components/CampaignPopup';
import styles from './style';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <CampaignPopup />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Features/> {/* Single, cleaned up features section */}
          <HyperHack/>
          <GetStarted/>
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  );
}

export default App;