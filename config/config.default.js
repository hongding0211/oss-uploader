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

  config.security = {
    ...config.security,
    csrf: {
      enable: false,
    },
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1680087732091_2813'

  // add your middleware config here
  config.middleware = []

  const oss = {
    accessKeyId: 'LTAI5t5avHqv2ycLph8BbVdR',
    accessKeySecret: 'awCyxNxOeCj1n5sFB3Cxkq4wtTBRlf',
    region: 'oss-cn-shanghai',
    bucket: 'ltd-hong97-imgs',
  }

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
    oss,
  }
}
