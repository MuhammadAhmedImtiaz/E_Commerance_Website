import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt}  from 'react-icons/fa';

const FooterLinks=[
    {
        title:"Home",
        link:"/#",
    },
    {
        title:"About",
        link:"/#about",
    },
    {
        title:"Contact",
        link:"/#contact",
    },
    {
        title:"Blog",
        link:"/#blog",
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5 ">
                {/* company details */}
                <div className='py-8 px-4'>
                    <a href="#" className='text-primary  font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                    Eshop</a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                    Premium electronics, seamless shopping. Your satisfaction, our priority.</p>
                    <p className='text-gray-400 m-4'>Made with 💖 by Ahmed Imtiaz </p>
                    <a href="https://www.linkedin.com/in/muhammad-ahmed-imtiaz-99206b292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'
                    target='_blank'>Visit LinkedIn</a>
                </div>
                
                {/* Footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>

                    
                    <h1 className='text-xl font-bold sm:text-left mb-3 '>Important Links</h1>
                    <ul className='space-y-3 '> 
                        {
                            FooterLinks.map((data,index)=>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300'>
                
                                        {data.title}
                                    </a>

                                </li>
                            ))
                        }
                    </ul> 
                    </div>
                    {/* second col links */}
                    <div className='py-8 px-4'>
                    <h1 className='text-xl font-bold sm:text-left mb-3 '>Quick Links</h1>
                    <ul className='space-y-3 '> 
                        {
                            FooterLinks.map((data,index)=>(
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300
                                   '>
                                        {data.title}
                                    </a>

                                </li>
                            ))
                        }
                    </ul> 
                    </div>
                    {/* Company Address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3 '>Address</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt/>
                            <p>+92 3012345678</p>

                            </div>
                            {/* social links */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer