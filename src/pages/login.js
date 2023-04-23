import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validator from 'validatorjs';

//images
import eye from '..//assets/icons/eye.svg'
import eyeSlash from '..//assets/icons/eyeslash.svg'
import notifications from '..//assets/icons/rnotifications.svg'
import hand from '..//assets/icons/wavinghand.svg'

const Login = () => {
    const [isOpen, setIsOpen] = useState('')
    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const loginUser = (e) => {
        e.preventDefault()
        const input = { email: 'required', password: 'required' }
        const validation = new Validator(data, input, { required: 'Type your user :attribute here' });


        if (validation.fails()) {
            setErrors(validation.errors.all());
            return;
        }

        if (validation.passes()) {
            setErrors('');

            //login the user
            //show success or error message depending on the validation response
        }
    }

    //controls notifications
    const notify = ''

    return (
        <>
            <div className='w-[100vw] h-[100vh] flex items-center login z-[1]'>
                <div className='w-[100%] h-[100%] flex justify-end z-[2] loginbanner bg-cover bg--no-repeat'>
                    <form className='w-[100%] md:w-[70%] lg:w-[40%] h-[100%] flex flex-col justify-center items-center bg-white bg-opacity-30 backdrop-blur-md drop-shadow-lg gap-6 ease-in-out duration-700' onSubmit={loginUser}>
                        {
                            notify &&
                            <div className='w-[100%] md:w-[70%] mx-auto p-4 rounded-lg flex flex-col gap-4 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg text-[var(--white)]'>
                                <p className='text-3xl text-[var(--red)] flex items-center justify-start gap-2'>
                                    <img src={notifications} alt='notification' loading='lazy' className='w-[20px]' />
                                    Notifications
                                </p>
                                <ul>
                                    <li>
                                        <Link to='/' className='text-lg flex items-center justify-startn gap-2'>
                                            <span className='h-[5px] w-[5px] bg-[var(--red)] rounded-full'></span>
                                            General work dates
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='text-lg flex items-center justify-startn gap-2'>
                                            <span className='h-[5px] w-[5px] bg-[var(--red)] rounded-full'></span>
                                            Safety rules
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/' className='text-lg flex items-center justify-startn gap-2'>
                                            <span className='h-[5px] w-[5px] bg-[var(--red)] rounded-full'></span>
                                            Security
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        }
                        <div className='w-[90%] md:w-[90%] lg:w-[85%] mx-auto p-4 rounded-lg flex flex-col gap-4 lg:bg-white lg:bg-opacity-20 lg:backdrop-blur-md lg:drop-shadow-lg'>
                            <div className='text-center'>
                                <h4 className='font-bold text-4xl flex items-center gap-4 w-[100%] justify-center'>
                                    Welcome !
                                    <img src={hand} alt='' loading='lazy' className='w-[50px] rotate-[-45deg]' onClick={e => setIsOpen(!isOpen)} />
                                </h4>
                                <p>Please sign in with your credentials</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-xl'>Username</label>
                                <input type='text' placeholder={`${errors.email ? errors.email : 'name@gmail.com'}`} name='email' onChange={handleInput} className={`placeholder:text-red border-[1px] ease-in-out duration-300 outline-none rounded-lg py-[14px] px-4 placeholder:${errors.password ? 'normal' : 'italic'} placeholder:text-sm w-[100%]`} />
                                {errors.username && <span className="text-base text-[var(--red)]">{errors.username[0]}</span>}
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-xl'>Password</label>
                                <div className='flex items-center justify-between relative'>
                                    <input type={isOpen ? 'text' : 'password'} name='password' onChange={handleInput} placeholder={`${errors.password ? errors.password : '*************'}`} className={`placeholder:text-[${errors.password ? 'var(--red)' : 'var(--green)'}] border-[1px] ease-in-out duration-300 outline-none rounded-lg py-[14px] px-4 placeholder:${errors.password ? 'normal' : 'italic'} placeholder:text-sm w-[100%]`} />
                                    <img src={isOpen ? eye : eyeSlash} alt='' loading='lazy' className='w-[20px] absolute right-3 cursor-pointer' onClick={e => setIsOpen(!isOpen)} />
                                </div>
                            </div>
                            <button className='rounded-lg py-2 px-3 text-xl cursor-pointer ease-in-out duration-300 bg-[var(--green)] text-[var(--white)] hover:shadow-2xl outline-none' type='submit'>Sign In</button>
                            <Link to='/' className='w-[100%] flex justify-center'>Forgot Password ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login