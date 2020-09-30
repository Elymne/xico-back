const router = require("express").Router()
const service = require("./services")

router.get("/test", (_, response) => {
    service
        .getDefinition()
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(404).send(err))
})

module.exports = router
