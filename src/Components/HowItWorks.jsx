import { FaRegCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HowItWorks = () => {
  const steps = [
    {
      title: 'Sign Up',
      description:
        'Create an account using your phone number and get started instantly.',
    },
    {
      title: 'Add Money',
      description:
        'Easily add money to your FlexPay wallet from your bKash account.',
    },
    {
      title: 'Make Payments',
      description: 'Pay bills, send money, and shop online seamlessly.',
    },
    {
      title: 'Enjoy Rewards',
      description:
        'Get cashback, discounts, and exclusive offers on transactions.',
    },
  ]

  return (
    <section className='bg-[#0b0c20] py-20 px-6 text-center'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl font-bold text-[#9ca3af] mb-10'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        <div className='grid md:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className='p-6 bg-[#33333a] shadow-lg rounded-lg'
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div
                className='text-5xl text-[#9ca3af] mb-4 mx-auto'
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <FaRegCheckCircle />
              </motion.div>
              <h3 className='text-xl font-semibold text-[#9ca3af]'>
                {step.title}
              </h3>
              <p className='text-[#9ca3af] mt-2'>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
