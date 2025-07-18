const request = require("request")

const forecast = (latitude, longtitude, callback) => {

    const url = "https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=" + latitude + "," + longtitude

    request({ url: url, json: true }, (error, response) => {

        if (error) {
            callback("unable to connect weather api service", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, {
                location: response.body.location.name,
                temp_c: response.body.current.temp_c,
                longitude: longtitude,
                latitude: latitude
            })
        }
    })
}

module.exports = forecast