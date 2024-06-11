import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
    const navigation = [
      ['/', '홈'],
      ['/community/local', '커뮤니티'],
      ['/mypage', '마이페이지'],
    ]
    return (
        <header className='fixed w-full bg-white h-16 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 border-b shadow flex items-center justify-between text-lg text-gray-500 z-50'>
          <div className='flex items-center space-x-14'>
            <div>
              <Link href='/'><Image src='/img/logo.svg' alt='logo' width={100} height={35} priority /></Link>
            </div>
            <nav className='space-x-10 hidden lg:block'>
              {
                navigation.map(([href, name], i) => <Link href={href} key={i} className='hover:text-cyellow transition-colors'>{name}</Link>)
              }
            </nav>
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} className='w-5 h-5 block lg:hidden' />
          </div>
        </header>
    )
}

export default NavBar