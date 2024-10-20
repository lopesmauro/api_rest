import { Model, Sequelize } from 'sequelize'
import connection from '../database/sync'

const Aluno = connection.define('Aluno', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  peso: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  altura: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'alunos',
  timestamps: true,
})


export default Aluno
