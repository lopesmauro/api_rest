import { Sequelize, Model } from 'sequelize'
import connection from '../database/sync'

const User = connection.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
})

export default User
