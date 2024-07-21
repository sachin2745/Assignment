"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dialog } from '@headlessui/react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const router = useRouter();
    const isHome = router.pathname === '/';
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav className="bg-white border-b-2 border-black">
                <div className="max-w-screen-xl flex flex-shrink-0 items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center font-Luckiest_Guy tracking-wider text-3xl whitespace-nowrap text-black">
                            School
                        </span>
                    </Link>
                    <div className="hidden md:flex font-DM_Sans space-x-3 rtl:space-x-reverse">
                        <Link href="/">
                            <span className="text-white font-DM_Sans bg-black hover:bg-black/80 font-medium rounded-md text-sm px-4 py-3 text-center">
                                Add School
                            </span>
                        </Link>
                        <Link href="/ShowSchools">
                            <span className="text-white font-DM_Sans bg-black hover:bg-black/80 font-medium rounded-md text-sm px-4 py-3 text-center">
                                Show Schools
                            </span>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </nav>
            <Dialog className="md:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <div className="fixed inset-0 z-10 bg-black bg-opacity-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full max-w-sm overflow-y-auto bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-black"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaTimes className="h-6 w-6 text-black" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root font-DM_Sans">
                        <div className="-my-6 divide-y divide-gray-200">
                            <div className="space-y-2 py-6">
                                <Link href="/">
                                    <span
                                        className="-mx-3 block rounded-lg px-3 py-2 bg-black/70 text-base font-bold leading-7 text-white hover:bg-gray-700"
                                    >
                                        Add School
                                    </span>
                                </Link>
                                <Link href="/ShowSchools">
                                    <span
                                        className="-mx-3 mt-2 block rounded-lg px-3 py-2 bg-black/70 text-base font-bold leading-7 text-white hover:bg-gray-700"
                                    >
                                        Show Schools
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;
