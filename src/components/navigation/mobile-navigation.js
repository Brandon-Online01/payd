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
    const [isLogginOut, setIsLogginOut] = useState('')

    const openMenu = () => {
        setIsOpen(!isOpen)
    }

    const openModal = () => {
        setIsLogginOut(!isLogginOut)
        console.log(isLogginOut)
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
                        <div className="w-[100%] min-h-[88vh] overflow-scroll h-[100%] pt-8 pb-6 px-4 rounded-md flex flex-col items-start justify-between bg-[var(--green)] popin absolute top-[4rem] z-[9]">
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
                                        <div className="relative flex items-start">
                                            <img src={notifications} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                            <div className="absolute right-[1px] top-[-0.1rem]">
                                                <span class="relative h-4 w-4 flex items-center justify-center">
                                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--red)] opacity-90"></span>
                                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--red)]"></span>
                                                </span>
                                            </div>
                                        </div>
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
                            <div className="flex items-center justify-between w-[100%] relative" onClick={openModal}>
                                <div className="flex items-center gap-2">
                                    <img src={logout} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                    <span className="text-[var(--white)] text-sm">Logout</span>
                                </div>
                                {
                                    isLogginOut &&
                                    <div className="rounded-lg flex flex-col gap-4 absolute top-[-5rem] right-0 bg-[var(--white)] p-4 w-[100%]">
                                        <p className="text-lg">Logging out, are you sure ?</p>
                                        <div className="flex items-center justify-between">
                                            <button className="border-[1px] border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)] rounded-md py-2 w-[45%] cursor-pointer ease-in-out duration-300">Cancel</button>
                                            <button className="border-[1px] border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)] rounded-md py-2 w-[45%] cursor-pointer ease-in-out duration-300">Yes</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }
            </div >
        </>
    )
}
export default MobileNavigation
