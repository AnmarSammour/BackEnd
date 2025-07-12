const geocode = require("./data/geocode");
const forecast = require("./data/forecast");

const country = process.argv[2];

if (!country) {
    console.error("Please provide a country name as an argument");
    process.exit(1);
}

console.log(`Searching for "${country}"...`);

geocode(country, (geoError, geoData) => {
    if (geoError) {
        console.error(geoError);
        process.exit(1);
    }

    console.log(`Found coordinates: Latitude ${geoData.latitude}, Longitude ${geoData.longtitude}`);

    forecast(geoData.latitude, geoData.longtitude, (weatherError, weatherData) => {
        if (weatherError) {
            console.error(weatherError);
            process.exit(1);
        }

        console.log("\nWeather Info:");
        console.log(`Location: ${weatherData.location}`);
        console.log(`Temperature: ${weatherData.temp_c}°C`);
        console.log(`Longitude: ${weatherData.longitude}`);
        console.log(`Latitude: ${weatherData.latitude}`);
    });
});