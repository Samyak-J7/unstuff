import React, { useEffect, useState } from 'react'
import {
    OrganizationSwitcher,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useSession,
  } from "@clerk/nextjs";
import { Button } from '@/components/ui/button';
import clsx from "clsx";
import { FileIcon, StarIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ToggleTheme from '@/components/ToggleTheme';
import { dark } from '@clerk/themes';
type ToggleThemeProps = {
    theme: string;
    handleThemeSwitch: () => void;
};
const Mnav = ({ theme, handleThemeSwitch }: ToggleThemeProps) => {
const pathname = usePathname();
const appearance = {
    baseTheme: theme === "dark" ? dark : undefined,
  };

  return (

          <div className='rounded-3xl max-h-max w-[60%] dark:bg-zinc-950  bg-slate-100  -z-10 absolute top-0 right-0 shadow-2xl'>
              <div className=' h-full flex flex-col justify-start gap-8 p-4'>
                <div className=' w-[85%] flex justify-between'>  
                <UserButton  appearance={appearance} afterSignOutUrl="/"   /> 
                <ToggleTheme theme={theme} handleThemeSwitch={handleThemeSwitch} />
                  </div>
                  
                  <div>

                      <Link href="/dashboard/files">
                          <Button
                           
                              variant={"link"}
                              className={clsx("flex gap-2", {
                                  "text-blue-500": pathname.includes("/dashboard/files"),
                              })}
                          >
                              <FileIcon /> All Files
                          </Button>
                      </Link>

                      <Link href="/dashboard/favorites">
                          <Button
                              variant={"link"}
                              className={clsx("flex gap-2", {
                                  "text-blue-500": pathname.includes("/dashboard/favorites"),
                              })}
                          >
                              <StarIcon /> Favorites
                          </Button>
                      </Link>

                      <Link href="/dashboard/trash">
                          <Button
                              variant={"link"}
                              className={clsx("flex gap-2", {
                                  "text-blue-500": pathname.includes("/dashboard/trash"),
                              })}
                          >
                              <TrashIcon /> Trash
                          </Button>
                      </Link>
                        
                  </div>
                           
                  <OrganizationSwitcher appearance={appearance} />
              </div>
          </div>
    


  )
}

export default Mnav