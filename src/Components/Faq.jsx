import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is FlexPay?',
      answer:
        'FlexPay is a seamless digital payment solution allowing users to send, receive, and manage transactions securely.',
    },
    {
      question: 'Is FlexPay secure?',
      answer:
        'Yes! We use advanced encryption and multi-layered security protocols to keep your transactions safe.',
    },
    {
      question: 'How can I sign up?',
      answer:
        'You can sign up using your mobile number and follow the simple verification process.',
    },
    {
      question: 'Are there any hidden charges?',
      answer:
        'No, FlexPay maintains complete transparency with its users. All applicable charges are mentioned upfront.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className='bg-[#0b0c20] py-20 px-6 text-center'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl font-bold text-[#9ca3af] mb-8'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4 text-left'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-[#33333a] p-4 rounded-lg shadow-md'>
              <button
                className='w-full flex justify-between items-center text-lg font-semibold text-[#9ca3af]'
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <p className='text-[#9ca3af] mt-2'>{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
