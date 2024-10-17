import { Sequelize } from 'sequelize'
import config from '../config/database.js'
import Aluno from '../models/Aluno.ts'

const connection = new Sequelize(config)

export default connection
