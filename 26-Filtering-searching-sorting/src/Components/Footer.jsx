import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      {/* Main Footer */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div className='space-y-4'>
            <img className='h-10 w-auto' src="src/Image/01.png" alt="Logo" />
            <p className='text-sm text-gray-400'>
              Your trusted furniture store for quality home furnishings. Transform your space with our curated collection.
            </p>
            <div className='flex gap-4'>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <Facebook className='w-5 h-5' />
              </a>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <Twitter className='w-5 h-5' />
              </a>
              <a href="#" className='hover:text-blue-500 transition-colors'>
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>About Us</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Shop</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Products</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Contact</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-4'>Customer Service</h3>
            <ul className='space-y-2'>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Help Center</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Track Order</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Returns</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>Shipping Info</a></li>
              <li><a href="#" className='hover:text-blue-500 transition-colors'>FAQs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-white font-semibold text-lg mb-4'>Contact Us</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 mt-1 shrink-0' />
                <span className='text-sm'>address na made</span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5 shrink-0' />
                <span className='text-sm'>11521152</span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5 shrink-0' />
                <span className='text-sm'>hk@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className='mt-12 pt-8 border-t border-gray-800'>
          <div className='max-w-md mx-auto text-center'>
            <h3 className='text-white font-semibold text-lg mb-2'>Subscribe to Our Newsletter</h3>
            <p className='text-sm text-gray-400 mb-4'>Get the latest updates on new products and upcoming sales</p>
            <div className='flex gap-2'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'
              />
              <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium'>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm text-gray-400'>
              © 2025 Furniture Store. All rights reserved.
            </p>
            <div className='flex items-center gap-1 text-sm text-gray-400'>
              Made with <Heart className='w-4 h-4 text-red-500 fill-red-500 mx-1' /> by Your Team
            </div>
            <div className='flex gap-6 text-sm'>
              <a href="#" className='hover:text-blue-500 transition-colors'>Privacy Policy</a>
              <a href="#" className='hover:text-blue-500 transition-colors'>Terms of Service</a>
              <a href="#" className='hover:text-blue-500 transition-colors'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
