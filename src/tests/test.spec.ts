import request from 'supertest'
import app from "../index.ts"
import { describe, expect, it } from '@jest/globals'

describe('testRoute', () => {
  it('Isso deve testar a rota de teste.', async () => {
    const response = await request(app)
    .get('/')
    expect(response.status).toBe(200)
  })
})

