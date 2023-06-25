'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  auth: {
    enable: false,
    package: '@hong97/egg-auth',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
}
