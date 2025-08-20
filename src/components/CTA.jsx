import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Ready to Transform Your Trading?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Join the future of AI-powered trading on Telegram. Experience the Strategy Vault, TEE security, and multi-agent AI optimization that makes sophisticated trading accessible to everyone.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button 
          styles="mt-10" 
          text="Start Trading Now" 
          link="https://t.me/LazaiTrader_bot" 
        />
      </div>
    </section>
  )
}

export default CTA