import { Sequelize } from 'sequelize'
import config from '../config/databaseCode.ts'
import { Options } from 'sequelize'
const sequelizeOptions:Options = config

const connection = new Sequelize(sequelizeOptions)

export default connection
