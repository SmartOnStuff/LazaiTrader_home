import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] mb-6 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Features = () => {
  return (
    <section id='features' className={`${layout.section} ${styles.paddingX}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Revolutionary Trading Features
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          LazaiTrader combines cutting-edge AI technology with user-friendly Telegram integration. Our platform offers secure, private, and intelligent trading solutions that adapt to your needs and market conditions.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Features