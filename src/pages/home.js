import { Link } from "react-router-dom"
import Layout from "../layout/layout"

//images
import piechart from '..//assets/icons/piechart.svg'
import blueline from '..//assets/icons/blueline.svg'
import cheeseline from '..//assets/icons/cheeseline.svg'
import brownline from '..//assets/icons/brownline.svg'

const Home = () => {
    return (
        <>
            <Layout>
                <div className="flex flex-col gap-4 h-auto overflow-y-scroll">
                    <div className="flex items-start justify-between w-[100%] flex-wrap gap-2">
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 w-[48%] lg:w-[24%] rounded-md h-[150px] p-4 flex flex-col items-start gap-2">
                            <div className="h-[100%] w-[100%] flex flex-col gap-2 lg:gap-2 justify-between">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl">4k</h2>
                                    <p className="text-sm mt-[-0.5rem]">Active users this month</p>
                                </div>
                                <p className="hidden md:block text-sm">Click here</p>
                            </div>
                        </Link>
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 w-[48%] lg:w-[24%] rounded-md h-[150px] p-4 flex flex-col items-start gap-2">
                            <div className="h-[100%] w-[100%] flex flex-col gap-2 lg:gap-2 justify-between">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl">R49k</h2>
                                    <p className="text-sm mt-[-0.5rem]">Total monthly earnings</p>
                                </div>
                                <p className="hidden md:block text-sm">Click here</p>
                            </div>
                        </Link>
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 w-[48%] lg:w-[24%] rounded-md h-[150px] p-4 flex flex-col items-start gap-2">
                            <div className="h-[100%] w-[100%] flex flex-col justify-between gap-2 lg:gap-2">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl">R10K</h2>
                                    <p className="text-sm mt-[-0.5rem]">Total monthly running costs</p>
                                </div>
                                <p className="hidden md:block text-sm">Click here</p>
                            </div>
                        </Link>
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 w-[48%] lg:w-[24%] rounded-md h-[150px] p-4 flex flex-col items-start gap-2">
                            <div className="h-[100%] w-[100%] flex flex-col gap-2 lg:gap-2 justify-between">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl text-[var()]">98%</h2>
                                    <p className="text-sm mt-[-0.5rem]">Productivity this month</p>
                                </div>
                                <p className="hidden md:block text-sm">Click here</p>
                            </div>
                        </Link>
                    </div>
                    <div className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 00%] flex items-center justify-between flex-wrap gap-4 rounded-lg">
                        <Link to='/' className="w-50%] mx-auto md:w-[49%] h-[100%] rounded-md py-6 px-2 flex justify-center">
                            <img src={piechart} alt='notification' loading='lazy' className='w-[400px]' />
                        </Link>
                        <div className="w-[100%] md:w-[49%] h-[100%] rounded-md py-6 px-2 flex justify-center">
                            <div className="h-[100%] flex flex-col justify-center gap-4">
                                <p className="flex items-center justify-start gap-4">
                                    <img src={blueline} alt='notification' loading='lazy' className='w-[30px]' />
                                    <span className="text-xl">Net Expenses</span>
                                </p>
                                <p className="flex items-center justify-start gap-4">
                                    <img src={cheeseline} alt='notification' loading='lazy' className='w-[30px]' />
                                    <span className="text-xl">Net Profile</span>
                                </p>
                                <p className="flex items-center justify-start gap-4">
                                    <img src={brownline} alt='notification' loading='lazy' className='w-[30px]' />
                                    <span className="text-xl">Net Loss</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start justify-between w-[100%] gap-2 flex-wrap">
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 rounded-lg w-[49%] py-2 px-4 h-[90px]">
                            <div className="h-[100%] w-[100%] flex flex-col gap-2 lg:gap-2 justify-between">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl">28</h2>
                                    <p className="text-sm mt-[-0.5rem]">Issues reported in support</p>
                                </div>
                            </div>
                        </Link>
                        <Link to='/' className="border-[1px] hover:border-[var(--green)] ease-in-out duration-300 rounded-lg w-[49%] py-2 px-4 h-[90px]">
                            <div className="h-[100%] w-[100%] flex flex-col gap-2 lg:gap-2 justify-between">
                                <div className="flex flex-col gap-0">
                                    <h2 className="font-bold text-2xl lg:text-6xl">25</h2>
                                    <p className="text-sm mt-[-0.5rem]">New customers</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Home