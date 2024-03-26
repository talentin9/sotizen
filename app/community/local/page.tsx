import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: '커뮤니티',
}

const Community: NextPage = () => {
  return (
    <div className='pt-8'>
      <header className='space-y-5'>
        <div className='flex space-x-8'>
          <h1 className='font-black text-3xl'>전체</h1>
          <div className='border-l' />
          <h1 className='font-black text-3xl text-black opacity-40'>인천공항중학교</h1>
        </div>
        <div className='relative'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 text-black opacity-40 absolute flex items-center inset-y-0 left-0 ml-4 mt-3' />
          <input type='text' className='w-2/5 h-12 border-none rounded-full bg-black bg-opacity-10 pl-12 text-black placeholder-text-opacity-40 text-lg' placeholder='검색어나 태그 검색' />
        </div>
      </header>
    </div>
  )
}

export default Community