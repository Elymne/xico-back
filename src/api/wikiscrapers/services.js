const cheerio = require("cheerio")
const logger = require("./../../configurations/logger")
const axios = require("axios")

const scrapper = require("./scrapper")

const getDefinition = async () => {
    axios
        .get("https://fr.wiktionary.org/wiki/morse")
        .then((response) => {
            const $ = cheerio.load(response.data)
            logger.info(scrapper.getEtymology($))
        })
        .catch((err) => {
            logger.info(err)
        })

    return new Promise((resolve) => {
        resolve("lel")
    })
}

module.exports = { getDefinition }
