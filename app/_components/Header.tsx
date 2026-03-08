"use client"
import React from 'react'
import Image from 'next/image'
import { useUser, UserButton, SignInButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'


const Header = () => {
  const { user } = useUser();
  return (
    
      <div className='flex items-center justify-between p-4'>
        <div className='flex  gap-2 items-center'>
          <Image src={'/logo.png'} alt='logo' width={40} height={36} />
          <h2 className='text-3xl font-extrabold leading-none text-foreground'>
            <span className='text-primary'>Vid</span>Course
          </h2>
        

        </div>
          <ul className='flex gap-8 items-center'>
            <li className='text-lg hover:text-primary font-medium cursor-pointer'>Home</li>
            <li className='text-lg hover:text-primary font-medium cursor-pointer'>Pricing</li>
          </ul>

          {/* Opens Clerk sign-in in a modal instead of navigating away */}
          {user ? (
            <UserButton />
          ) : (
            <SignInButton mode='modal'>
              <Button>Get Started</Button>
            </SignInButton>
          )}
        </div>

  )
}


export default Header