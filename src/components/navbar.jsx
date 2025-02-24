"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
]

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(0, 0, 0)"
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1,
      backgroundColor: "rgb(0, 0, 0)"
    },
    opened: {
      opacity: 0,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
      backgroundColor: "rgb(0, 0, 0)"
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)"
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    }
  }

  return (
    <>
      <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
        <div className=' hidden md:flex gap-4 w-1/3'>
          {links.map(link => (
            <NavLink link={link} key={link.title} />
          ))}
        </div>
        <div className='md:hidden lg:flex items-center justify-center w-1/3'>
          <Link href='/' className='text-sm font-semibold bg-black rounded-md p-1 flex items-center justify-center w-fit'>
            <span className='text-white mr-1'>Prayatn</span>
            <span className='w-11 h-8 rounded bg-white text-black flex items-center justify-center'>.Dev</span>
          </Link>
        </div>
        <div className='hidden md:flex gap-8 justify-end w-1/3'>
          <Link href="https://github.com/PRAYATN-CODE">
            <Image src='/github.png' alt='' width={24} height={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/prayatn-soni-bb512b279/">
            <Image src='/linkedin.png' alt='' width={24} height={24} />
          </Link>
        </div>
        {/* responsive menu */}
        <div className='md:hidden'>
          <button className='flex flex-col w-10 h-8 justify-between z-50 relative'
            onClick={() => setOpen(!open)}
          >
            <motion.div variants={topVariants}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded origin-left`}>

            </motion.div>
            <motion.div variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 rounded origin-left`}>

            </motion.div>
            <motion.div variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded origin-left`}>

            </motion.div>
          </button>
          {/* MENU ITEMS */}
          {open && (
            <motion.div variants={listVariants} initial='closed' animate='opened' className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-3xl z-40'>
              {links.map(link => (
                <motion.div variants={listItemVariants} className='' key={link.url}>
                  <Link href={link.url} className='px-2 py-1 hover:bg-gray-300'>
                    {link.title}
                  </Link>
                </motion.div>

              ))}
            </motion.div>)}
        </div>
      </div>
    </>
  )
}

export default Navbar