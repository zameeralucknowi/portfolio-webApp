import React, { useState } from 'react'
import logo from '../assets/logo-z.png'
import {FaBars,FaGithub,FaLinkedin,FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';

function Navbar() {

    const [nav,setNav] = useState(false);

    const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#0a192f] text-gray-300' >
       
       {/* logo */}
        <div>
        <img src={logo}  className='cursor-pointer' alt="logo" style={{width:'50px'}}/>
        </div>

        {/* menu */}
        
            <ul className='hidden md:flex' >
                <li>
                    <Link to='home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li>
                <Link to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                <Link to='skills' smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                <Link to='work' smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li>
                <Link to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>
        

        {/* humburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer' >
             {nav?<FaTimes/>:<FaBars/>}
        </div>


        {/* mobile menu */}
          
            <ul className={nav?'absolute top-0 left-0 h-screen w-full bg-[#0a192f] flex flex-col justify-center items-center':'hidden'} >
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick} to='work' smooth={true} duration={500} >
                        Work
                    </Link>
                </li>
                <li className='py-6 text-4xl' >
                <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>



        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >

            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ' >
                    <a  target='blank' className='flex justify-between items-center w-full text-gray-300'
                     href="https://www.linkedin.com/in/zameer-a-lucknowi-385524222">
                    LinkedIn <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ' >
                    <a  target='blank' className='flex justify-between items-center w-full text-gray-300'
                     href="https://github.com/zameeralucknowi">
                    GitHub <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ' >
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="mailto:zameeralucknowi@gmail.com">
                    Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 ' >
                    <a className='flex justify-between items-center w-full text-gray-300'
                     href="/ZAMEER_SDE_3.1YOE_RESUME.pdf" download >
                   Download Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>


        </div>


    </div>
  )
}

export default Navbar