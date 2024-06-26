import React, { useState, useEffect } from 'react';
import framePic from '../assets/images/frame2.png';
import person from '../assets/images/plumbing.png';
import person2 from '../assets/images/woodworks.png';
import contentPic from '../assets/images/carpentry.png';
import verifyImage from '../assets/images/verifyimage.png';
import artisanPic from '../assets/images/artisan.png';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { UserPlusIcon, CreditCardIcon, PaperAirplaneIcon, CurrencyDollarIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

const HomePage = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            // Check if the screen width is less than or equal to a certain value (e.g., 768 for mobile)
            setIsMobile(window.innerWidth <= 768);
        };

        // Add event listener to handle window resize
        window.addEventListener('resize', handleResize);

        // Initial call to handleResize to set the initial state
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className="flex flex-col items-center justify-center py-40 px-4"> {/* Reduced padding for mobile */}
            {/* Header */}
            <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center">
                Discover Unique <span className="text-violet-500 italic">Artistic</span> Services
            </h1>

            <p className="text-sm md:text-base mb-6 text-center">
                Connect with Talents Artisans and Find the Perfect Service for Your Needs
            </p>

            {/* Search Bar */}
            <div className="flex flex-row md:flex-row md:items-center mb-3"> {/* Adjusted layout for mobile */}
                <input
                    type="text"
                    placeholder="Search For Any Service..."
                    className="flex-1 border border-gray-300 rounded-[10px] px-2 py-2 mb-2 md:mb-0 md:mr-3 w-[250px] md:w-[400px] focus:outline-none"
                />
                <button className="md:ml-0 ml-2 bg-green-500 rounded-[10px] text-white px-4 py-2 hover:bg-violet-600 focus:outline-none">Search</button>
            </div>

            {/* Categories Container */}
            <div className="rounded p-4 w-full flex flex-col items-center backgroundImage"> {/* Centered content in Categories Container */}
                <h2 className="font-semibold mb-3 md:text-lg text-[15px]">
                    Popular:
                </h2>
                <ul className="flex flex-wrap justify-center"> {/* Centered tags horizontally */}
                    <li className="bg-gray-300 px-2 py-1 mr-2 mb-2 rounded-[10px] cursor-pointer hover:bg-gray-200 text-xs md:text-base">Plumbering</li> {/* Adjusted size for mobile */}
                    <li className="bg-gray-300 px-2 py-1 mr-2 mb-2 rounded-[10px] cursor-pointer hover:bg-gray-200 text-xs md:text-base">Electrical Engineering</li> {/* Adjusted size for mobile */}
                    <li className="bg-gray-300 px-2 py-1 mr-2 mb-2 rounded-[10px] cursor-pointer hover:bg-gray-200 text-xs md:text-base">Building And Construction</li> {/* Adjusted size for mobile */}
                </ul>
            </div>
            <img src={framePic} alt='frame-background' className='' />

            {/*Popular Services Header*/}
            <div className="rounded p-4 w-full flex flex-col items-center"> {/* Centered content in Categories Container */}
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-3">
                    <div className="mb-2 md:mb-0 md:mr-3">
                        <h1 className="font-bold text-[15px] md:text-[25px]">Explore Our Popular Services</h1>
                        <p className="text-sm">Below are recommended Services for you</p>
                    </div>
                    <a href="#top" className="text-violet-600 flex items-center">
                        See more
                        <ArrowRightIcon className='h-5 w-5 text-violet-600 ml-3' />
                    </a>
                </div>
            </div>

            {/*Popular Services Contents*/}
            <div className="flex flex-wrap justify-center">
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2">John Doe</h2>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">Plumbing</p>
                            <p className="text-sm">GHc 50</p>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-violet-600">Book Now</button>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2">John Doe</h2>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">Plumbing</p>
                            <p className="text-sm">GHc 50</p>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-violet-600">Book Now</button>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2">John Doe</h2>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">Plumbing</p>
                            <p className="text-sm">GHc 50</p>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-violet-600">Book Now</button>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2">John Doe</h2>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">Plumbing</p>
                            <p className="text-sm">GHc 50</p>
                        </div>
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-violet-600">Book Now</button>
                    </div>
                </div>
            </div>


            {/*How it works*/}
            <div className="flex flex-col md:flex-row items-center">
                <img className="w-full md:w-2/3 h-auto md:mr-4 mb-4 md:mb-0" src={contentPic} alt="content" />
                <div className="text-center md:text-left md:w-2/3 ml-10 flex flex-col md:flex-row items-center">
                    <div>
                        <h2 className="font-bold text-[30px] mb-1">We Bring <span className="text-violet-500 italic">Creativity</span> to your doorstep</h2>
                        <p className="text-sm mb-8">We are on a mission to connect artisans to their clients all over the world</p>

                        <h2 className="font-semibold text-lg mb-2">How does Tilly&E Work ?</h2>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><UserPlusIcon className='h-5 w-5 ml-5 mr-5' /> Provide your details to sign up.<br></br>Login if you already have an account.</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CreditCardIcon className='h-5 w-5 ml-5 mr-5' />Provide your payment method.<br></br>or details</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><PaperAirplaneIcon className='h-5 w-5 ml-5 mr-5' />Browse and choose an artisan you'd like to<br></br>perform your task for you</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CurrencyDollarIcon className='h-5 w-5 ml-5 mr-5' />Bargain the cost and workmanship or the<br></br>service and make payment.</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CheckBadgeIcon className='h-5 w-5 ml-5 mr-5' />Verify if the work is fully completed by the.<br></br>artisan.</p>

                    </div>
                    <img className={`h-300 w-90 ${isMobile ? 'hidden' : 'block'}`} src={verifyImage} alt="content2" />

                </div>

            </div>



            {/*Category Header*/}
            <div className="rounded p-4 w-full flex flex-col items-center"> {/* Centered content in Categories Container */}
                <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-3">
                    <div className="mb-2 md:mb-0 md:mr-3">
                        <h1 className="font-bold text-[15px] md:text-[25px]">Explore Our Categories</h1>
                        <p className="text-sm">Below are recommended Categories for you</p>
                    </div>
                    <a href="#top" className="text-violet-600 flex items-center">
                        See more
                        <ArrowRightIcon className='h-5 w-5 text-violet-600 ml-3' />
                    </a>
                </div>
            </div>

            {/*Category Contents*/}
            <div className="flex flex-wrap justify-center">
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person2} alt="Person" />
                    <div className="p-4">
                        <h2 className="flex font-semibold text-lg mb-2 flex">Building And Construction</h2>
                        <div className="flex justify-between mb-2">
                            <p className="font-semibold text-gray-700 mb-1">18 Services</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">200+ Personnel</p>
                            <a href='#top' className='text-sm text-green-500 hover:text-violet-600'>Click to see more</a>
                        </div>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person2} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2 flex">Masonry</h2>
                        <div className="flex justify-between mb-2">
                            <p className="font-semibold text-gray-700 mb-1">18 Services</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">200+ Personnel</p>
                            <a href='#top' className='text-sm text-green-500 hover:text-violet-600'>Click to see more</a>
                        </div>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person2} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2 flex">Electrical Engineering</h2>
                        <div className="flex justify-between mb-2">
                            <p className="font-semibold text-gray-700 mb-1">18 Services</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">200+ Personnel</p>
                            <a href='#top' className='text-sm text-green-500 hover:text-violet-600'>Click to see more</a>
                        </div>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-white max-w-md mx-2 mb-4">
                    <img className="w-full h-auto" src={person2} alt="Person" />
                    <div className="p-4">
                        <h2 className="font-semibold text-lg mb-2 flex">Plumbing</h2>
                        <div className="flex justify-between mb-2">
                            <p className="font-semibold text-gray-700 mb-1">18 Services</p>
                        </div>                        <div className="flex justify-between mb-2">
                            <p className="text-sm text-gray-700 font-semibold">200+ Personnel</p>
                            <a href='#top' className='text-sm text-green-500 hover:text-violet-600'>Click to see more</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Start Earning*/}
            <div className="flex flex-col md:flex-row items-center">
                <img className="w-full md:w-2/3 h-auto md:mr-4 mb-4 md:mb-0" src={artisanPic} alt="content" />
                <div className="text-center md:text-left md:w-2/3 ml-10 flex flex-col md:flex-row items-center">
                    <div>
                        <h2 className="font-bold text-[30px] mb-1">Start Earning as an <span className="text-violet-500 italic">Artisan</span> today</h2>
                        <p className="text-sm mb-8">We are on a mission to connect artisans to their clients all over the world</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><UserPlusIcon className='h-5 w-5 ml-5 mr-5' /> Provide your details to sign up.<br></br>Login if you already have an account.</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CreditCardIcon className='h-5 w-5 ml-5 mr-5' />Provide your payment method.<br></br>or details</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><PaperAirplaneIcon className='h-5 w-5 ml-5 mr-5' />Browse and Select task and services you can<br></br>render based on your location</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CurrencyDollarIcon className='h-5 w-5 ml-5 mr-5' />Bargain the cost and workmanship or the<br></br>service and recieve 30% payment.</p>

                        <p className="text-sm font-semibold mb-4 text-gray-700 flex"><CheckBadgeIcon className='h-5 w-5 ml-5 mr-5' />Get fully paid immediately after the work and<br></br>audition is completed.</p>

                    </div>
                    <img className={`h-300 w-90 ${isMobile ? 'hidden' : 'block'}`} src={verifyImage} alt="content2" />

                </div>

            </div>

        </div>
    );
}

export default HomePage;
