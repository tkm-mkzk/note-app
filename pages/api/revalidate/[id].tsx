// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  console.log('Revalidateing detail page...')
  const {
    query: { id },
  } = req
  let revalidated = false
  try {
    await res.revalidate('/notes/${id}')
    revalidated = true
  } catch (err) {
    console.log(err)
  }
  res.json({
    revalidated,
  })
}
