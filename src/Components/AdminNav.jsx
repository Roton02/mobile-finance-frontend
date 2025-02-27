import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className=' flex flex-col gap-3'>
      <Link to={'/dash/overview'}>
        <button className=' bg-white w-48 py-12 px-6   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black text-nowrap '>
              OverView
            </h1>
          </div>
        </button>
      </Link>
      <Link to={'/dash/manageUser'}>
        <button className=' bg-white w-48 py-12 px-6   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black text-nowrap '>
              Manage User
            </h1>
          </div>
        </button>
      </Link>
      <Link to={'/dash/cashRequest'}>
        <button className=' bg-white w-48 py-12 px-6   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black text-nowrap '>
              Approve <br /> Cash Request
            </h1>
          </div>
        </button>
      </Link>
      <Link to={'/dash/withdrawRequest'}>
        <button className=' bg-white w-48 py-12 px-6   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black text-nowrap '>
              Apprive <br /> WithDraw <br /> Request
            </h1>
          </div>
        </button>
      </Link>
    </div>
  )
}

export default AdminNav
