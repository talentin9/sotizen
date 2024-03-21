'use client'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

const day = {
  dawn: {
    main: '상쾌한 새벽이에요',
    emoji: '🌛',
  },
  morning: {
    main: '좋은 아침이에요',
    emoji: '🌞',
  },
  afternoon: {
    main: '즐거운 수업시간이에요',
    emoji: '🏫',
  },
  lunch: {
    main: '신나는 점심시간이에요',
    emoji: '🍱',
  },
  evening: {
    main: '학원에 갈 시간이에요',
    emoji: '📖',
  },
  night: {
    main: '안녕히 주무세요',
    emoji: '😴',
  },
}
const bap = [
  { 
    menu: '보리밥',
    allergy: []
  },
  { 
    menu: '총각김치',
    allergy: []
  },
  {
    menu: '시래기 된장국',
    allergy: []
  },
  { 
    menu: '새우튀김',
    allergy: ['shirimp']
  },
  { 
    menu: '비요뜨',
    allergy: ['milk']
  },
  { 
    menu: '에그 스크렘블',
    allergy: ['egg']
  },
]

interface timeType { main: string, emoji: string }

const date = new Date()
const hour = date.getHours()

const Demo = () => {
  const [time, setTime] = useState<timeType>(
    hour >= 2 && hour < 5
    ? day.dawn
    : (hour >= 5 && hour < 9
      ? day.morning
      : ((hour >= 9 && hour < 12) || (hour >= 13 && hour < 16)
      ? day.afternoon
      : (hour >= 12 && hour < 13
        ? day.lunch
        : (hour >= 16 && hour < 21
          ? day.evening
          : day.night))))
  )
  useEffect(() => {
    setTime(
      hour >= 2 && hour < 5
      ? day.dawn
      : (hour >= 5 && hour < 9
        ? day.morning
        : ((hour >= 9 && hour < 12) || (hour >= 13 && hour < 16)
        ? day.afternoon
        : (hour >= 12 && hour < 13
          ? day.lunch
          : (hour >= 16 && hour < 21
            ? day.evening
            : day.night))))
    )
  }, [])
  return (
    <>
      <div className='py-8 sm;py-10 md:py-12 lg:py-14 space-y-10'>
        <div>
          <h1 className='font-black text-3xl md:text-4xl'>{time.main}, 임준석님. {time.emoji}</h1>
        </div>
        <div className='space-y-5'>
          <div className='flex items-center space-x-5'>
            <h1 className='font-bold text-3xl'>인천공항중학교</h1>
            <button className='bg-cyellow hover:bg-dcyellow text-xl font-bold py-1 px-4 rounded-md'>학교 변경</button>
          </div>
          <div className='lg:flex lg:space-x-5 space-y-5 lg:space-y-0'>
            <div className='w-full p-6 md:p-10 border rounded-md space-y-3 md:space-y-5'>
              <h1 className='text-2xl md:text-3xl font-black'>시간표</h1>
              <div className='flex space-x-10'>
                <div className='flex space-x-3 text-xl'>
                  <div className='space-y-2'>
                    {
                      [...Array(4)].map((_, i) => (
                        <div key={i} className='text-gray-600'>{i+1}교시</div>
                      ))
                    }
                  </div>
                  <div className='space-y-2'>
                    {
                      [...Array(4)].map((_, i) => (
                        <div key={i}>국어</div>
                      ))
                    }
                  </div>
                </div>
                <div className='flex space-x-3 text-xl'>
                  <div className='space-y-2'>
                    {
                      [...Array(4)].map((_, i) => (
                        <div key={i} className='text-gray-600'>{i+5}교시</div>
                      ))
                    }
                  </div>
                  <div className='space-y-2'>
                    {
                      [...Array(4)].map((_, i) => (
                        <div key={i}>국어</div>
                      ))
                    }
                  </div>
                </div>
                <div className='flex space-x-3 text-xl'>
                  <div className='space-y-2'>
                    {
                      [...Array(2)].map((_, i) => (
                        <div key={i} className='text-gray-600'>{i+9}교시</div>
                      ))
                    }
                  </div>
                  <div className='space-y-2'>
                    {
                      [...Array(2)].map((_, i) => (
                        <div key={i}>국어</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full p-6 md:p-10 border rounded-md space-y-3 md:space-y-5'>
              <div className='flex space-x-10'>
                <h1 className='text-2xl md:text-3xl font-black'>급식표</h1>
                <div className='text-[#FF1C1C] flex space-x-1 md:space-x-2 items-center text-base md:text-lg'>
                  <FontAwesomeIcon icon={faCircleInfo} className='w-3 h-3 md:w-5 md:h-5' />
                  <p>빨간색으로 표시된 메뉴는 알레르기를 유발 할 수 있는 메뉴입니다.</p>
                </div>
              </div>
              <div className='space-y-2'>
                <div>
                  <div className='flex space-x-10'>
                    <div className='space-y-2 text-xl'>
                      {
                        [...Array(4)].map((_, i) => (
                          <div key={i} className={`${bap[i] != null && Number(['shirimp','milk'].filter(e => bap[i].allergy.includes(e))) != 0 && 'text-[#FF1C1C]'}`}>{bap[i] != null && bap[i].menu}</div>
                        ))
                      }
                    </div>
                    <div className='space-y-2 text-xl'>
                      {
                        [...Array(4)].map((_, i) => (
                          <div key={i} className={`${bap[i+4] != null && Number(['shirimp','milk'].filter(e => bap[i+4].allergy.includes(e))) != 0 && 'text-[#FF1C1C]'}`}>{bap[i+4] != null && bap[i+4].menu}</div>
                        ))
                      }
                    </div>
                    <div className='space-y-2 text-xl'>
                      {
                        [...Array(2)].map((_, i) => (
                          <div key={i} className={`${bap[i+8] != null && Number(['shirimp','milk'].filter(e => bap[i+8].allergy.includes(e))) != 0 && 'text-[#FF1C1C]'}`}>{bap[i+8] != null && bap[i+8].menu}</div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-8 border rounded-md'>
          <div className='p-10 pb-0'>
            <h1 className='font-black text-3xl'>커뮤니티</h1>
            <p className='text-xl text-gray-500'>오늘 커뮤니티의 인기글이에요.</p>
          </div>
          <div>
            <div className='border-t pb-10'>
              {
                [...Array(3)].map((_, i) => (
                  <div className='lg:flex px-10 border-b text-base lg:text-xl space-x-20 py-5 text-gray-500' key={i}>
                    <div className='text-black'>솔직히 공항중 임준석 잘생기지 않음?</div>
                    <div className='flex space-x-8'>
                      <div className='space-x-3'>
                        <FontAwesomeIcon icon={faHeart} className='w-5 h-5' />
                        <span>99+</span>
                      </div>
                      <div className='space-x-3'>
                        <FontAwesomeIcon icon={faComment} className='w-5 h-5' />
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Demo