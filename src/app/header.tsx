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
import ToggleTheme from "@/components/ToggleTheme";
import { dark } from '@clerk/themes';
import { basename } from "path";
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
  const appearance = {
    baseTheme: theme === "dark" ? dark : undefined, 
  };
  const [mobilenav, setMobilenav] = useState(false);
    return (
    <div className="  dark:bg-zinc-900 bg-white dark:text-white relative z-10 w-full flex flex-col border-b py-4 h-[10vh] justify-center ">
      <div className=" px-2 items-center container mx-auto justify-between flex gap-2">

        
        <Link href="/" >
         <span className=" font-semibold sm:hover:underline   text-3xl">UnStuff</span> 
        </Link>
        

        <div className="hidden sm:block flex-grow">
        <div className="flex gap-4 justify-end items-center">
          <SignedIn>
          <Button variant="secondary">
            <Link href="/dashboard/files">Your Files</Link>
          </Button>
        </SignedIn>       
        <OrganizationSwitcher appearance={appearance} />
          <UserButton  appearance={appearance} afterSignOutUrl="/"  />
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
          <ToggleTheme theme={theme} handleThemeSwitch={handleThemeSwitch} />
         
        </div></div>
        <div className="sm:hidden z-10">
        <SignedIn>
        <button
            className="text-gray-700 dark:text-white focus:outline-none"
            onClick={ () => setMobilenav(!mobilenav)}
          > 
          {mobilenav ? <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> </svg> : <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg>}
          
          </button>
          {mobilenav && <Mnav theme={theme} handleThemeSwitch={handleThemeSwitch} />}
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut> 

        </div>
        
        </div>
        
      </div>
   
  );
}