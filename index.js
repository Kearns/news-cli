#!/usr/bin/env node
const argv = require('yargs').argv;
const term = require('terminal-kit').terminal;
const getNewsData = require('./getNewsData');
const articleList = require('./articleList');
const query = argv._;
const resultLength = argv.results ? argv.results : 10;

(async () => {
    const {
        articles,
        next
    } = await getNewsData(query, resultLength)

    articleList(articles);

    term.on('key', (name, matches, data) => {
        switch(name) {
            case 'CTRL_C':
            case 'ESCAPE':
                term.reset();
                process.exit();
                break;
            default:
                break;
        }
    });
})()