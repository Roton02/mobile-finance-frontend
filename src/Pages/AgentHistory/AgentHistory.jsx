import { useEffect, useState } from 'react'
import axios from 'axios'
import useUser from '../../CustomHocks/useUser'
import useAxiosPublic from '../../CustomHocks/useAxiosPublic'
import SectionHeading from '../../SharedComponents/SectionHeading/SectionHeading'

const AgentHistory = () => {
  const [historyData, setHistoryData] = useState([])
  const { user } = useUser()
  const AxiosPublic = useAxiosPublic()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resTran = await AxiosPublic.get(`/api/transaction/${user?.id}`)
        console.log(resTran)

        setHistoryData(resTran?.data?.data)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    fetchUsers()
  }, [AxiosPublic])

  // Delete Transaction
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?')
    if (!confirmDelete) return

    try {
      await axios.delete(
        `https://mobile-banking-tawny.vercel.app/api/transaction/agent/${id}`,
        { withCredentials: true }
      )
      setHistoryData(
        historyData.filter((transaction) => transaction._id !== id)
      )
    } catch (error) {
      console.error('Error deleting transaction:', error)
    }
  }

  return (
    <div className=''>
      <SectionHeading title='Agent Transaction History' />
      <div className='px-5'>
        {historyData?.length === 0 ? (
          <p className='text-gray-500'>No transactions found.</p>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse border border-gray-600 text-black'>
              <thead>
                <tr className='bg-gray-800 text-white'>
                  <th className='p-3 border border-gray-600'>#</th>
                  <th className='p-3 border border-gray-600'>Date</th>
                  <th className='p-3 border border-gray-600'>Amount</th>
                  <th className='p-3 border border-gray-600'>Status</th>
                  <th className='p-3 border border-gray-600'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {historyData?.map((transaction, index) => (
                  <tr key={transaction._id} className='text-center bg-gray-200'>
                    <td className='p-3 border border-gray-600'>{index + 1}</td>
                    <td className='p-3 border border-gray-600'>
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className='p-3 border border-gray-600'>
                      {transaction.amount} BDT
                    </td>
                    <td
                      className={`p-3 border border-gray-600 ${
                        transaction.status === 'Completed'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.status}
                    </td>
                    <td className='p-3 border border-gray-600'>
                      <button
                        className='bg-red-600 text-white px-3 py-1 rounded mr-2'
                        onClick={() => handleDelete(transaction._id)}
                      >
                        Delete
                      </button>
                      <button className='bg-blue-600 text-white px-3 py-1 rounded'>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default AgentHistory
