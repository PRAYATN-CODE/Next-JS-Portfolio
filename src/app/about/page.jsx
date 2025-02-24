"use client"

import Brain from "@/components/brain"
import { motion, useInView, useScroll } from "framer-motion"
import { useRef } from "react"
const Aboutpage = () => {

    const containerRef = useRef()
    const { scrollYProgress } = useScroll({ container: containerRef })
    const skillRef = useRef();
    const isSkillRedInView = useInView(skillRef, { margin: '-100px' })
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' })

    return (
        <motion.div className='h-full'
            initial={{ y: "-200vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 1 }}
        >
            {/* container */}
            <div ref={containerRef} className='h-full overflow-scroll lg:flex'>
                {/* text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-28 lg:gap-36 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2'>
                    {/* biography container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl'>Biography</h1>
                        <p className='text-lg'>I’m a passionate Full-Stack Developer specializing in React.js, Node.js, and scalable web applications. I thrive on building modular architectures, real-time interactions, and seamless user experiences with clean, efficient code. Always eager to innovate and push boundaries.</p>
                        <span className='italic'>Let’s build something amazing! 🚀</span>
                        <div className='self-end'>
                            <svg
                                width="150"
                                height="40"
                                viewBox="0 0 579 150"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 148C34.17 125.17 70.2671 107.981 105.333 90.1667C158.162 63.329 211.576 39.7964 266.833 18.3889C279.729 13.393 292.713 8.72739 305.778 4.22222C306.067 4.12231 309.963 2.40761 309.556 2C308.573 1.0179 302.068 2.47752 301.222 2.61111C288.575 4.60796 276.08 7.17804 263.611 10.0556C251.082 12.947 238.554 15.7542 226.889 21.3333C224.675 22.3923 224.439 23.2909 227 24.2222C232.571 26.2479 237.861 29.4919 243 32.3333C257.815 40.5246 272.928 48.5104 287.111 57.7778C297.117 64.3155 311.895 75.3967 314.778 87.8889C315.485 90.9551 310.724 94.7953 308.667 96.1667C292.979 106.625 272.493 111.205 254.222 114.389C242.201 116.483 230.255 117.388 218.111 118.222C213.601 118.532 200.378 121.43 204.667 120C210.714 117.984 218.272 117.561 224.444 116.333C243.23 112.595 261.975 108.657 280.778 105C315.285 98.2885 350.047 94.1493 384.889 89.6667C402.089 87.4537 419.593 86 436.944 86C438.631 86 443.118 85.2516 439.5 86.0555C433.133 87.4705 426.634 94.0639 436.667 96C449.901 98.5541 464.429 97.8297 477.444 94.3889C485.437 92.2759 492.665 88.4947 500.389 86.0555C504.425 84.7809 495.215 85.4614 494.5 85.6111C492.532 86.023 486.753 88.1129 486.056 90.5555C483.945 97.9417 540.365 91.4421 546.333 91C555.514 90.3199 564.687 90 573.889 90C580.701 90 574.403 90.2656 570.611 90.6667C499.947 98.1408 428.129 100.628 357.111 101.333C313.8 101.763 270.482 100.268 227.222 98.3333C186.336 96.5045 145.136 95.3354 104.444 90.6667C78.3974 87.6782 52.7266 82.048 26.6667 79.2222C25.7324 79.1209 20.2838 79 24 79"
                                    stroke="black"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <div className=''>
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: '10px' }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                color={"#000000"}
                                fill={"none"}
                            >
                                <path
                                    d="M12 20L12 4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 6.99997 15 6.99997 15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>

                    </div>
                    {/* skill container */}
                    <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
                        <motion.h1
                            initial={{ x: '-300px' }}
                            animate={isSkillRedInView ? { x: '0px' } : {}}
                            transition={{ delay: 0.5 }}
                            className='font-bold text-2xl'>
                            Skills
                        </motion.h1>
                        {/* skill list */}
                        <motion.div
                            initial={{ x: '-900px' }}
                            animate={isSkillRedInView ? { x: '0px' } : {}}
                            transition={{ delay: 0.3 }}
                            className='flex gap-4 flex-wrap'>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>React JS</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Express JS</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Mongo DB</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>REST API</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Node JS</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Tailwind CSS</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>HTML&CSS</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Data Structure</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>JSON</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>VS Code</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>Responsive Design</div>
                            <div className='rounded-md p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>BootStrap</div>
                        </motion.div>
                        {/* scroll svg */}
                        <div className=''>
                            <motion.svg
                                initial={{ opacity: 0.2, y: 0 }}
                                animate={{ opacity: 1, y: '10px' }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                color={"#000000"}
                                fill={"none"}
                            >
                                <path
                                    d="M12 20L12 4"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M17 15C17 15 13.3175 20 11.9999 20C10.6823 20 6.99997 15 6.99997 15"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </motion.svg>
                        </div>
                    </div>
                    {/* experiences container */}
                    <div ref={experienceRef} className='flex flex-col gap-12 justify-center pb-48'>
                        <motion.h1
                            initial={{ x: '-600px' }}
                            animate={isExperienceRefInView ? { x: '0px' } : {}}
                            transition={{ delay: 0.2 }}
                            className='font-bold text-2xl'>Experiences</motion.h1>
                        {/* experiences list */}
                        <motion.div className=""
                            initial={{ x: '-300px' }}
                            animate={isExperienceRefInView ? { x: '0px' } : {}}
                        >
                            {/* experiences list item */}
                            <div className=" flex justify-start gap-12 h-48">
                                {/* left */}
                                <div className="w-full">
                                    <div className="bg-white p-3 font-semibold text-black rounded-b-lg rounded-s-lg ">Frontend Web Developer</div>
                                    <div className="p-3 text-sm italic">
                                        Worked on developing and optimizing user interfaces using React.js and modern frontend technologies.
                                    </div>
                                    <div className="p-3 text-red-300 text-sm font-semibold">
                                        15 Jan 2025-Present
                                    </div>
                                    <div className="px-3 py-1 bg-white text-sm w-fit">
                                        SHAMBHO.AI
                                    </div>
                                </div>
                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className=" w-1 h-full bg-gray-600 rounded-lg relative">
                                        {/* line circle */}
                                        <div className='absolute -left-2 w-5 h-5 rounded-full ring-2 ring-red-400 bg-white'></div>
                                    </div>
                                </div>
                                {/* right */}
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* svg container */}
                <div className='hidden lg:block sticky top-0 z-50 w-1/3 xl:w-1/2'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}

export default Aboutpage