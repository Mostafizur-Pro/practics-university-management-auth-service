import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { logger } from './share/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`Database is Connected successfully`)
    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    logger.error('Failed to connection in database')
  }
}

boostrap()
