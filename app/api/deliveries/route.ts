import { NextResponse } from "next/server"

 
type ResponseData = {
  message: string
}
 
export const GET = async (): Promise<NextResponse<ResponseData>> => {
  return NextResponse.json({ message: 'Hello from Next.js!' })
};