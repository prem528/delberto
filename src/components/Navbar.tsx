import React from 'react'

const NavBar: React.FC = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
     <nav className="flex justify-between items-center py-4 px-6 bg-[#4C35DE] text-white ">
        <button className="text-xl font-bold">Delberto</button>
        <ul  className="flex space-x-6">
           <li><a href="#" className="hover:text-gray-300">Products</a></li>
           <li><a href="#" className="hover:text-gray-300">Resources</a></li>
           <li><a href="#" className="hover:text-gray-300">Tools</a></li>
        </ul>
        <div className='flex space-x-4'>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  
            focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign In</button>
            <button className='bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded'>Start for free</button>
        </div>
     </nav>
     </div>
  )
}

export default NavBar
