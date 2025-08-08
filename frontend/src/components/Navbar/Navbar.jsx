import React from 'react'
import {IoMdSearch} from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';
const MenuLinks=[
    {
        id:1,
        name:'Home',
        link:'/#'

    },
    {
        id:2,
        name:'Shop',
        link:'/#Shop'

    },
    {
        id:1,
        name:'About',
        link:'/#about'

    },
    {
        id:1,
        name:'Blogs',
        link:'/#blogs'

    }

]
const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white decoration-200 relative z-40'>
        <div className='py-4'>
            <div className="container flex justify-between items-center">
                {/* Logo and Link Section */}
                <div className='flex items-center gap-4' >
                    <a href="#" className='text-primary  text-red-500 font-semibold tracking-widest text-2xl
                    uppercase sm:text-3xl'>
                        Eshop
                    </a>
                    {/* Menu Items */}
                    
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {
                                    MenuLinks.map((data,index)=>
                                    <li key={index}>
                                        <a className='inline-block px-4 font-semibold text-gray-500 
                                        hover:text-black dark:hover:text-white duration-200'
                                        href={data.link}>{data.name}</a>
                                    </li>)

                                   
                                }
                            </ul>

                        </div>

                </div>
                {/* Navbar Right Section */}
                <div className='flex justify-between items-center gap-4
                '>
                    {/* Search Bar Section */}
                    <div className='relative group-hidden sm:block'>
                        <input type="text" placeholder='Search'className='search-bar' />
                        <IoMdSearch className='text-xl text-gray-600
                        group-hover:text-red-500
                         dark:text-gray-400
                        absolute top-1/2-translate-y-1/2 right-3 duration-200'/>
                    </div>
                    {/* order-button section */}
                    <button className='relative p-3'>
                      <FaShoppingCart className='text-xl text-gray-800 dark:text-gray-400'/>
                      <div className='w-4 bg-red-500 text-white rounded-full absolute top-0 right-0
                      flex items-center justify-center text-xs '>
                        4
                      </div>
                    </button>
                    


                     {/* Dark Mode Section */}
                     <div>
                        <DarkMode />
                     </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar