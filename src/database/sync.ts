import { Sequelize } from 'sequelize'
import config from '../config/database.ts'

const connection = new Sequelize(config)

export default connection
