const { pluginName } = require("./model/path.js")
const fs = require("fs")
const common = require("../lib/common/common")
const {apps} = require("../miao-plugin/apps");

function  init() {
  let apps = {}
  const files = fs.readdirSync(`${common.getPluginsPath()}/${pluginName}/apps`).filter((file) => file.endsWith('.js'))
  for (let file of files) {
    let name = file.replace('.js', '')
    apps[name] = (require(`./apps/${file}`))
  }
  return apps
}

module.exports = init
