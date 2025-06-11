// src/main.js
const formatCurrentDate = require("./date-formatter"); // 导入本地模块

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.getElementById("app");
  if (appDiv) {
    appDiv.textContent = `当前日期和时间：${formatCurrentDate()}`;
  }
});
