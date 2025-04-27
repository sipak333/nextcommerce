// components/navbar-sidebar.js
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
]

export const NavbarSidebar = ({ isOpen, onClose }) => {
  const pathName = usePathname()

  return (
    <div className={cn(
      "fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-white z-50 p-6 shadow-md transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <button onClick={onClose} className="mb-4 text-xl font-bold">✕</button>
      <nav className="flex flex-col gap-4  ">
        {navbarItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose}>
            <Button
              variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full text-lg border-transparent hover:border-primary", pathName === item.href && "bg-black text-white hover:bg-black hover:text-white")}
            >
              {item.children}
            </Button>
          </Link>
        ))}
        <div className="flex flex-col gap-2 border-t pt-6">
          <Link href="/sign-in">
            <Button variant="outline" className="w-full" onClick={onClose}>
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="w-full bg-black text-white hover:bg-pink-500 hover:text-black" onClick={onClose}>
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}
