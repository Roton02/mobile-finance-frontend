import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useMutation } from '@tanstack/react-query'
import SectionHeading from '../../SharedComponents/SectionHeading/SectionHeading'
import useAxiosPublic from '../../CustomHocks/useAxiosPublic'

const SendMoney = () => {
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState('')
  const [receiver, setReceiver] = useState('')
  const [pin, setPin] = useState('')
  const AxiosPublic = useAxiosPublic()

  const { mutate: sendMoney, isPending } = useMutation({
    mutationFn: async (data) => {
      const response = await AxiosPublic.post(
        '/api/transaction/sendMoney',
        data
      )
      return response.data
    },
    onSuccess: (data) => {
      toast.success(data.message)
      // Reset form after successful transaction
      setTimeout(() => {
        setStep(1)
        setAmount('')
        setReceiver('')
        setPin('')
        window.location.reload()
      }, 1000)
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message || 'Something went wrong'
      toast.error(errorMessage)
    },
  })

  // Handle Next Step
  const handleNext = () => {
    if (!receiver || !amount) {
      toast.error('Please fill in all fields')
      return
    }
    if (amount < 50) {
      toast.error('Minimum amount to send is 50 Taka.')
      return
    }
    setStep(2)
  }

  // Handle Money Send
  const handleSendMoney = () => {
    if (pin.length !== 5) {
      toast.error('PIN must be 5 digits.')
      return
    }

    sendMoney({
      receiverNumber: receiver,
      amount: parseInt(amount),
      pin: pin,
    })
  }

  return (
    <div className='bg-white rounded-lg shadow-md mx-auto p-8'>
      <ToastContainer />

      {isPending ? (
        <div className='flex justify-center h-screen my-auto items-center text-6xl'>
          SendMoney Processing
          <span className='loading loading-dots loading-lg'></span>
          <span className='loading loading-dots loading-lg'></span>
          <span className='loading loading-dots loading-lg'></span>
          <span className='loading loading-dots loading-lg'></span>
        </div>
      ) : (
        <div>
          {step === 1 ? (
            /** Step 1: Input Form */
            <>
              <SectionHeading title='Send Money' />
              <div className='space-y-4'>
                <div>
                  <label
                    htmlFor='receiver'
                    className='block text-lg text-gray-700'
                  >
                    Receiver`s Number
                  </label>
                  <input
                    type='number'
                    id='receiver'
                    value={receiver}
                    onChange={(e) => setReceiver(e.target.value)}
                    className='w-full p-3 border rounded-md mt-2'
                    placeholder="Enter receiver's number"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='amount'
                    className='block text-lg text-gray-700'
                  >
                    Amount (Taka)
                  </label>
                  <input
                    type='number'
                    id='amount'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className='w-full p-3 border rounded-md mt-2'
                    placeholder='Enter amount'
                    required
                  />
                </div>

                <button
                  onClick={handleNext}
                  className='w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md mt-4'
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            /** Step 2: Confirm & Enter PIN */
            <>
              <SectionHeading title='Confirm Transaction' />
              <div className='space-y-4'>
                <div className='bg-gray-100 p-4 text-black rounded-md'>
                  <p className='text-lg'>
                    <strong>Receiver:</strong> {receiver}
                  </p>
                  <p className='text-lg'>
                    <strong>Amount:</strong> {amount} Taka
                  </p>
                </div>

                <div>
                  <label htmlFor='pin' className='block text-lg text-gray-700'>
                    Enter PIN
                  </label>
                  <input
                    type='password'
                    id='pin'
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className='w-full p-3 border rounded-md mt-2'
                    placeholder='Enter 5-digit PIN'
                    maxLength='5'
                    required
                  />
                </div>

                <div className='flex gap-4'>
                  <button
                    onClick={() => setStep(1)}
                    className='w-1/2 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-md'
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSendMoney}
                    className='w-1/2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md'
                  >
                    Send
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SendMoney
