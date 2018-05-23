const opn = require('opn');
const term = require('terminal-kit').terminal;

module.exports = function articleList(articles) {
    term.fullscreen()
    term.bgWhite().blue().singleColumnMenu(articles.map(article => article.title), [], (e, res) => {
        opn(articles[res.selectedIndex].href).then(() => articleList(articles))
    })
}