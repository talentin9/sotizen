import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  console.log(req)
  return Response.json({
    ok: true
  })
}

export const POST = async (req: NextRequest) => {
  const data = await req.json()
  console.log('로그인!!')
  return Response.json(data)
}