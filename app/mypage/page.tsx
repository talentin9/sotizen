import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: '마이페이지'
}

const MyPage: NextPage = () => {
  return (
    <div className='py-8'>
      <div className='space-y-1'>
        <h1 className='text-4xl font-bold'>임준석</h1>
        <div className='space-x-2 text-gray-500 text-lg'><span>인천공항중학교</span><span>·</span><span>3학년 4반</span></div>
      </div>
    </div>
  )
}

export default MyPage