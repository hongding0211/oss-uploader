'use strict'

const { app } = require('egg-mock/bootstrap')

describe('test/app/controller/home.test.js', () => {
  it('should GET /', async () => {
    return app.httpRequest().get('/').expect(401)
  })
})
