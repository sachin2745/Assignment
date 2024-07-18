'use client';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './Navbar';

const Template = ({ children }) => {
    return (
        <div>
            <Toaster position='top-center' />
            <Navbar />
            {children}


        </div>
    )
}

export default Template