const axios = require('axios')

const getDefinitons = async (langaguage, word) => {
    return axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/${langaguage}/${word}`)
        .then((response) => response)
        .catch((err) => err)
}

module.exports = { getDefinitons }
