import { Metadata, NextPage } from 'next'
import Demo from './demo'

export const metadata: Metadata = {
  title: '소티즌 - 초중고 시간표 & 커뮤니티',
  description: '소티즌은 전국의 모든 초,중,고등학교의 시간표와 급식정보를 제공하고 학생들의 커뮤니티 서비스를 운영하고 있습니다.'
}

const Page: NextPage = () => <Demo />

export default Page