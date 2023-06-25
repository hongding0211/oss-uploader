const dayjs = require('dayjs')

function genFilePath(fileName, app = 'common') {
  const m = fileName.match(/(.+)(\.\w+)/)
  const name = `${m[1]}_${Date.now().toString(36)}${m[2]}`
  const path = `/${app}/${dayjs().format('YYYYMM')}/${name}`
  return {
    name,
    path,
  }
}

module.exports = {
  genFilePath,
}
