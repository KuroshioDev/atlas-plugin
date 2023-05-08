const plugin = require( '../../lib/plugins/plugin.js')
const { pluginResources } = require( "../model/path.js")

class atlasHelp extends plugin {
  constructor () {
    super({
      name: 'Atlas图鉴帮助',
      dsc: 'Atlas图鉴的帮助',
      event: 'message',
      priority: 9,
      rule: [{
        reg: '(#|\\\*)?(图鉴|wiki|百科|Atlas)(帮助|菜单|功能)',
        fnc: 'atlasHelp'
      }]
    })
  }

  async atlasHelp () {
    await this.reply(segment.image('file://'+pluginResources+'/img/help.png'))
    return false
  }
}

module.exports = atlasHelp
