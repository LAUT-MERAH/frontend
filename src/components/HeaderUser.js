// src/components/HeaderUser.js
import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import AuthContext from '../context/AuthContext';

const HeaderUser = () => {
  const { logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHeroPage = location.pathname === "/Hero";
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    logout();
    navigate('/Hero');
  };

  const handleNavClick = (sectionId) => {
    if (isHeroPage) {
      scroller.scrollTo(sectionId, { smooth: true, duration: 500 });
    } else {
      navigate("/Hero");
      setTimeout(() => {
        scroller.scrollTo(sectionId, { smooth: true, duration: 500 });
      }, 100);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-lg py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <img src="logo.png" alt="EcoTambak Logo" className="w-10 h-10 mr-2" />
          <div className="font-montserrat text-green-600 text-2xl font-semibold">
            Eco<span className="text-blue-600">Tambak</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <span onClick={() => handleNavClick("beranda")} className="hover:text-blue-500 cursor-pointer">
            Beranda
          </span>
          <span onClick={() => handleNavClick("tentangKami")} className="hover:text-blue-500 cursor-pointer">
            Tentang Kami
          </span>
          <span onClick={() => handleNavClick("produk")} className="hover:text-blue-500 cursor-pointer">
            Produk
          </span>
          <Link to="/contact" className="hover:text-blue-500">
            Kontak
          </Link>
        </nav>

        {/* User Icon and Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="text-gray-700 text-lg" />
          </button>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-lg overflow-hidden z-50"
            >
              <Link
                to="/dashboard"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
