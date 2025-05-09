import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  const email = 'prajaktamondhe31@gmail.com';
  const phone = '+64 958 248 966';
  const socialLinks = {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
  };

  return (
    <div id='footer' className="border-t border-gray-700">
    <footer className="text-white px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-8">
        {/* Brand */}
        <div className="md:w-1/4">
          <h2 className="text-xl font-bold mb-3">
            <img className='w-[140px]' src="/logo2.png" alt="" />
          </h2>
          <p className="text-sm text-gray-300">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-300"
            >
              <FaFacebookF />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-300"
            >
              <FaInstagram />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-300"
            >
              <FaTwitter />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 p-2 rounded-full text-black transition-all duration-300 ease-in-out hover:scale-110 hover:bg-yellow-300"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

       <div className='flex gap-3 sm:gap-10 justify-between'>
         {/* Useful Links */}
         <div>
          <h3 className="text-lg font-semibold mb-2">Useful links</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">About us</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Events</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Blogs</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">FAQ</a></li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Main Menu</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Offers</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Menus</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition-all duration-300">Reservation</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm space-y-1 text-gray-300">
            <li><a href={`mailto:${email}`} className="hover:text-yellow-400 transition-all duration-300">{email}</a></li>
            <li><a href={`tel:${phone}`} className="hover:text-yellow-400 transition-all duration-300">{phone}</a></li>
            <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-all duration-300">Social media</a></li>
          </ul>
        </div>
       </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm pt-4">
        Copyright © 2025 Cafe Cosmos | All rights reserved
      </div>
    </footer>
    </div>
  );
};

export default Footer;
