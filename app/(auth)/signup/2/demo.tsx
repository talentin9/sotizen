'use client'
import CheckBox from '@/components/checkbox'
import Input from '@/components/input'
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
            <div className='text-xl space-y-5'>
              <div className='space-y-2'>
                <p>아이디</p>
                <Input type='text' placeholder='영문/숫자를 조합하여 작성해주세요. (4~12자)' />
              </div>
              <div className='space-y-2'>
                <p>이메일</p>
                <Input type='text' placeholder='이메일 주소를 입력해주세요. (예: xxx@company.com)' />
              </div>
              <div className='space-y-2'>
                <p>비밀번호</p>
                <Input type='text' placeholder='비밀번호를 입력해주세요. (8~20자)' />
              </div>
              <div className='space-y-2'>
                <p>비밀번호 재확인</p>
                <Input type='text' placeholder='비밀번호를 다시 입력해주세요.' />
              </div>
            </div>
            <div className='flex space-x-5'>
              <Link href='/signup/1' className='w-full'><button className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>이전</button></Link>
              <Link href='/signup/3' className='w-full'><button className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>다음</button></Link>
            </div>
          </div>
      </div>
  )
}

export default Demo