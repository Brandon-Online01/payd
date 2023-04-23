import { Navbar } from "../components/navigation/desktop-navbar"
import MobileNavigation from "../components/navigation/mobile-navigation"

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col justify-between items-start lg:flex-row lg:gap-6 lg:p-6 h-[100vh] relative">
                <nav className="w-[5%] h-[100%] bg-[var(--green)] rounded-xl px-2 py-4 hidden lg:flex">
                    <Navbar />
                </nav>
                <nav className="bg-[var(--white)] w-[100%] flex items-center justify-between p-4 lg:hidden z-[7]">
                    <MobileNavigation />
                </nav>
                <main className="w-[100%] lg:w-[95%] h-[100%] bg-[var(--white)] lg:rounded-xl p-4 overflow-y-scroll lg:overflow-hidden">
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout