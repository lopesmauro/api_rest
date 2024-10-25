import sequelize from 'sequelize'
import connection from '../database/sync.ts'

const Aluno = connection.define('Aluno', {
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  peso: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
  altura: {
    type: sequelize.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'alunos',
  timestamps: true,
})

// Aluno.sync() Create the table if doesn't exist
export default Aluno
