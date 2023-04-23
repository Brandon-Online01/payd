import { useState } from "react"
import { Link } from "react-router-dom"

//images
import user from '../../assets/icons/user.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import wallet from '../../assets/icons/wallet.svg'
import notifications from '../../assets/icons/notifications.svg'
import support from '../../assets/icons/shield.svg'
import logout from '../../assets/icons/logout.svg'
import menu from '../..//assets/icons/menu.svg'
import times from '../..//assets/icons/times.svg'
import gear from '../..//assets/icons/gear.svg'

const MobileNavigation = () => {
    const [isOpen, setIsOpen] = useState('')

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="relative w-[100%] flex flex-col gap-4">
                <div className="flex items-center justify-between w-[100%]">
                    <Link to='/' className="outline-none">

                    </Link>
                    <div className="w-[100%] flex items-center gap-4">
                        <img src={user} loading='lazy' alt='icon' className="max-w-[50px] outline-none ease-in-out duration-300 border-[1px] rounded-full p-2" />
                        <div className="flex flex-col gap-0">
                            <span className="text-base font-bold">Brandon Nkawu</span>
                            <span className="text-sm mt-[-0.3rem]">Developer</span>
                        </div>
                    </div>
                    <img src={isOpen ? times : menu} loading='lazy' alt='icon' className="max-w-[40px] outline-none hover:scale-110 ease-in-out duration-300 popin" onClick={openMenu} />
                </div>
                {
                    isOpen && (
                        <div className="w-[100%] min-h-[75vh] h-[100%] pt-8 pb-6 px-4 border-[1px] rounded-md flex flex-col items-start justify-between bg-[var(--green)] z-[2] popin">
                            <div className="flex flex-col gap-6 justify-between w-[100%]">
                                <div className="flex flex-col items-start gap-6 text-[var(--white)] flex-wrap w-[100%]">
                                    <Link to='/' className='flex justify-start items-center gap-2'>
                                        <img src={dashboard} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                        <span className="text-[var(--white)] text-sm">Dashboard</span>
                                    </Link>
                                    <Link to='/wallet' className='flex justify-start items-center gap-2'>
                                        <img src={wallet} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                        <span className="text-[var(--white)] text-sm">Wallet</span>
                                    </Link>
                                    <Link to='/notifications' className='flex justify-start items-center gap-2'>
                                        <img src={notifications} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                        <span className="text-[var(--white)] text-sm">Notifications</span>
                                    </Link>
                                    <Link to='/support' className='flex justify-start items-center gap-2'>
                                        <img src={support} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                        <span className="text-[var(--white)] text-sm">Support</span>
                                    </Link>
                                    <Link to='/settings' className='flex justify-start items-center gap-2'>
                                        <img src={gear} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                        <span className="text-[var(--white)] text-sm">Settings</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-between w-[100%]">
                                <div className="flex items-center gap-2">
                                    <img src={logout} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                    <span className="text-[var(--white)] text-sm">Login</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default MobileNavigation
