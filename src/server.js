const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const expressSwagger = require("express-swagger-generator")(app)

const { defaultRoutes } = require("./api/default")

// Swagger options.
let swaggerDefinition = {
    info: {
        description: "This is a sample server for xico backend",
        title: "Swagger",
        version: "0.0.0",
    },
    host: `${process.env.HOST}:${process.env.PORT}`,
    basePath: "/",
    produces: ["application/json"],
    schemes: ["http", "https"],
}

// server options
let options = {
    swaggerDefinition: swaggerDefinition,
    basedir: __dirname, //app absolute path
    files: ["./**/**/*.js"], //Path to the API handle folder
}
expressSwagger(options)

// Server config.
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
)

// Routing.
app.use("", defaultRoutes)

module.exports = app
