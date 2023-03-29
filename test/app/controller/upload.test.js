'use strict'

const { app } = require('egg-mock/bootstrap')

describe('test/app/controller/upload.test.js', () => {
  it('GET /upload', async () => {
    return app.httpRequest().get('/upload').expect()
  })
})
