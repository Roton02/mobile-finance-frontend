import { useEffect, useState } from 'react'
import useUser from '../../CustomHocks/useUser'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom'
import useAxiosPublic from '../../CustomHocks/useAxiosPublic'

const UserProfile = () => {
  const { user, userLogOut } = useUser()
  const [data, setData] = useState(null)
  //   console.log(user)
  const axiosPublic = useAxiosPublic() // Custom Axios hook

  useEffect(() => {
    if (!user?.mobile) return // User mobile না থাকলে রিকোয়েস্ট পাঠানোর দরকার নেই

    const fetchData = async () => {
      try {
        const res = await axiosPublic.get(`/api/users/${user.mobile}`)
        setData(res.data.data) // Data set করা হচ্ছে
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchData()
  }, [user, axiosPublic])
  console.log('last', data)
  const [showBalance, setShowBalance] = useState(false)

  return (
    <div className=' flex   bg-purple-700 p-2  '>
      <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center gap-2 w-full px-4'>
        <div className=' '>
          <div className=' w-12 h-12 cursor-pointer  flex items-center  gap-3 '>
            <img
              className='w-full h-full rounded-full border-2 border-black'
              src={
                data?.photoURL ||
                'https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png'
              }
              alt=''
            />
          </div>
        </div>

        {/* Name And Balance  */}

        <div className='text-white border-y-2 px-3 flex flex-col justify-center items-center'>
          <h1 className='lg:text-2xl md:text-xl text-lg font-semibold'>
            <span className='font-medium'>{data?.name || 'User Name'}</span>
          </h1>
          <h1
            onClick={() => setShowBalance(!showBalance)}
            className='flex gap-3 items-center cursor-pointer font-semibold'
          >
            Balance:
            <span
              className={`font-medium transition-all ${
                showBalance ? 'text-white' : 'blur-sm'
              }`}
            >
              {Number(data?.balance).toFixed(2) || 0}
            </span>{' '}
            TK
            <FiEye className={`${showBalance ? 'hidden' : 'block'}`} />
            <FiEyeOff className={`${showBalance ? 'block' : 'hidden'}`} />
          </h1>
        </div>

        <div className=' flex gap-6 items-center text-white  px-3 py-1 rounded-lg bg-opacity-50 hover:text-black'>
          <Link
            className=' hover:bg-slate-400 px-2 py-1 rounded-sm  text-white'
            to={'/'}
          >
            Home
          </Link>
          <button
            className=' hover:bg-slate-400 px-2 py-1 rounded-sm '
            onClick={() => userLogOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
