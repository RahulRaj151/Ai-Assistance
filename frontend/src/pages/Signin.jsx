import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import bg from '../assets/miku.png';

function Signin(){
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage: `url(${bg})`}}>
            <form className='w-[90%] h-[600px] max-w-[500px] bg-[rgba(0,0,0,0.38)] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'>
                <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Login to <span className='text-blue-400'>Virtual Assistant</span></h1>
                <input type="email" placeholder='Enter your Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 px-[20px] py-[10px] rounded-full text-[18px]'/>
                <div className='w-full relative'>
                    <input type={showPassword ? "text" : "password"} placeholder='Enter your Password' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 pl-[20px] pr-[60px] py-[10px] rounded-full text-[18px]'/>
                    <div className='absolute right-[15px] top-[50%] transform -translate-y-1/2 cursor-pointer text-gray-300 hover:text-white' onClick={togglePassword}>
                        {showPassword ? <IoEyeSharp size={24} /> : <FaEyeSlash size={24} />}
                    </div>
                </div>
                <button type="submit" className='w-full h-[60px] bg-blue-500 text-white rounded-full text-[18px] font-semibold hover:bg-blue-600'>Login</button>
                <p className='text-white text-[16px]'>Don't have an account? <a href="/signup" className='text-blue-400 hover:underline'>Sign Up</a></p>
            </form>
        </div>
    )
}

export default Signin;