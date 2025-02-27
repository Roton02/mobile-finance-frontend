import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-[#152036] text-[#9ca3af] py-10 px-5 md:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10'>
        {/* Branding & About */}
        <div>
          <h2 className='text-2xl font-bold'>FlexPay</h2>
          <p className='mt-3 text-sm'>
            Your trusted digital payment solution, powered by seamless
            transactions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-xl font-semibold'>Quick Links</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:underline'>
                Home
              </a>
            </li>
          </ul>
        </div>

        {/* Support & Help */}
        <div>
          <h3 className='text-xl font-semibold'>Support</h3>
          <ul className='mt-3 space-y-2 text-sm'>
            <li>
              <a href='#' className='hover:underline'>
                FAQs
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className='text-xl font-semibold'>Contact Us</h3>
          <p className='mt-3 text-sm'>Email: support@flexpay.com</p>
          <p className='text-sm'>Phone: +880 1234 567 890</p>
          <div className='flex gap-4 mt-4'>
            <FaFacebookF
              className='cursor-pointer hover:text-gray-300'
              size={20}
            />
            <FaTwitter
              className='cursor-pointer hover:text-gray-300'
              size={20}
            />
            <FaLinkedinIn
              className='cursor-pointer hover:text-gray-300'
              size={20}
            />
            <FaYoutube
              className='cursor-pointer hover:text-gray-300'
              size={20}
            />
          </div>
        </div>
      </div>
      <div className='text-center text-sm mt-8 border-t border-white/30 pt-4'>
        <p>&copy; {new Date().getFullYear()} FlexPay. All rights reserved.</p>
      </div>
    </footer>
  )
}
