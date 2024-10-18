import { Sequelize } from 'sequelize'
import config from '../config/databaseCode.ts'

const connection = new Sequelize(config)

export default connection
