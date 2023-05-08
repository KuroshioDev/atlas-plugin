const init = require('../index.js')
const AdminApp = require("./entrace/admin");
const AtlasApp = require("./entrace/atlas");

class AtlasPlugin {
  constructor(ctx, config) {
    // ready
    ctx.on("ready", async ()=>{
      this.apps = await init()
      new AdminApp(this.apps,ctx,config)
      new AtlasApp(this.apps,ctx,config)
    })
  }
}

exports.default = AtlasPlugin
exports.name = 'atlas-plugin'
