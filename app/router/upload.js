/**
 * @param {Egg.Application} app - egg application
 */
module.exports = ({ router, controller }) => {
  router.post('/upload/genKey', controller.upload.genKey)
}
