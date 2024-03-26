import { NextPage, Metadata } from 'next'
import Demo from './demo'

export const metadata: Metadata = {
    title: '회원가입',
}

const SignIn: NextPage = () => {
    return (
        <Demo />
    )
}

export default SignIn