import { faComment, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata, NextPage } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '인천공항중학교',
}

const School: NextPage = () => {
  return (
    <div className='py-8 space-y-10'>
      <header className='flex space-x-8'>
        <Link href='/community/local' className='font-black text-3xl opacity-40'>전체</Link>
        <div className='border-l' />
        <h1 className='font-black text-3xl text-black'>인천공항중학교</h1>
      </header>
      <div className='relative'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 text-black opacity-40 absolute flex items-center inset-y-0 left-0 ml-4 mt-3' />
        <input type='text' className='w-2/5 h-12 border-none rounded-full bg-black bg-opacity-10 pl-12 text-black placeholder-text-opacity-40 text-lg' placeholder='검색어나 태그 검색' />
      </div>
      <div className='border-b'>
        {
          [...Array(30)].map((_, i) => (
            <div key={i} className='border-t py-5 space-y-3'>
              <div>
                <h1 className='text-3xl font-bold'>Hello</h1>
                <div className='text-cyellow text-lg'>#hello</div>
              </div>
              <div className='text-gray-400 flex space-x-5'>
                <div className='flex space-x-2 items-center'>
                  <FontAwesomeIcon icon={faHeart} className='w-5 h-5' />
                  <span>5</span>
                </div>
                <div className='flex space-x-2 items-center'>
                  <FontAwesomeIcon icon={faComment} className='w-5 h-5' />
                  <span>5</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default School