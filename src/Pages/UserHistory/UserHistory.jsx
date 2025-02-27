import { useEffect, useState } from 'react'
import useUser from '../../CustomHocks/useUser'
import axios from 'axios'

const UserHistory = () => {
  const [historyData, setHistoryData] = useState([])
  const { user } = useUser()

  useEffect(() => {
    if (!user?.mobile) return

    const fetchHistory = async () => {
      try {
        const res = await axios.get(
          `https://mobile-banking-tawny.vercel.app/api/transaction?mobile=${user.mobile}`,
          { withCredentials: true } // Ensure cookies are included
        )

        setHistoryData(res?.data?.data)
      } catch (error) {
        console.error('Error fetching transaction history:', error)
      }
    }

    fetchHistory()
  }, [user?.mobile])

  // Delete Transaction
  console.log(historyData)
  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Your Transaction History</h2>
      {historyData?.length === 0 ? (
        <p className='text-gray-500'>No transactions found.</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse border border-gray-600 text-black'>
            <thead>
              <tr className='bg-gray-800 text-white'>
                <th className='p-3 border border-gray-600'>#</th>
                <th className='p-3 border border-gray-600'>receiver</th>
                <th className='p-3 border border-gray-600'>sender</th>
                <th className='p-3 border border-gray-600'>Amount</th>
                <th className='p-3 border border-gray-600'>transactionType</th>
                <th className='p-3 border border-gray-600'>date</th>
              </tr>
            </thead>
            <tbody>
              {historyData?.map((transaction, index) => (
                <tr key={transaction._id} className='text-center bg-gray-200'>
                  <td className='p-3 border border-gray-600'>{index + 1}</td>
                  <td className='p-3 border border-gray-600'>
                    {transaction.receiver}
                  </td>
                  <td className='p-3 border border-gray-600'>
                    {transaction.sender}
                  </td>
                  <td className='p-3 border border-gray-600'>
                    {transaction.amount} BDT
                  </td>
                  <td
                    className={`p-3 border border-gray-600 ${
                      transaction.transactionType === 'CashOut'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {transaction.transactionType}
                  </td>
                  <td className='p-3 border border-gray-600'>
                    {
                      new Date(transaction.createdAt)
                        .toISOString()
                        .split('T')[0]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default UserHistory
