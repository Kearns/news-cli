const argv = require('yargs').argv
const myGoogleNews = require('my-google-news');
const searchTerms = argv._;
const nextCounter = 0;

module.exports = function getNewsData(query, resultLength) {
    const googleQuery = query.length ? query : 'Test'; //Search query. If no query passed use empty string (grabs latest news)
    myGoogleNews.resultsPerPage = resultLength < 99 ? resultLength : 99; // max 100 before captcha

    return new Promise(function (resolve, reject) {
        myGoogleNews(googleQuery, function (err, res) {
            if (err) reject(err);
            resolve({
                articles: res.links,
                next: res.next
            });
        });
    })
}