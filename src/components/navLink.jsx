"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLink = ({ link }) => {

    const pathName = usePathname();

    return (
        <Link className={`rounded-md p-1 px-2 ${pathName === link.url && "bg-black text-white"} z-50`} href={link.url}>{link.title}</Link>
    )
}

export default NavLink