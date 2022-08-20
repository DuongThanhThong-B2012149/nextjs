// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }
export const config = {
  api: {
    bodyParser: false,
  },
}
import httpProxy from 'http-proxy'
const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {

    // Don't send cookie to header
    req.headers.cookie = ""


  proxy.web(req, res, {
    target: process.env.API_URI,
    changeOrigin: true,
    selfHandleResponse: false,
  })

  //   res.status(200).json({ name: 'PATH - MATCH ALL HERE' })
}
