/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1680087732091_2813'

  // add your middleware config here
  config.middleware = []

  const token = {
    tokenKey: '_1680087732091_2813',
  }

  const traffic = {
    windowSize: 60 * 1000,
    maxRequest: 1000,
  }

  return {
    ...config,
    token,
    traffic,
  }
}
