import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'

import { buttonVariants } from './ui/button'
import { CircleArrowDownIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { UserAccountNav } from './auth/profile'



const Navbar = async () => {
  const session = await getServerSession(authOptions)
  return (
    <div className='fixed top-0 inset-x-0 bg-zinc-100 border-b border-zinc-300 z-[10] py-2 '>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* logo */}
        <Link href='/' className='flex gap-2 items-center'>
          <CircleArrowDownIcon className='h-8 w-8 sm:h-6 sm:w-6' />
          <p className='hidden text-zinc-700 text-2xl font-extrabold md:block'>DIPNET</p>
        </Link>

        {/* search bar */}
        {/* <SearchBar /> */}

        {/* actions */}
        <div className=' flex gap-5 items-center'>
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}<div className=' bg-red-500'>
        {/* <ModeToggle/> */}
        <ModeToggle/>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar