import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const footer = [
      ['소티즌 이용약관', '/terms/sotizen'],
      ['개인정보 처리방침', '/terms/privacy'],
      ['책임의 한계와 법적 고지', '/terms/disclaimer'],
      ['커뮤니티 가이드라인', '/terms/guidelines']
    ]
    return (
        <footer className='w-full px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-10 bg-gray-100 text-gray-500 space-y-8'>
          <div className='space-y-5'>
            <div className='space-x-10'>
              {
                footer.map(([name, href], i) => <Link href={href} key={i} className='hover:text-gray-900'>{name}</Link>)
              }
            </div>
            <div className='space-x-10 flex items-center'>
              <FontAwesomeIcon icon={faFacebook} className='w-5 h-5 hover:text-gray-900' />
              <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 hover:text-gray-900' />
              <FontAwesomeIcon icon={faXTwitter} className='w-5 h-5 hover:text-gray-900' />
              <Link href='mailto:help@sotizen.kr' className='hover:text-gray-900'>help@sotizen.kr</Link>
            </div>
          </div>
          <div className='border-b border-gray-400' />
          <div>Copyright &copy; 2023. Sotizen. All rights reserved.</div>
        </footer>
    )
}

export default Footer