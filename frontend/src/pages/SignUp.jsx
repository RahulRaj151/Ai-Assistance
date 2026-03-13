import React from 'react';

function SignUp(){
    return(
        <div 
            className='w-full h-screen flex justify-center items-center' 
            style={{
                backgroundImage: `url('/src/assets/miku.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <form className='w-[90%] h-[600px] max-w-[500px] bg-black/80 backdrop-blur-md p-8 rounded-lg flex flex-col justify-center shadow-2xl'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>Sign Up</h2>
                <input type='text' placeholder='Username' className='mb-4 p-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <input type='email' placeholder='Email' className='mb-4 p-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <input type='password' placeholder='Password' className='mb-6 p-3 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <button type='submit' className='bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all'>Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;
