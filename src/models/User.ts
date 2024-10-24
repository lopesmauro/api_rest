import sequelize, { Sequelize, Model } from 'sequelize'
import bcryptjs from 'bcryptjs'
import connection from '../database/sync'


const User = connection.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 255],
        msg: 'Campo nome deve ter entre 3 e 255 caracteres.'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '',
    unique: {
      name: 'unique_email',
      msg: "Email já existe",
    },
    validate: {
      isEmail: {
        msg: 'Email inválido.'
      }
    }
  },
  password_hash: {
    type: Sequelize.STRING,
    defaultValue: '',
    allowNull: false,
  },
  password: {
    type: sequelize.VIRTUAL,
    defaultValue: '',
    validate: {
      len: {
        args: [6, 50],
        msg: 'A senha precisa ter entre 6 e 50 caracteres.'
      }
    }
  }
}, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
})

User.addHook('beforeSave', async (user: any) => {
  user.password_hash = await bcryptjs.hash(user.password, 8)
})

export default User
