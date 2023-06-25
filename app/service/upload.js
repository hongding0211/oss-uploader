'use strict'

const OSS = require('ali-oss')
const { Service } = require('egg')
const { genFilePath } = require('../utils/pathHelper')

class UploadService extends Service {
  constructor(...args) {
    super(...args)

    this.store = new OSS({
      ...this.config.oss,
    })
  }

  genKey({ fileName, contentType, app = 'common' }) {
    const { path, name } = genFilePath(fileName, app)
    return {
      url: this.store.signatureUrl(path, {
        method: 'PUT',
        'Content-Type': contentType,
      }),
      filePath: this.store.generateObjectUrl(path),
      fileName: name,
    }
  }
}

module.exports = UploadService
