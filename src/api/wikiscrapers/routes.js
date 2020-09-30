const router = require("express").Router()
const dogService = require("./services")

router.get("/test", (request, response) => {
    response.json({
        message: dogService.getDefinition(),
    })
})

module.exports = router
