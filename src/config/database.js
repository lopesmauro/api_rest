import 'dotenv/config'

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, } = process.env
const port = parseInt(DB_PORT || "3306", 10);

const config = {
  dialect: 'mysql',
  host: DB_HOST,
  port: port,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
  },
}

export default config
