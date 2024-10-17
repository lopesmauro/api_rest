import { Model, DataTypes } from 'sequelize'
import connection from '../database/sync.ts'

class Aluno extends Model {
  declare id: number
  declare nome: string
  declare sobrenome: string
  declare email: string
  declare idade: number
  declare peso: number
  declare altura: number
  declare created_at: Date
  declare updated_at: Date
}

Aluno.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  peso: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  altura: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'Aluno',
  tableName: 'alunos',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})

export default Aluno
