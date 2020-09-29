const app = require("./server")
const logger = require("./configurations/logger")
const sequelize = require("./configurations/db")
const http = require("http")

const resetDB = process.env.DB_FORCE || false
const port = process.env.PORT || 8080

sequelize.sync({ force: resetDB }).then(() => {
    const server = http.createServer(app)

    server.listen(port, () => {
        logger.info(`App running on port ${port}.`)
    })
})
