const getName = ($) => {
    return $("#firstHeading").text()
}

const getSingularPluralPronunciation = ($) => {
    let result = {
        singular: null,
        plural: null,
        pronunciation: null,
    }

    $("table").each((index, element) => {
        if (index === 0) {
            $(element)
                .find("tbody tr")
                .each((index, element) => {
                    if (index === 1) {
                        $(element)
                            .find("td")
                            .each((index, element) => {
                                if (index === 0)
                                    result.singular = $(element)
                                        .text()
                                        .substring(0, $(element).text().length - 2)
                                if (index === 1)
                                    result.plural = $(element)
                                        .text()
                                        .substring(0, $(element).text().length - 2)
                            })
                    }

                    if (index === 2)
                        result.pronunciation = $(element)
                            .find("td")
                            .text()
                            .substring(0, $(element).find("td").text().length - 2)
                            .substring(1)
                })
        }
    })

    return result
}

const getEtymology = ($) => {
    const result = []

    $("dl").each((index, element) => {
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

module.exports = { getName, getSingularPluralPronunciation, getEtymology }
