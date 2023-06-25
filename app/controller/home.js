'use strict'

const BaseController = require('./base')

class HomeController extends BaseController {
  async index() {
    this.success({})
  }
}

module.exports = HomeController
