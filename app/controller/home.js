'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const {ctx} = this
    ctx.body = '<h2>Aweiweier192 Blog</h2>'
  }
}

module.exports = HomeController;
