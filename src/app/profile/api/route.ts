// import { type NextRequest } from "next/server";

import { headers, cookies } from 'next/headers'
import { type NextRequest } from 'next/server'

export async function GET (request: NextRequest) {
  // const requestHeaders = new Headers(request.headers)

  // console.log(requestHeaders.get('Authorization'));

  const headersList = await headers()

  console.log(headersList.get('Authorization'))

  const cookieStore = await cookies()
  cookieStore.set('resultsPerPage', '10')
  console.log(cookieStore.get('resultsPerPage'));
  

  const theme = request.cookies.get('theme')
  console.log(theme)

  return new Response('<h1>Profile API data</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'theme=dark'
    }
  })
}
