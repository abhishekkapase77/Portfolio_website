import React from 'react'
import pic from '../../public/photo.avif'

import { ImFacebook2 } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";

function Home() {
  return (
  <>
  <div name='home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20  '>
    <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a </h1>
            {/*<span className='text-red-700 font-bold'>Developer</span>*/}
            <ReactTyped className='text-red-700 font-bold'
          
          strings={["Developer","Programmer","coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div><br></br>
        <p className='text-sm md:text-md text-justify'>Hi, Abhishek, a passionate and enthusiastic developer who loves building creative and functional web applications. I enjoy learning new technologies and applying them to solve real-world problems.</p>
        
        <br></br>
        {/* social icons*/}
      <div className='flex flex-col items-center md:flex-row space-y-6 md:space-y-0 justify-between'>
          <div className='space-y-2'>
        <h1 className='font-bold text-center'>Available on</h1>
        <ul className='flex space-x-5'>
           <li> <a href="https://www.instagram.com/" target="_blank">
            <FaInstagramSquare className='text-2xl cursor-pointer'/>
            </a>
            </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin className="text-2xl cursor-pointer" />
            </a>
            </li>
            <li>
            <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube className="text-2xl cursor-pointer" />
            </a>
            </li>
            <li>
            <a href="https://t.me/" target="_blank">
                <FaTelegram className="text-2xl cursor-pointer" />
            </a>
            </li>
        </ul>
        </div>

        <div className='space-y-2'>
            <h1 className='font-bold'>Currently working on</h1>
        <div className='flex space-x-5'>
           <SiMongodb  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
           <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
        </div>
        </div>
      </div>
        </div>
        <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 order-1 mt-8'>
        <img src={pic} className='rounded-full md:h-450 md:w-450' />
        </div>
    </div>
  </div>
  
  <hr></hr>
  </>

  )
}

export default Home