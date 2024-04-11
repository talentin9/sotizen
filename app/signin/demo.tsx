'use client'
import Input from '@/components/input'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Demo: NextPage = () => {
    const onClick = async () => {
      const response = await fetch('/www/users', {
        method: 'POST',
        body: JSON.stringify({
          username: 'test',
          password: 'ayo'
        })
      })
      console.log(await response.json())
    }
    return (
        <div className='flex flex-col items-center py-20'>
          <div className='space-y-14 w-1/2'>
            <div className='flex flex-col items-center space-y-3'>
              <Image src='/img/logo.svg' alt='logo' width={100} height={100} className='w-44' />
              <h1 className='font-bold text-4xl'>로그인</h1>
            </div>
            <form className='text-xl space-y-5'>
              <div className='space-y-2'>
                <p>이메일</p>
                <Input type='text' placeholder='이메일 주소를 입력하세요.' />
              </div>
              <div className='space-y-2'>
                <p>비밀번호</p>
                <Input type='password' placeholder='비밀번호를 입력하세요.' />
              </div>
              <button onClick={onClick} className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>로그인</button>
              <div className='text-base text-center space-x-3 text-gray-500'>
                <Link href='/signup' className='hover:text-cyellow hover:underline transition-colors'>회원가입</Link>
                <Link href='/signin/password' className='hover:text-cyellow hover:underline transition-colors'>비밀번호 찾기</Link>
              </div>
            </form>
            <div className='space-y-5'>
              <div className='relative'>
                <div className='border-t absolute w-full' />
                <div className='relative -top-3 text-center'>
                  <span className='bg-white px-5 text-3xl font-bold'>소셜 로그인</span>
                </div>
              </div>
              <div className='flex items-center justify-center space-x-14'>
                {
                  ['google', 'apple', 'facebook'].map((social, i) => <button className='rounded-full border w-14 h-14 flex items-center justify-center hover:opacity-70 transition-all p-3' key={i}>
                      <Image src={`/img/socials/${social}.svg`} alt={social} width={100} height={100} className='img' />
                    </button>)
                }
              </div>
            </div>
          </div>
        </div>
    )
}

export default Demo