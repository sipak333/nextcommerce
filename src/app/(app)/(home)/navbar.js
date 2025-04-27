"use client";
import Link from "next/link"
import { useState } from "react"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import {NavbarSidebar} from ".//navbar-sidebar"


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
})

const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: "/features", children: "Features"},
    {href: "/pricing", children: "Pricing"},
    {href: "/contact", children: "Contact"},
];

const Navbaritem = ({ href, children, isActive = false }) => {
    return (
        <Link href={href}>
            <Button variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full text-lg border-transparent hover:border-primary", isActive && "bg-black text-white hover:bg-black hover:text-white")}>
                {children}
            </Button>
        </Link>
    )
} 

export const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathName = usePathname();
    return(
        <>
            <nav className="h-20  flex border-b justify-between items-center
font-medium bg-white">
                <Link href="/" className="pl-6">
                    <span className={cn("font-semibold  text-3xl sm:text-4xl lg:text-5xl", poppins.className)}>E-Commerce</span>
                </Link>
                 {/* Desktop nav */}
                <div className="items-center gap-4 hidden lg:flex">
                    {navbarItems.map((item) => (
                        <Navbaritem
                            key={item.href}
                            href={item.href}
                            isActive={pathName === item.href}
                        >
                            {item.children}
                        </Navbaritem>
                    ))}
                      
                </div>
                {/* Desktop buttons */}
                <div className="hidden lg:flex h-full ">
                    <Link href="/sign-in"><Button variant="secondary" className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full  rounded-none bg-white hover:bg-pink-500 transition-colors text-lg">Login</Button></Link>
                    <Link href="/sign-up"><Button variant="secondary" className="border-l border-t-0 border-r-0 border-b-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-500 hover:text-black transition-colors text-lg">Sign Up</Button></Link>
                </div>
                {/* Mobile hamburger */}
                <button
                className="lg:hidden text-3xl pr-6 hover:cursor-pointer"
                onClick={() => setSidebarOpen(true)}
                >
                ☰
                </button>
            </nav>

            <NavbarSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
}