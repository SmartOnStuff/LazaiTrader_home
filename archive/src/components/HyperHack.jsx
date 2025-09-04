import React from 'react';
import { hyperion } from '../assets'; // You might want to replace this with a HyperHack badge
import styles, { layout } from '../style';

const HyperHack = () => {
  return (
    <section id='hyperhack' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <a href="https://hyperion.metis.io/#HyperHack-Hackathon" target="_blank" rel="noopener noreferrer">
          <img
            src={hyperion}
            alt='HyperHack Competition Badge'
            className='w-[75%] h-[75%] relative z-[5] object-contain'
          />
        </a>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Competing in HyperHack</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <a href="https://hyperion.metis.io/#HyperHack-Hackathon" className="highlight-link">HyperHack</a> is a prominent event where developers and teams compete by building innovative applications on the <a href="https://hyperion.metis.io/" className="highlight-link">Hyperion network</a>, an AI-optimized, high-performance Layer 2 solution built on Metis.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          LazaiTrader is currently participating in this competition. Winning the HyperHack prize would significantly increase our project's visibility and expand our testing reward pool from $100 to $500, allowing us to offer greater rewards to our community of testers and users.
        </p>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Competition ends on <span className="text-secondary font-semibold">August 21st</span>. Rankings are based on highest wallet value achieved through our platform.
        </p>
      </div>  
    </section>
  );
}

export default HyperHack;
