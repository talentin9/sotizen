import { NextPage, Metadata } from 'next'
import Demo from './demo'

export const metadata: Metadata = {
    title: '로그인',
}

const SignIn: NextPage = () => {
    return (
        <Demo />
    )
}

export default SignIn