/**
 * @param {Egg.Application} app - egg application
 */
module.exports = ({ router, controller }) => {
  router.get('/upload/genKey', controller.upload.genKey)
}
