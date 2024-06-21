import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { DropdownSidebar } from '../components/DropdownSidebar'

export const Layout = ({ children }) => {
    return (
        <div className='xl:grid xl:grid-cols-5 w-full flex'>
            <Sidebar />
            {/* <DropdownSidebar /> */}
            <div className='w-full xl:col-span-4 px-4 py-6 gap-10 flex flex-col '>
                <Navbar />
                <DropdownSidebar />

                <main className="w-full "> {/* Adjust padding as necessary */}
                    {children}
                </main>
            </div>
        </div>)
}
