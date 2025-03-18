"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";

interface Props
{
    path: string;
    text: string;
}
export const ActiveLink = ({ path, text }:Props) => {
    const pathName = usePathname();
    const isActive = pathName === path;
console.log(isActive, pathName, path);
    return (
            <Link
                href={path}
                className={` link ${isActive? 'active-link' : 'text-gray-500'} }`}
            >{text}</Link>

    );
};
