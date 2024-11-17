const { defineConfig } = require("@vue/cli-service");
const { getEntries } = require("./config/helper");
const pages = getEntries()
console.log(111, pages)
module.exports = defineConfig({
  transpileDependencies: true,
  pages,
  
});
