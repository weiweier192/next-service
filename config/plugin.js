'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  // 是否开启
  enable: true,
  // 对应的依赖
  package: 'egg-mysql'
}