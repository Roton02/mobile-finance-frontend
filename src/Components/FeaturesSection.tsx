import React from 'react'
import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const features = [
    {
      title: 'Secure Transactions',
      description:
        'Your financial safety is our top priority, fortified by advanced security measures.',
      icon: '🔒',
    },
    {
      title: 'Instant Transfers',
      description:
        'Send and receive money instantly with our seamless transfer system.',
      icon: '⚡',
    },
    {
      title: '24/7 Support',
      description:
        'We are here for you round the clock to assist with any queries or issues.',
      icon: '📞',
    },
    {
      title: 'Bill Payments',
      description:
        'Pay electricity, gas, water, and mobile bills effortlessly.',
      icon: '💳',
    },
    {
      title: 'Cashback & Offers',
      description:
        'Enjoy exciting cashback and discounts on various transactions.',
      icon: '🎉',
    },
  ]

  return (
    <section className='bg-[#0b0c20] py-20 px-6 text-center'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-[#9ca3af] mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose FlexPay?
        </motion.h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className='p-6 bg-[#33333a] shadow-lg rounded-lg hover:scale-105 transition-all'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div className='text-5xl mb-4' whileHover={{ scale: 1.2 }}>
                {feature.icon}
              </motion.div>
              <motion.h3 className='text-xl font-semibold text-[#9ca3af]'>
                {feature.title}
              </motion.h3>
              <motion.p className='text-[#9ca3af] mt-2'>
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
