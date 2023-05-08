class AdminApp {
  constructor(app, ctx, config) {
    ctx.guild().command('genshin.atlas.update', {authority: 1})
      .shortcut(/^#*(原神|崩铁)?图鉴(强行)?(强制)?升级$/)
      .action(async ({session, options}, input) => {
        new app.admin(ctx, session).update()
      })
  }
}

module.exports = AdminApp
