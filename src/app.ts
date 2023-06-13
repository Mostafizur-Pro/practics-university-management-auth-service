import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRoute } from './modules/user/user.route'

const app: Application = express()

// middleware
app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', UserRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
