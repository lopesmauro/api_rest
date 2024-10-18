import { Model, DataTypes, Sequelize } from 'sequelize'
import connection from '../database/sync.ts'

class User extends Model {
  declare id: number
  declare nome: string
  declare sobrenome: string
  declare email: string
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: connection,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: true,
})

export default User
