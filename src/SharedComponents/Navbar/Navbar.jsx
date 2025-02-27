import { Link } from 'react-router-dom'
import { BiLogInCircle } from 'react-icons/bi'
import logo from '../../assets/features/fp-logo.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useContext } from 'react'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  console.log(user)

  return (
    <div className='absolute top-0 z-50 w-full  '>
      <div className=' h-24 w-11/12 mx-auto flex justify-between items-center '>
        <Link to={'/'}>
          <div className=' h-8'>
            <img className=' h-full' src={logo} alt='logo' />
          </div>
        </Link>

        <div className=''>
          {user ? (
            <>
              {user?.accountType === 'User' && (
                <Link to={'/dash/sendMoney'}>
                  <button className=' text-lg flex  gap-2 items-center group'>
                    <h1 className='text-xl text-white font-semibold'>
                      DashBoard
                    </h1>
                  </button>
                </Link>
              )}
              {user?.accountType === 'Agent' && (
                <Link to={'/dash/agent/cashIn'}>
                  <button className=' text-lg flex  gap-2 items-center group'>
                    <h1 className='text-xl text-white font-semibold'>
                      DashBoard
                    </h1>
                  </button>
                </Link>
              )}
              {user?.accountType === 'Admin' && (
                <Link to={'/dash/overview'}>
                  <button className=' text-lg flex  gap-2 items-center group'>
                    <h1 className='text-xl text-white font-semibold'>
                      DashBoard
                    </h1>
                  </button>
                </Link>
              )}
            </>
          ) : (
            <Link to={'/login'}>
              <button className=' text-lg flex  gap-2 items-center group'>
                Login <BiLogInCircle className='  group-hover:scale-125' />
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className=''>
        <svg
          className='absolute bottom-0 left-0 w-full'
          height='20'
          viewBox='0 0 100 20'
          preserveAspectRatio='none'
        >
          <polyline
            points='0,0 15,0 20,18 80,18 85,0 100,0'
            stroke='#2b3a4e'
            strokeWidth='1.5'
            fill='none'
          />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
