"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        img: "https://iili.io/3HUXya2.md.png",
        title: "Ai-ChatConnect-for-CS-Student",
        desc: "Developed a full-stack AI-powered chat and coding app with real-time messaging, live code execution in Python/JS, and smart debugging. Features secure authentication and dynamic room management.",
        link: "https://ai-chat-connect-prayatn-code.vercel.app/"
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        img: "https://iili.io/3HUwhYl.md.png",
        title: "I-NoteBook",
        desc: "Built a full-stack MERN app for managing personal notes with JWT authentication, enabling users to add, edit, and delete notes. Features a responsive React frontend and scalable Node.js backend.",
        link: "https://ornate-madeleine-4b5ac0.netlify.app/login"
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        img: "https://iili.io/3HUOequ.md.png",
        title: "News Web Application",
        desc: "Created a dynamic news web app with real-time updates and category filters (Sports, Business, Entertainment). Offers a responsive, user-friendly interface with live news API integration.",
        link: "https://github.com/PRAYATN-CODE/News-App"
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        img: "https://iili.io/3HUvpmQ.md.png",
        title: "Text Analyzer",
        desc: "Developed a React-based text analyzer and translator that offers text insights, styling, and multilingual translation. Built with Bootstrap for a responsive, intuitive UI.",
        link: "https://github.com/PRAYATN-CODE/Text-Analyser"
    }
]

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer-React JS, Next JS
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;