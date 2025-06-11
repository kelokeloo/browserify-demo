// src/date-formatter.js
function formatCurrentDate() {
  const moment = require("moment"); // 在浏览器端使用 CommonJS 模块
  return moment().format("YYYY年MM月DD日 HH:mm:ss");
}

module.exports = formatCurrentDate; // 导出函数
