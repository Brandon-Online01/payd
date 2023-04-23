import { Link } from "react-router-dom"
import { useState } from "react"

//images
import user from '../../assets/icons/user.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import wallet from '../../assets/icons/wallet.svg'
import notifications from '../../assets/icons/notifications.svg'
import support from '../../assets/icons/shield.svg'
import logout from '../../assets/icons/logout.svg'
import gear from '../..//assets/icons/gear.svg'

// hooks 
import { usePathname } from "../../hooks/usePathName"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState()

    const pathName = usePathname();

    const openModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="flex flex-col justify-between h-[100%] w-[100%] relative">
                <div className="flex flex-col gap-10 w-[100%]">
                    <Link to='/profile' className="group relative flex justify-center w-[100%]">
                        <img src={user} loading='lazy' alt='icon' className={`max-w-[50px] outline-none hover:scale-110 ease-in-out duration-300 xl:border-[1px] rounded-full p-2`} />
                        <div className="opacity-0 group-hover:opacity-100 absolute top-0 left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[200px] py-2 flex items-center justify-between">
                            <div className="flex flex-col gap-0">
                                <span className="text-[var(--white)] text-base font-bold">Brandon Nkawu</span>
                                <span className="text-[var(--white)] text-sm">Developer</span>
                            </div>
                        </div>
                    </Link>
                    <div className="flex flex-col items-center gap-2 text-[var(--white)] flex-wrap w-[100%]">
                        <Link to='/' className={`group relative bg-[${pathName === '/' ? 'var(--yellow)' : ''}] hover:bg-[var(--yellow-hover)] ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4`}>
                            <img src={dashboard} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                            <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[5px] left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[100px] py-2 flex justify-center">
                                <span className="text-[var(--white)] text-sm">Dashboard</span>
                            </div>
                        </Link>
                        <Link to='/wallet' className={`group relative bg-[${pathName === '/wallet' ? 'var(--yellow)' : ''}] hover:bg-[var(--yellow-hover)] ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4`}>
                            <img src={wallet} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                            <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[5px] left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[100px] py-2 flex justify-center">
                                <span className="text-[var(--white)] text-sm">Wallet</span>
                            </div>
                        </Link>
                        <Link to='/notifications' className={`group relative bg-[${pathName === '/notifications' ? 'var(--yellow)' : ''}] hover:bg-[var(--yellow-hover)] ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4`}>
                            <div className="relative flex items-start">
                                <img src={notifications} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                                <div className="absolute right-[1px] top-[-0.1rem]">
                                    <span class="relative h-4 w-4 flex items-center justify-center">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--red)] opacity-90"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[var(--red)]"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[5px] left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[100px] py-2 flex justify-center">
                                <span className="text-[var(--white)] text-sm">Notifications</span>
                            </div>
                        </Link>
                        <Link to='/support' className={`group relative bg-[${pathName === '/support' ? 'var(--yellow)' : ''}] hover:bg-[var(--yellow-hover)] ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4`}>
                            <img src={support} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                            <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[5px] left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[100px] py-2 flex justify-center">
                                <span className="text-[var(--white)] text-sm">Support</span>
                            </div>
                        </Link>
                        <Link to='/settings' className={`group relative bg-[${pathName === '/settings' ? 'var(--yellow)' : ''}] hover:bg-[var(--yellow-hover)] ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4`}>
                            <img src={gear} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                            <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[5px] left-[4rem] bg-[var(--yellow)] p-2 rounded-md w-[100px] py-2 flex justify-center">
                                <span className="text-[var(--white)] text-sm">Settings</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <button className="group relative ease-in-out duration-300 rounded-md w-[100%] flex justify-center py-2 px-4" onClick={openModal}>
                    <img src={logout} loading='lazy' alt='icon' className="max-w-[30px] outline-none hover:scale-110 ease-in-out duration-300" />
                    <div className="opacity-0 group-hover:opacity-100 ease-in-out duration-300 absolute top-[-6rem] left-[4.5rem] bg-[var(--white)] p-2 rounded-md w-[300px] py-2 flex justify-center shadow-2xl">
                        <div className="w-[300px] p-4 rounded-lg flex flex-col gap-4">
                            <p className="text-lg">Logging out, are you sure ?</p>
                            <div className="flex items-center justify-between">
                                <button className="border-[1px] border-[var(--red)] text-[var(--red)] hover:bg-[var(--red)] hover:text-[var(--white)] rounded-md py-2 w-[45%] cursor-pointer ease-in-out duration-300">Cancel</button>
                                <button className="border-[1px] border-[var(--green)] text-[var(--green)] hover:bg-[var(--green)] hover:text-[var(--white)] rounded-md py-2 w-[45%] cursor-pointer ease-in-out duration-300">Yes</button>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </>
    )
}
