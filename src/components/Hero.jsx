import styles from '../style'
import { robot } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[60px]'>
            LazaiTrader <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>AI-Powered</span> {" "}
          </h1>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[42px] text-white ss:leading-[100px] leading-[60px] w-full'>
          Trading on Telegram.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          LazaiTrader is a multi-agent AI trading platform that operates directly through Telegram. Experience sophisticated trading made accessible with conversational AI, secure TEE technology, and no need for wallets or browsers.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt='AI Trading Bot'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
    </section>
  )
}

export default Hero