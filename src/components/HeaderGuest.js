import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const HeaderGuest = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHeroPage = location.pathname === "/Hero"; 

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

    return (
        <header className="bg-white shadow-lg py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo-wrapper">
                    <img src="logo.png" alt="EcoTambak Logo" className="logo mr-2" />
                    <div className="font-montserrat text-green-600 text-2xl font-semibold">
                        Eco<span className="text-blue-600">Tambak</span>
                    </div>
                </div>

                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <span onClick={() => handleNavClick("beranda")} className="hover:text-blue-500 cursor-pointer">Beranda</span>
                    <span onClick={() => handleNavClick("tentangKami")} className="hover:text-blue-500 cursor-pointer">Tentang Kami</span>
                    <span onClick={() => handleNavClick("produk")} className="hover:text-blue-500 cursor-pointer">Produk</span>
                    <Link to="/kontak" className="hover:text-blue-500">Kontak</Link>
                </nav>

                <Link to="/login" className="border border-gray-400 px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-gray-200">
                    Login
                </Link>
            </div>
        </header>
    );
};

export default HeaderGuest;
