const router = require("express").Router()
const logger = require("./../../configurations/logger")

/**
 * @route GET /
 * @group Default - Default api response.
 * @produces application/json
 * @returns {string} 200 - Just a basic response.
 * @returns {Error}  500 - Unexpected error
 */
router.get("/", (req, response) => {
    logger.info("Cookies:", req.cookies)
    logger.info("Signed Cookies: ", req.signedCookies)

    response.json({
        message: "Message service is running !",
    })
})

router.get("/banana", (request, response) => {
    response.json({
        message: "B" + "a" + +"a",
    })
})

router.all("*", (request, response) => {
    response.status(404).json({
        error: "not found",
    })
})

module.exports = router
