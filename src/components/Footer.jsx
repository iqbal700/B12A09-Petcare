import React from 'react';
import { PawPrint, Heart, Mail, MapPin, Twitter, Facebook, Instagram, ClipboardList, BookOpen, Lightbulb } from 'lucide-react';


const PetCareFooter = () => {
    
   
    const servicesLinks = [
        { name: 'Grooming', icon: ClipboardList },
        { name: 'Training', icon: BookOpen },
        { name: 'Wellness Check', icon: Heart },
        { name: 'Emergency Care', icon: Lightbulb }
    ];

    const companyLinks = [
        { name: 'Our Story', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Center', href: '#' }
    ];

    const legalLinks = [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Cookie Policy', href: '#' }
    ];

    return (

        <footer className="bg-linear-to-r from-pink-50 to-rose-50 text-gray-700 mt-16 shadow-inner border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
           
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    
                 
                    <div className="col-span-2 md:col-span-1 flex flex-col items-start space-y-4">
                        <div className="flex items-center text-3xl font-bold text-pink-500">
                            <PawPrint className="w-8 h-8 mr-2 text-pink-500" />
                             Petpaws
                        </div>
                        <p className="text-sm text-gray-500 max-w-[200px]">
                            Your trusted partner in pet wellness and happiness.
                        </p>
                        <div className="flex space-x-4">
                          
                            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition duration-150"><Facebook className="w-6 h-6" /></a>
                            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400 transition duration-150"><Twitter className="w-6 h-6" /></a>
                            <a href="#" aria-label="Instagram" className="text-pink-500 hover:text-pink-700 transition duration-150"><Instagram className="w-6 h-6" /></a>
                        </div>
                    </div>

                
                    <nav className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-800 border-b-2 border-pink-300 pb-1 inline-block">Our Services</h6>
                        {servicesLinks.map(link => (
                            <a 
                                key={link.name}
                                href="#" 
                                className="flex items-center text-sm link link-hover text-gray-600 hover:text-pink-600 transition duration-150"
                            >
                                <link.icon className="w-4 h-4 mr-2 text-pink-500" />
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <nav className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-800 border-b-2 border-pink-300 pb-1 inline-block">About Us</h6>
                        {companyLinks.map(link => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className="block text-sm link link-hover text-gray-600 hover:text-pink-600 transition duration-150"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <nav className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-800 border-b-2 border-pink-300 pb-1 inline-block">Legal</h6>
                        {legalLinks.map(link => (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className="block text-sm link link-hover text-gray-600 hover:text-pink-600 transition duration-150"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    
                    <nav className="space-y-4">
                        <h6 className="text-lg font-semibold text-gray-800 border-b-2 border-pink-300 pb-1 inline-block">Get In Touch</h6>
                        <p className="flex items-start text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 mt-1 text-pink-500 flex-shrink-0" />
                            123 Paw Lane, Petville, CA 90210
                        </p>
                        <p className="flex items-center text-sm text-gray-600">
                            <Mail className="w-4 h-4 mr-2 text-pink-500" />
                            support@petpulse.com
                        </p>
                    </nav>
                </div>
                

                <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} PetPaws. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default PetCareFooter;