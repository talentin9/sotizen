import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: '마이페이지'
}

const MyPage: NextPage = () => {
  return (
    <div className='py-20 space-y-12'>
      <header className='space-y-3'>
        <div className='flex items-center space-x-5'>
          <div className='w-24 h-24 rounded-full bg-black' />
          <div>
            <p className='text-xl text-gray-500'>@talentin9</p>
            <h1 className='text-4xl font-bold'>임준석</h1>
          </div>
        </div>
        <div className='space-y-5'>
          <div className='space-x-1 text-lg text-gray-500'><span>인천공항중학교</span><span>&#183;</span><span>3학년 4반</span></div>
          <button className='bg-cyellow py-1 px-3 text-lg rounded-md'>내 정보 수정</button>
        </div>
      </header>
      <div className='border-b'>
        {
          [...Array(100)].map((_, i) => (
            <div key={i} className='border-t py-5 space-y-3'>
              <div>
                <h1 className='text-2xl font-medium'>Hello</h1>
                <div className='text-cyellow'>#hello</div>
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

export default MyPage