"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
  const { data } = useSession();
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <div className="p-7 shadow-sm flex justify-between">
      <div className="flex items-center gap-8 ">
        <Image src='/logo.svg' alt='logo' width={160} height={80} />
        <div className="md:flex items-center gap-6 hidden">
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>accueil</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>à propos de nous</h2>
        </div>
      </div>
      <div>
        {data?.user ?

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image src={data?.user?.image}
                alt='user'
                width={40}
                height={40}
                className='rounded-full'
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Mes Réservations
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signOut()}>Se Déconnecter</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          :

          <Button onClick={() => signIn('descope')}>Login / Sign Up</Button>

        }
      </div>
    </div>
  )
}

export default Header