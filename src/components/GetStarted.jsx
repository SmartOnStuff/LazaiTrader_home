import React from 'react'
import { bill } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const GetStarted = () => {
  return (
    <section id='GetStarted' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt='Telegram Trading Interface'
        className='w-[100%] h-[100%] relative z-[5] object-contain'
      />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Start Trading in Seconds</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Experience the future of trading with LazaiTrader. No complex setups, no wallet management, no browser extensions. Simply start a conversation with our Telegram bot and begin trading with AI-powered strategies tailored to your preferences.
        </p>
        <div className="mt-6 mb-6">
          <h3 className="text-white font-poppins font-semibold text-[20px] mb-3">🏆 Current Spotlight Campaign:</h3>
          <div className="bg-dimBlue bg-opacity-20 p-4 rounded-lg">
            <p className="text-dimWhite font-poppins text-[16px] mb-2">Prize Pool: <span className="text-secondary font-bold">$100</span> (increases to <span className="text-secondary font-bold">$500</span> if we win HyperHack!)</p>
            <ul className="text-dimWhite font-poppins text-[14px] space-y-1">
              <li>🥇 1st Place: $50 → $100</li>
              <li>🥈 2nd Place: $25 → $50</li>
              <li>🥉 3rd Place: $25 → $50</li>
              <li>💰 Plus 10 additional $30 winners if we win!</li>
            </ul>
          </div>
        </div>
        <Button 
          styles="mt-10" 
          text="Launch Telegram Bot" 
          link="https://t.me/LazaiTrader_bot" 
        />
      </div>  
    </section>
  )
}

export default GetStarted