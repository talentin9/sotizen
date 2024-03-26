'use client'
import CheckBox from '@/components/checkbox'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Demo: NextPage = () => {
  const terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem diam, rutrum eu enim facilisis, porta sagittis enim. Proin enim diam, tincidunt et turpis ut, pharetra convallis ipsum. Mauris egestas id quam at maximus. Aenean luctus consectetur varius. Aenean sit amet velit sit amet nunc imperdiet ullamcorper eu eget nisl. Nunc ut libero egestas orci sollicitudin viverra. Maecenas imperdiet egestas tortor, eget fermentum magna molestie ac. Aliquam commodo consequat libero eget lacinia. Donec arcu urna, feugiat in mollis ac, convallis ut orci. Aenean vel nulla id velit facilisis cursus ut quis ipsum. Curabitur id aliquet nunc, quis tincidunt sapien. Curabitur faucibus sagittis pretium. Suspendisse pellentesque condimentum iaculis. Sed neque purus, maximus sit amet aliquet et, tristique at risus.`

  return (
      <div className='flex flex-col items-center py-20'>
          <div className='space-y-14 w-1/2'>
            <div className='flex flex-col items-center space-y-3'>
              <Image src='/img/logo.svg' alt='logo' width={100} height={100} className='w-44' />
              <h1 className='font-bold text-4xl'>회원가입</h1>
            </div>
              <div className='space-y-10'>
                <div className='space-y-2'>
                  <div className='flex space-x-3 items-center'>
                    <h1>소티즌 이용약관에 동의합니다.</h1>
                    <CheckBox name='terms' id='terms' />
                  </div>
                  <div className='border overflow-y-scroll h-40 p-5 py-2 text-base rounded-md'>{terms}</div>
                </div>
                <div className='space-y-2'>
                  <div className='flex space-x-3 items-center'>
                    <h1>개인정보 처리방침에 동의합니다.</h1>
                    <CheckBox name='privacy' id='privacy' />
                  </div>
                  <div className='border overflow-y-scroll h-40 p-5 py-2 text-base rounded-md'>{terms}</div>
                </div>
                <div>
                  <Link href='/signup/2'>
                    <button className='text-lg bg-cyellow rounded w-full py-2 text-center font-medium hover:opacity-70 transition-all'>다음</button>
                  </Link>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Demo