import React from 'react'
import { shield, star, send } from '../assets'
import styles, { layout } from '../style'

const ProductFeature = ({ icon, title, description, features, reversed = false }) => (
  <section className={reversed ? layout.sectionReverse : layout.section}>
    <div className={reversed ? layout.sectionImgReverse : layout.sectionImg}>
      <div className={`w-[100px] h-[100px] rounded-full ${styles.flexCenter} bg-blue-gradient`}>
        <img
          src={icon}
          alt={title}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>{title}</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-6`}>
        {description}
      </p>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h4 className="font-poppins font-semibold text-white text-[16px] mb-1">
                {feature.title}
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[20px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>  
  </section>
)

const ProductFeatures = () => {
  const strategyVaultFeatures = [
    {
      title: "Secure Data Contribution",
      description: "Your trading data is signed with your wallet and stored in a TEE (Trusted Execution Environment) - completely private and secure."
    },
    {
      title: "Anonymous Analytics",
      description: "All data is anonymized before analysis. No individual information is ever revealed, only collective insights."
    },
    {
      title: "AI-Powered Recommendations", 
      description: "Get personalized strategy suggestions based on anonymous performance data from the entire community."
    },
    {
      title: "Collective Intelligence",
      description: "Your contributions help improve suggestions for everyone while maintaining complete privacy protection."
    }
  ]

  const tradingChartsFeatures = [
    {
      title: "Real-Time PnL Tracking",
      description: "Monitor your profit and loss in real-time with detailed performance metrics updated after every trade."
    },
    {
      title: "Visual Strategy Analysis",
      description: "Analyze your trading patterns with comprehensive charts showing entry/exit points, success rates, and optimization opportunities."
    },
    {
      title: "Telegram Integration",
      description: "Access all your trading charts directly within Telegram - no need for external platforms or complex interfaces."
    },
    {
      title: "Performance Optimization",
      description: "Identify what's working and what isn't with detailed analytics to continuously improve your trading strategy."
    }
  ]

  const conversationalTradingFeatures = [
    {
      title: "Natural Language Commands",
      description: "Simply tell the bot what you want to trade using everyday language - no complex syntax or technical commands required."
    },
    {
      title: "Multi-Agent AI System",
      description: "Multiple AI agents work together to understand your intent, analyze markets, and execute optimal trading strategies."
    },
    {
      title: "Zero Setup Required", 
      description: "No wallet downloads, browser extensions, or complex configurations. Start trading in seconds with just Telegram."
    },
    {
      title: "Intelligent Automation",
      description: "AI handles market monitoring, strategy execution, and risk management while you focus on high-level decisions."
    }
  ]

  return (
    <>
      <ProductFeature
        icon={star}
        title="Strategy Vault: Collective Trading Intelligence"
        description="The world's first TEE-secured strategy sharing system. Contribute your trading data anonymously to help build collective intelligence while receiving AI-powered recommendations tailored to your trading style."
        features={strategyVaultFeatures}
        reversed={false}
      />
      
      <ProductFeature
        icon={shield}
        title="Advanced Trading Charts & Analytics" 
        description="Professional-grade trading analytics delivered directly to your Telegram. Track performance, analyze patterns, and optimize strategies with comprehensive charts and real-time PnL tracking."
        features={tradingChartsFeatures}
        reversed={true}
      />
      
      <ProductFeature
        icon={send}
        title="Conversational AI Trading Platform"
        description="Experience the future of trading with natural language processing and multi-agent AI. No complex interfaces - just intelligent conversations that execute sophisticated trading strategies."
        features={conversationalTradingFeatures}
        reversed={false}
      />
    </>
  )
}

export default ProductFeatures