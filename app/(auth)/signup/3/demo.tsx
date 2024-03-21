'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Demo: NextPage = () => {
  return (
      <div className='flex flex-col items-center py-20'>
          <div className='space-y-14 w-1/2'>
            <div className='flex flex-col items-center space-y-3'>
              <Image src='/img/logo.svg' alt='logo' width={100} height={100} className='w-44' />
              <h1 className='font-bold text-4xl'>회원가입</h1>
            </div>
            <div>
              <div className='text-center space-y-3'>
                <h1 className='text-3xl font-bold'>본인인증하기</h1>
                <div>
                  <input type="checkbox" name='cer' id='cer' className='hidden' />
                  <label htmlFor='cer' className='text-xl font-medium cursor-pointer text-gray-700 hover:text-blue-600 hover:underline'>본인인증은 왜 해야 하나요?</label>
                </div>
              </div>
            </div>
            <div className='flex space-x-5'>
              <Link href='/signup/2' className='w-full'><button className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>이전</button></Link>
              <Link href='/signup/3' className='w-full'><button className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>다음</button></Link>
            </div>
          </div>
      </div>
  )
}

export default Demo