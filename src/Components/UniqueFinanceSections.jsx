import { useState } from 'react'
import { motion } from 'framer-motion'

export default function UniqueFinanceSections() {
  const [currency, setCurrency] = useState('USD')
  const [amount, setAmount] = useState(1)
  const exchangeRate = 110

  return (
    <div className='bg-[#0b0c20] text-[#9ca3af] min-h-screen p-10 mb-4'>
      {/* Crypto Wallet Integration */}
      <motion.div
        className='max-w-5xl mx-auto text-center py-20'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className='text-4xl font-bold'>Crypto Wallet Integration</h2>
        <p className='mt-4 text-lg text-[#9ca3af]'>
          Securely connect and manage your crypto assets.
        </p>
        <button className='mt-6 px-6 py-3 bg-[#0b0c20] text-[#9ca3af] font-semibold rounded-lg hover:bg-pink-100'>
          Connect Wallet
        </button>
      </motion.div>

      {/* Live Currency Converter */}
      <motion.div
        className='max-w-5xl mx-auto text-center py-20'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className='text-4xl font-bold'>Live Currency Converter</h2>
        <p className='mt-4 text-lg text-[#9ca3af]'>
          Convert currencies in real-time with updated exchange rates.
        </p>
        <div className='mt-6 bg-[#0b0c20] p-6 rounded-lg shadow-xl text-black inline-block'>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className='p-2 border text-white rounded-md mr-2 w-24 text-center'
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className='p-2 border text-white rounded-md'
          >
            <option value='USD'>USD</option>
            <option value='BDT'>BDT</option>
          </select>
          <p className='mt-4 font-bold text-[#E2136E]'>
            Converted: {amount * exchangeRate} BDT
          </p>
        </div>
      </motion.div>

      {/* Finance Tips & Tricks with vibration effect */}
      <motion.div
        className='max-w-5xl mx-auto text-center py-20'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileInView={{ x: [0, -2, 2, -2, 2, 0] }}
      >
        <h2 className='text-4xl font-bold'>Finance Tips & Tricks</h2>
        <p className='mt-4 text-lg text-pink-200'>
          Get AI-powered financial advice to manage your money smartly.
        </p>
        <div className='mt-6 bg-white p-6 rounded-lg shadow-xl text-black text-left'>
          <ul className='list-disc list-inside'>
            <li>Save at least 20% of your monthly income.</li>
            <li>Invest in long-term assets for financial stability.</li>
            <li>Use budgeting apps to track expenses effectively.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
