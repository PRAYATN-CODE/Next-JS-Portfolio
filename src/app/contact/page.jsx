"use client"

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contactpage = () => {

    const text = "Say Hello"
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        setError(false)
        setSuccess(false)
        e.preventDefault();

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                    form.current.reset();
                    toast.success('Mail sent successfully');
                    setTimeout(() => {
                        setSuccess(false);
                    }, 3000);
                },
                (error) => {
                    setError(true);
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send the mail');
                    setTimeout(() => {
                        setError(false);
                    }, 3000);
                }
            );

    };

    return (
        <>
            <motion.div className='h-full'
                initial={{ y: "-200vh" }}
                animate={{ y: "0vh" }}
                transition={{ duration: 1 }}
            >
                <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                    {/* text container */}
                    <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                        <div>
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            😊
                        </div>
                    </div>
                    {/* form container */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="h-1/2 lg:h-full lg:w-1/2 bg-red-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-20"
                    >
                        <span> Dear Prayatn Soni</span>
                        <textarea name="user_message" rows={5} id="" className="bg-transparent border-b-2 border-black outline-none resize-none"></textarea>
                        <span>My mail address is:</span>
                        <input name="user_email" type="text" className="bg-transparent border-b-2 border-black outline-none" />
                        <span>Regards</span>
                        <button className="bg-purple-200 rounded-md font-semibold text-gray-600 p-4">Send</button>

                        {success && (
                            <span className="text-green-600 font-semibold">
                                Your message has been sent successfully!
                            </span>
                        )}
                        {error && (
                            <span className="text-red-600 font-semibold">
                                Something went wrong!
                            </span>
                        )}
                    </form>
                </div>
            </motion.div>
            <Toaster position="top-center" />
        </>
    )
}

export default Contactpage