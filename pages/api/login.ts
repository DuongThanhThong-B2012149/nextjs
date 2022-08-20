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
  // Don't send cookie to header
  if (req.method !== 'POST') {
    return res.status(400).json({
      message: 'Method not supported',
    })
  }
  return new Promise((resolve) => {
    req.headers.cookie = ''

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''
      proxyRes.on('data', function (chunk) {
        body += chunk
      })
      proxyRes.on('end', function () {
        try {
          const { accessToken, expiredAt } = JSON.parse(body)
          // Convert token to cookies
          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
          cookies.set('access_token', accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(expiredAt),
          })
          ;(res as NextApiResponse).status(200).json({ message: 'Login successfully!' })
          // throw new Error('hahe')
        } catch (error) {
          console.log(error)
          ;(res as NextApiResponse).status(500).json({ message: 'Some thing went wrong!' })
        }
        resolve(true)
      })
    }
    proxy.once('proxyRes', handleLoginResponse)

    proxy.web(req, res, {
      target: process.env.API_URI,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })

  //   res.status(200).json({ name: 'PATH - MATCH ALL HERE' })
}
