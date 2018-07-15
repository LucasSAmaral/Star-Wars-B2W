// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementCount('img', 1)
      .waitForElementVisible('.content__menu', 9000)
      .click('#play-game')
      .waitForElementVisible('.planets__content', 2000)
      .click('#aboutme')
      .waitForElementVisible('.about__content', 2000)
      .end()
  }
}
