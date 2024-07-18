"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const Navbar = () => {
    const router = useRouter();
    const isHome = router.pathname === '/';

    return (
        <nav className="bg-white  border-b-2 border-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >

                    <span className="self-center font-Luckiest_Guy tracking-wider text-3xl  whitespace-nowrap text-black">
                        School
                    </span>
                </Link>
                <div className=" flex font-DM_Sans md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                    <Link href="/">
                        <span className="text-white font-DM_Sans bg-black hover:bg-black/80 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Add School
                        </span>
                    </Link>
                    <Link href="/ShowSchools">
                        <span className="text-white font-DM_Sans bg-black hover:bg-black/80 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Show Schools
                        </span>
                    </Link>

                </div>


            </div>
        </nav>

    )
}

export default Navbar