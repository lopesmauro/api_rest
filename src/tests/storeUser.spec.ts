import { describe, it } from "node:test"
import request from 'supertest'
import app from "../index.ts"

describe('UserController', () => {
  it('', async () => {
    await request(app).post('/user/').send({
      name: "Joe Butler",
      email: 'niuwsen@wezabju.pt',
      password: '418s7s5w2f44fr7',
    })
  })
})
