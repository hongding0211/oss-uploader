'use strict'

const BaseController = require('./base')

class UploadController extends BaseController {
  genKey() {
    this.success({})
  }
}

module.exports = UploadController
