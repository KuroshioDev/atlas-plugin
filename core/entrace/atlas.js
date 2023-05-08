class AtlasApp {
  constructor(app, ctx, config) {
    ctx.guild().command('genshin.atlas.atlas', {authority: 1})
      .shortcut(/^(\*)*(.*)图鉴/)
      .action(async ({session, options}, input) => {
        new app.atlas(ctx, session).atlas()
      })
  }
}

module.exports = AtlasApp
