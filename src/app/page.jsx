"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const Homepage = () => {
  return (
    <>
      <motion.div className='h-full'
        initial={{ y: "-200vh" }}
        animate={{ y: "0vh" }}
        transition={{ duration: 1 }}
      >
        <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
          {/* imagecontiainer */}
          <div className='h-1/2 lg:h-full lg:w-1/2 relative'>
            <Image src='https://iili.io/3H45zkG.md.png' alt='hero' fill className='object-contain' />
          </div>
          {/* text container */}
          <div className='h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center'>
            <h1 className='text-xl md:text-5xl font-bold'>Full-Stack Developer | Scalable Chat & Real-Time Web Apps | React & Node.js</h1>
            <p className='md:text-xl'>
              Passionate about building high-performance, modular, and real-time web applications. Skilled in **React.js, Node.js, Redux**, and **embeddable frontend solutions**, with a focus on clean code and seamless user experiences. 🚀
            </p>
            {/* button */}
            <div className='w-full flex gap-4'>
              <button className='p-4 rounded-lg ring-1 ring-black bg-black text-white'>
                <Link href='/portfolio'>
                  View My Work
                </Link>
              </button>
              <button className='p-4 rounded-lg ring-1 ring-black'>
                <Link href='/contact'>
                  Contact Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <Toaster position="top-center" />
    </>
  )
};

export default Homepage;
