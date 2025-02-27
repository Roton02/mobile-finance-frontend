import { FaShieldAlt, FaBolt, FaGift, FaUsers } from 'react-icons/fa'

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Secure & Reliable',
      description:
        'We use advanced encryption and security measures to protect your transactions.',
      icon: <FaShieldAlt className='text-5xl text-[#9ca3af]' />,
    },
    {
      title: 'Instant Transactions',
      description: 'Send and receive money instantly, without any delay.',
      icon: <FaBolt className='text-5xl text-[#9ca3af]' />,
    },
    {
      title: 'Exclusive Rewards',
      description:
        'Enjoy cashback, discounts, and special offers on every transaction.',
      icon: <FaGift className='text-5xl text-[#9ca3af]' />,
    },
    {
      title: 'Trusted by Millions',
      description:
        'Join a growing community of users who trust FlexPay for their daily transactions.',
      icon: <FaUsers className='text-5xl text-[#9ca3af]' />,
    },
  ]

  return (
    <section className='bg-[#0b0c20] py-20 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <h2 className='text-4xl font-bold text-[#9ca3af] mb-8'>
          Why Choose FlexPay?
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 text-left'>
            {features.map((feature, index) => (
              <div
                key={index}
                className='flex items-center gap-4 p-4 bg-[#33333a] shadow-lg rounded-lg hover:scale-105 transition-all'
              >
                <div>{feature.icon}</div>
                <div>
                  <h3 className='text-xl font-semibold text-[#9ca3af]'>
                    {feature.title}
                  </h3>
                  <p className='text-[#9ca3af] mt-1'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src='https://i.postimg.cc/tRm0w9sS/images.png'
              alt='Why Choose Us'
              className='w-full rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
