const cheerio = require("cheerio")
const logger = require("./../../configurations/logger")
const axios = require("axios")

const scrapper = require("./scrapper")

const getDefinition = async () => {
    return axios
        .get("https://fr.wiktionary.org/wiki/morse")
        .then((response) => {
            const $ = cheerio.load(response.data)
            return factory($)
        })
        .catch((err) => err)
}

const factory = ($) => {
    return {
        etymologies: scrapper.getEtymology($),
    }
}

module.exports = { getDefinition }
