import React from 'react';
import logoS from '../../assets/images/cmunu.png';
import linkedinIcon from '../../assets/images/icons8-linkedin-96.png';
import instagramIcon from '../../assets/images/instagram.png';
import facebookIcon from '../../assets/images/facebook.png';

const Footer = () => {
    return (
        <div className="">
            <footer className="bg-gray-400 text-black p-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="flex-1 mb-6 md:mb-0">
                        <h3 className="text-lg mb-2">GUMUNU LIMITED</h3>
                        <img src={logoS} alt="Logo" className="w-24" />
                    </div>
                    <div className="flex-1 mb-6 md:mb-0">
                        <h3 className="text-lg mb-2">CONTACT US</h3>
                        <h1 className="mb-1">ADDRESS</h1>
                        <p className="mb-2">Plot 120/12, Bosun Adekoya Street,</p>
                        <h1 className="mb-1">PHONE</h1>
                        <p className="mb-2">+2349085450</p>
                        <h1 className="mb-1">EMAIL</h1>
                        <p className="mb-2">gunmu33@gmail.com</p>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg mb-2">SERVICES</h3>
                        <p className="mb-1">Engineering</p>
                        <p className="mb-1">Procurement</p>
                        <p className="mb-1">3D scanning</p>
                        <p className="mb-1">Inspection services</p>
                        <p className="mb-1">Technical manpower supply</p>
                    </div>
                </div>
                <div className="container mx-auto mt-6 flex flex-col items-center">
                    <div className="flex space-x-4 mb-4">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                        <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                        <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                    </div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} GUMUNU LIMITED. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
