import React from 'react';

export  const NavBar = () => {
    console.log("NavBar creado 123");
    return (
        <nav className={'flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'}>
            <span className={'font-bold text-xl'}>Home</span>
            <div className={'flex flex-1'}></div>
            <a className={'mr-2 text-lg'} href="/about">About</a>
            <a className={'mr-2 text-lg'} href="/pricing">Pricing</a>
            <a className={'mr-2 text-lg'} href="/contact">Contact</a>
        </nav>
    );
};

