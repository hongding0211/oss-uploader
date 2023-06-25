'use strict'

const { app, assert } = require('egg-mock/bootstrap')

describe('test/app/controller/upload.test.js', () => {
  it('POST /upload', async () => {
    const fileName = 'foo.jpg'
    return app
      .httpRequest()
      .post('/upload/genKey')
      .send({
        fileName,
      })
      .expect(200)
      .then((res) => {
        assert(res.body.success, true)
        assert.deepEqual(res.body.data, {
          fileName,
        })
      })
  })
})
