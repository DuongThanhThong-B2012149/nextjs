// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}
export const config = {
  api: {
    bodyParser: false,
  },
}
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'
const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Method not supported' })
  }
  const cookies = new Cookies(req, res)
  cookies.set('access_token', '')
  return res.status(200).json({ message: 'Logout successfully' })
}
