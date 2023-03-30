const Router = require('koa-router')
const { create, avatarInfo } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware.js')

const userRouter = new Router({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)
userRouter.get('/:userId/avatar', avatarInfo)

module.exports = userRouter
