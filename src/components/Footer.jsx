import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8 transition-colors duration-300 dark:bg-black dark:border-white/10 bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6 group inline-flex">
              <div className="flex items-center justify-center w-8 h-8 bg-primary-500 rounded-md shadow-md transition-all group-hover:shadow-lg">
                <span className="text-white font-black text-sm tracking-widest">QS</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Quadrant Solutions
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 transition-colors duration-300">
              Your Complete Digital & Business Service Partner. We provide premium professional services to elevate your brand.
            </p>
            <div className="flex space-x-4">
              {/* REPLACE WITH YOUR ACTUAL INSTAGRAM LINK */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-primary-500 dark:hover:bg-red-600 hover:bg-green-600 transition-all shadow-sm hover:shadow-md">
                <Camera className="w-5 h-5" />
              </a>
              {/* REPLACE WITH YOUR ACTUAL WHATSAPP LINK */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-green-500 dark:hover:bg-green-600 transition-all shadow-sm hover:shadow-md">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors duration-300">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><Link to="/" className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors duration-300">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">Accounting</span></li>
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">ITR Filing</span></li>
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">Graphic Designing</span></li>
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">Website Development</span></li>
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">Printing Services</span></li>
              <li><span className="hover:text-primary-500 dark:hover:text-red-500 hover:text-green-600 transition-colors cursor-default">Digital Marketing</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 transition-colors duration-300">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 dark:text-yellow-500 text-pink-500 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL EMAIL */}
                <span>[YOUR_EMAIL]</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 dark:text-yellow-500 text-pink-500 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL PHONE NUMBER */}
                <span>[YOUR_PHONE_NUMBER]</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-500 dark:text-green-400 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER */}
                <span>[YOUR_WHATSAPP_NUMBER]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 text-center transition-colors duration-300">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Quadrant Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
