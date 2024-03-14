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
import DarkModeToggle from "react-dark-mode-toggle";
const Mnav = () => {
const pathname = usePathname();


  return (

          <div className='rounded-3xl h-[30vh] w-[60%] dark:bg-zinc-950 bg-slate-200 -z-10 absolute top-0 right-0 shadow-2xl'>
              <div className=' h-full flex flex-col justify-start gap-8 p-4'>

                  <UserButton /> 
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
                  <OrganizationSwitcher />
              </div>
          </div>
    


  )
}

export default Mnav