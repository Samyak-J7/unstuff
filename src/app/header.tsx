"use client";
import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useSession,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Mnav from "./dashboard/mobile-nav";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch"
import DarkModeToggle from "react-dark-mode-toggle";


export function Header() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  })
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [mobilenav, setMobilenav] = useState(false);
    return (
    <div className=" bg-black dark:text-white relative z-10 w-full flex flex-col border-b py-4  ">
      <div className=" px-2 items-center container mx-auto justify-between flex gap-2">

        <Link href="/" >
          <Image className="scale-125" src="/logo-white.svg" width="60" height="70" alt="unstuff logo" />
          
        </Link>
        <DarkModeToggle onChange={handleThemeSwitch} checked={theme === "dark"} size={60} />
        <div className="hidden sm:block flex-grow">
        <div className="flex gap-4 justify-end">
          <SignedIn>
          <Button variant="secondary">
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>       
        <OrganizationSwitcher />
          <UserButton afterSignOutUrl="/"  />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          
         
        </div></div>
        <div className="sm:hidden z-10">
        <SignedIn>
        <button
            className="text-gray-700 dark:text-white focus:outline-none"
            onClick={ () => setMobilenav(!mobilenav)}
          > 
          {mobilenav ? <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> </svg> : <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg>}
          
          </button>
          {mobilenav && <Mnav />}
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut> 

        </div>
        
        </div>
        
      </div>
   
  );
}