import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//images
import eye from '..//assets/icons/eye.svg'
import eyeSlash from '..//assets/icons/eyeslash.svg'

const Login = () => {
    const [isOpen, setIsOpen] = useState('')

    return (
        <>
            <div className='w-[100vw] h-[100vh] flex items-center login z-[1]'>
                <div className='w-[100%] h-[100%] flex justify-end z-[2] loginbanner bg-cover bg--no-repeat'>
                    <form className='w-[100%] md:w-[40%] h-[100%] flex flex-col justify-center items-center bg-white bg-opacity-30 backdrop-blur-md drop-shadow-lg'>
                        <div className='w-[100%] md:w-[70%] mx-auto p-4 rounded-lg flex flex-col gap-4'>
                            <div className='text-center'>
                                <h4 className='font-bold text-4xl'>Welcome !</h4>
                                <p>Please sign in with your credentials</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-xl'>Username</label>
                                <input type='text' placeholder='name@gmail.com' className='border-[1px] ease-in-out duration-300 outline-none rounded-lg py-[14px] px-4 placeholder:italic placeholder:text-sm placeholder:text-[var(--off-white)] w-[100%]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-xl'>Password</label>
                                <div className='flex items-center justify-between relative'>
                                    <input type={isOpen ? 'text' : 'password'} placeholder='**************' className='border-[1px] ease-in-out duration-300 outline-none rounded-lg py-[14px] px-4 placeholder:italic placeholder:text-sm placeholder:text-[var(--off-white)] w-[100%]' />
                                    <img src={isOpen ? eye : eyeSlash} alt='' loading='lazy' className='w-[20px] absolute right-3 cursor-pointer' onClick={e => setIsOpen(!isOpen)} />
                                </div>
                            </div>
                            <button className='rounded-lg py-2 px-3 text-xl cursor-pointer ease-in-out duration-300 bg-[var(--green)] text-[var(--white)] '>Sign In</button>
                            <Link to='/' className='w-[100%] flex justify-center'>Forgot Password ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login