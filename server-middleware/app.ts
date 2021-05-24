import express, { Application, Request, Response } from 'express'
import consola from 'consola'

import { BasicType } from '@/types/BasicType.type'

const app: Application = express()

app.get('/v1/users', (req: Request, res: Response) => {
  consola.info('/v1/users req.query', req.query)

  const data: Array<BasicType> = [
    { id: 1, name: 'u1' },
    { id: 2, name: 'u2' },
  ]

  res.json(data)
})

app.get('/v1/tasks', (req: Request, res: Response) => {
  consola.info('/v1/tasks req.query', req.query)

  const data: Array<BasicType> = [
    { id: 1, name: 't1' },
    { id: 2, name: 't2' },
  ]

  res.json(data)
})

export default app
