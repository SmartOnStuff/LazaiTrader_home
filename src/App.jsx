import React from 'react';
import { 
  GetStarted, 
  Features, 
  CTA,
  HyperHack, // Renamed from CVP
  Footer, 
  Hero, 
  Navbar, 
  Stats 
} from './components';
import ProductFeatures from './components/ProductFeatures';
import styles from './style';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
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
          <Features/> {/* Overview features */}
          <ProductFeatures/> {/* Detailed product features */}
          <HyperHack/> {/* Renamed from CVP */}
          <GetStarted/> {/* Renamed from Billing */}
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  );
}

export default App;