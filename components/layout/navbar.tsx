import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    const navigation = [
      ['/', '홈'],
      ['/community', '커뮤니티'],
      ['/planner', '플래너']
    ]
    return (
        <header className='fixed w-full bg-white h-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 border-b shadow flex items-center justify-between text-lg text-gray-500'>
          <div className='flex items-center space-x-14'>
            <div>
              <Image src='/img/logo.svg' alt='logo' width={100} height={35} priority />
            </div>
            <nav className='space-x-10 hidden lg:block'>
              {
                navigation.map(([href, name], i) => <Link href={href} key={i} className='hover:text-cyellow transition-colors'>{name}</Link>)
              }
            </nav>
          </div>
          <div>
            <Link href='/user' className='space-x-3 items-center lg:flex hidden'>
              <div className='w-8 h-8 rounded-full bg-black' />
              <div><span className='underline hover:text-cyellow'>임준석</span>님</div>
            </Link>
            <div>
              <FontAwesomeIcon icon={faBars} className='w-5 h-5 block lg:hidden' />
            </div>
          </div>
        </header>
    )
}

export default NavBar