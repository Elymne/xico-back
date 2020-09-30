const cheerio = require("cheerio")
const axios = require("axios")

const scrapperFR = require("./scrapperFR")

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
        name: scrapperFR.getName($),
        info: scrapperFR.getSingularPluralPronunciation($),
        etymologies: scrapperFR.getEtymology($),
    }
}

module.exports = { getDefinition }
