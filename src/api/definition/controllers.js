const service = require('./services')

const getDefinitions = (request, response) => {
    service
        .getDefinition(request.params.language, request.params.word)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(404).send(err))
}

module.exports = { getDefinitions }
