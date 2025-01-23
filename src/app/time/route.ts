export const dynamic = 'force-static' // test caching


// revalidate cached data with incremental static regeneration
export const revalidate = 10 // revalidate every request in seconds

export async function GET () {
  return Response.json({ time: new Date().toLocaleTimeString() })
}

/*
 * Caching only works for GET requests,
 * POST, PUT, PATCH, and DELETE requests will not be cached.,
 *
 */