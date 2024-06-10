'use client'
import { inputCSS } from '@/components/input'
import { auth } from '@/firebase/firebasedb'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Demo: NextPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: {name, value}
    } = e
    if(name == 'id') setId(value)
    else if(name == 'email') setEmail(value)
    else if(name == 'password') setPassword(value)
    else if(name == 'repassword') setRePassword(value)
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(isLoading || id == '' || email == '' || password == '' || rePassword == '') return
    try {
      setIsLoading(true)
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      console.log(credentials.user)
      await updateProfile(credentials.user, {
        displayName: id
      })
      router.push('/')
    }
    catch(e) {}
    finally {
      setIsLoading(false)
    }
  }

  return (
      <div className='flex flex-col items-center py-20'>
          <form className='space-y-14 w-1/2' onSubmit={onSubmit}>
            <div className='flex flex-col items-center space-y-3'>
              <Image src='/img/logo.svg' alt='logo' width={100} height={100} className='w-44' />
              <h1 className='font-bold text-4xl'>회원가입</h1>
            </div>
            <div className='text-xl space-y-5'>
              <div className='space-y-2'>
                <p>아이디</p>
                <input type='text' name='id' className={inputCSS} onChange={onChange} value={id} placeholder='영문/숫자를 조합하여 작성해주세요. (4~12자)' />
              </div>
              <div className='space-y-2'>
                <p>이메일</p>
                <input type='text' name='email' className={inputCSS} onChange={onChange} value={email} placeholder='이메일 주소를 입력해주세요. (예: xxx@company.com)' />
              </div>
              <div className='space-y-2'>
                <p>비밀번호</p>
                <input type='text' name='password' className={inputCSS} onChange={onChange} value={password} placeholder='비밀번호를 입력해주세요. (8~20자)' />
              </div>
              <div className='space-y-2'>
                <p>비밀번호 재확인</p>
                <input type='text' name='repassword' className={inputCSS} onChange={onChange} value={rePassword} placeholder='비밀번호를 다시 입력해주세요.' />
              </div>
            </div>
            <div>
              <button type='submit' className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>{isLoading ? '로딩중...' :'회원가입'}</button>
            </div>
          </form>
      </div>
  )
}

export default Demo