import { useEffect } from "react";
import { DropdownSidebar } from "../DropdownSidebar";
import { Navbar } from "../Navbar";
import { Sidebar } from "../Sidebar";
import { useLocation } from "react-router-dom";

export const DashboardLayout = ({ activeSidebar, children }) => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='xl:grid xl:grid-cols-6 w-full flex'>
            <Sidebar activeSidebar={activeSidebar} />
            <div className='w-full xl:col-span-5 xl:px-6 xl:py-6 p-4  flex flex-col gap-6 '>
                <Navbar />
                <DropdownSidebar activeSidebar={activeSidebar} />
                <main className="w-full  "> {/* Adjust padding as necessary */}
                    {children}
                </main>
            </div>
        </div>
    )
}
