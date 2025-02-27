import { Link } from 'react-router-dom'

const AgentNav = () => {
  return (
    <>
      <Link to={'/dash/agent/cashIn'}>
        <button className=' bg-white w-48  px-14 py-12   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black  '>CashIn</h1>
          </div>
        </button>
      </Link>

      <Link to={'/dash/agent/cashRequest'}>
        <button className=' bg-white w-48 py-12 px-6   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black text-nowrap '>
              Cash Request
            </h1>
          </div>
        </button>
      </Link>

      <Link to={'/dash/agent/withdrawRequest'}>
        <button className=' bg-white   w-48 py-12 px-2   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black  text-nowrap'>
              Withdraw Request
            </h1>
          </div>
        </button>
      </Link>
      <Link to={'/dash/agent/history'}>
        <button className=' bg-white w-48  p-12   overflow-hidden shadow-black shadow-lg rounded-lg  hover:scale-95 transition-all duration-300'>
          <div className=' '>
            <h1 className='text-xl font-bold text-black  '>history</h1>
          </div>
        </button>
      </Link>
    </>
  )
}

export default AgentNav
