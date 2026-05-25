import { Link } from 'react-router-dom';
import { Briefcase, Camera, Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group inline-flex">
              <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Life<span className="text-primary-400">and</span>Style
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your Complete Digital & Business Service Partner. We provide premium professional services to elevate your brand.
            </p>
            <div className="flex space-x-4">
              {/* REPLACE WITH YOUR ACTUAL INSTAGRAM LINK */}
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 transition-all shadow-lg hover:shadow-primary-500/25">
                <Camera className="w-5 h-5" />
              </a>
              {/* REPLACE WITH YOUR ACTUAL WHATSAPP LINK */}
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/#services" className="hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><span className="hover:text-primary-400 transition-colors cursor-default">Accounting</span></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-default">ITR Filing</span></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-default">Graphic Designing</span></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-default">Website Development</span></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-default">Printing Services</span></li>
              <li><span className="hover:text-primary-400 transition-colors cursor-default">Digital Marketing</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL EMAIL */}
                <span>[YOUR_EMAIL]</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL PHONE NUMBER */}
                <span>[YOUR_PHONE_NUMBER]</span>
              </li>
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                {/* REPLACE WITH YOUR ACTUAL WHATSAPP NUMBER */}
                <span>[YOUR_WHATSAPP_NUMBER]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LifeandStyle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
