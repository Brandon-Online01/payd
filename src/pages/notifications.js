import { Link } from "react-router-dom"
import Layout from "../layout/layout"

const Notifications = () => {
    return (
        <>
            <Layout>
                <div className="flex flex-col gap-4 h-auto">
                    <div className="flex items-start justify-between w-[100%] flex-wrap gap-2">
                        <Link to='/' className="shine w-[100%] md:w-[49%] lg:w-[24%] rounded-md py-14 px-2 flex flex-col items-start">
                            <p>Notifications</p>
                        </Link>
                        <Link to='/' className="shine w-[100%] md:w-[49%] lg:w-[24%] rounded-md py-14 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                        <Link to='/' className="shine w-[100%] md:w-[49%] lg:w-[24%] rounded-md py-14 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                        <Link to='/' className="shine w-[100%] md:w-[49%] lg:w-[24%] rounded-md py-14 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                    </div>
                    <div className="h-[450px] w-[100%]">
                        <Link to='/' className="shine w-[100%] h-[100%] rounded-md py-6 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                    </div>
                    <div className="w-[100%] flex items-start justify-between gap-1">
                        <Link to='/' className="shine w-[49%] h-[100%] rounded-md py-16 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                        <Link to='/' className="shine w-[49%] h-[100%] rounded-md py-16 px-2 flex flex-col items-start">
                            <p></p>
                        </Link>
                    </div>
                </div>
            </Layout >
        </>
    )
}

export default Notifications