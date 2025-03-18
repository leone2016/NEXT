import Link from "next/link";
import {HomeIcon} from "@primer/octicons-react";
import {ActiveLink} from "@/components/active-link/ActiveLink";

const navItems = [
    {path: '/about', label: 'About'},
    {path: '/pricing', label: 'Prices'},
    {path: '/contact', label: 'Contact'},
]
export  const NavBar = async () => {
    console.log("NavBar creado 123");
    return (
        <nav className={'flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'}>
           <Link href={'/'} className={'flex items-center'}>
               <HomeIcon className={'mr-2'} />
               <span className={'font-bold text-xl'}>Home</span>
           </Link>
            <div className={'flex flex-1'}></div>
            {
                navItems.map(items => (
                    <ActiveLink key={items.path}  path={items.path} text={items.label} />
                ))
            }
        </nav>
    );
};

