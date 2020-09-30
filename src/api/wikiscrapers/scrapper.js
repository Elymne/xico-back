const getEtymology = ($) => {
    const result = []

    $("div #content #bodyContent #mw-content-text div dl").each((index, element) => {
        if (index === 0) {
            $(element)
                .find("dd")
                .each((index, element) => {
                    result[index] = $(element).text()
                })
        }
    })

    return result
}

module.exports = { getEtymology }
