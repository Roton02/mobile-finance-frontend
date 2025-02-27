import { useEffect, useState } from 'react'
import useAxiosPublic from '../../CustomHocks/useAxiosPublic'

const WithdrawRequest = () => {
  const AxiosPublic = useAxiosPublic()
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await AxiosPublic.get(
          '/api/transaction/getAllWithdrawRequest '
        )
        console.log(res.data)
        setRequests(res?.data?.data || [])
      } catch (error) {
        console.error('Error fetching requests:', error)
      }
    }

    fetchRequests()
  }, [AxiosPublic])

  console.log(requests)

  return (
    <div className='flex justify-center items-center text-5xl my-auto mx-auto py-32'>
      Close to Deadline{' '}
    </div>
  )
}

export default WithdrawRequest
