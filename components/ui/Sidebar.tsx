'use client'

import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'


const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer flex items-center gap-4'>
                <Image 
                      src="/icons/logo.svg"
                      width={34}
                      height={34} 
                      alt="opulent logo"
                      className='size-[37px] max-xl:size-14'               
                      />
                      <h1 className='sidebar-logo'>Opulent</h1>
            
            </Link>
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
              <Link 
                key={item.label} 
                href={item.route} 
                className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
              >
                <div className='relative size-6'>
                    <Image 
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={cn({'brightness-[3] invert-0': isActive})}
                    />
                </div>
                <p className={cn('sidebar-label', {'!text-white': isActive})}>
                    {item.label}
                </p>
              </Link>
            )
          })}

          USER
        </nav>

        FOOTER
    </section>
  )
}

export default Sidebar