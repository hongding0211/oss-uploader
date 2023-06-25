'use strict'

const BaseController = require('./base')

class UploadController extends BaseController {
  async genKey() {
    this.ctx.validate(
      {
        fileName: { type: 'string' },
        contentType: { type: 'string', required: false },
        app: { type: 'string', required: false },
      },
      this.ctx.request.body
    )

    const { fileName, app, contentType } = this.ctx.request.body

    if (!fileName.match(/(.+)(\.\w+)/)) {
      this.error('Invalid file name.')
      return
    }

    const {
      filePath,
      fileName: newFileName,
      url,
    } = this.service.upload.genKey({ fileName, contentType, app })

    this.success({
      filePath,
      fileName: newFileName,
      url,
    })
  }
}

module.exports = UploadController
