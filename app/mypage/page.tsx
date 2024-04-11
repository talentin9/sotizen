import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: '마이페이지'
}

const MyPage: NextPage = () => {
  return (
    <div className='py-8 space-y-12'>
      <header className='space-y-3'>
        <div className='space-y-1'>
          <h1 className='text-4xl font-bold'>임준석</h1>
          <div className='space-x-2 text-gray-500 text-lg'><span>인천공항중학교</span><span>·</span><span>3학년 4반</span></div>
        </div>
        <button className='text-lg bg-cyellow hover:bg-dcyellow px-2 py-1 rounded-md'>정보 수정하기</button>
      </header>
    </div>
  )
}

export default MyPage