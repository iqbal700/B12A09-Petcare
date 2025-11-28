import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
 import { ToastContainer, toast } from 'react-toastify';

const ServiceDetails = () => {

    const { id } = useParams(); 
    const [services, setServices] = useState([]);
    const [booking, setBooking] = useState({ name: '', email: '' });
    
    useEffect(() => {
        fetch('/Data.json')
            .then(res => {  
               return res.json();
            })
            .then(data => {
                setServices(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const detailsBook = useMemo(() => {
        if (services.length === 0) {
            return null;
        }
        const newId = parseInt(id, 10); 
        return services.find(service => service.serviceId === newId);
    }, [id, services]); 

   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
       setBooking(prev => ({ ...prev, [name]: value }));
    };

   
    const handleSubmit = (e) => {
        e.preventDefault();
        setBooking({ name: '', email: '' });
         const notify = () => toast("Your Booking Successfully Done");
         notify();

    };

  
    if (!detailsBook) {
        return (
            <div className="text-center p-10 text-gray-600 bg-gray-50 rounded-xl m-10 shadow-lg max-w-xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-red-500">Service Not Found</h2>
                <p>The requested service ID ({id}) could not be located in the data source.</p>
            </div>
        );
    }

      const imageUrl = detailsBook.image 

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 mt-20 font-sans">
             <ToastContainer />
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="md:flex">
                    
                    <div className="md:w-3/5 p-6 md:p-10 border-r border-gray-100">
                        
                        <div className="rounded-xl overflow-hidden mb-8 shadow-xl border border-gray-100">
                            <img 
                                className='w-full h-80 object-cover object-center transition duration-500 ease-in-out hover:scale-[1.03] transform' 
                                src={imageUrl} 
                                alt={detailsBook.serviceName} 
                                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x600/fecaca/9d174d?text=Image+Missing"}}
                            />
                        </div>

                       
                        <h1 className='text-4xl font-extrabold text-gray-800 mb-4 border-b pb-3 border-pink-100'>
                            <span className='mr-3 text-3xl'>📦</span>
                            {detailsBook.serviceName}
                        </h1>
                        <p className='text-lg text-gray-600 mb-6 leading-relaxed'>
                            {detailsBook.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 border-t border-gray-100">
                         
                            <div className="flex items-center text-xl font-semibold text-yellow-700 bg-yellow-50 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-2 text-2xl">⭐</span>
                                {detailsBook.rating} 
                            </div>
                            
                            <div className="flex items-center text-2xl font-bold text-pink-600 bg-pink-100 px-5 py-2 rounded-full shadow-md">
                                <span className="mr-1">$</span>
                                {detailsBook.price}
                            </div>
                        </div>
                    </div>

                 
                    <div className="md:w-2/5 p-6 md:p-10 bg-pink-50 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">Book This Service</h2>
                    
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={booking.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                            </div>

                      
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                <div className="relative">
                                  
                                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2z"></path></svg>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={booking.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 border border-pink-200 rounded-lg focus:ring-pink-500 focus:border-pink-500 transition duration-150 shadow-sm"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <button
                            
                                type="submit"
                                className="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-lg text-lg font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 transform hover:scale-[1.01]"
                            >
                                <span className='mr-2 text-xl'> 🐾</span> Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;