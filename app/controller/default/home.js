'use strict'
// 编写前台首页所需要的api接口
const Controller = require('egg').Controller

class HomeController extends Controller {
    async index() {
        this.ctx.body = '客户端api接口'
    }
}
module.exports = HomeController