const express = require('express');
const router = express.Router();
const geocode = require('../tools/geocode');
const forecast = require('../tools/forecast');

/* Home route */
router.get('/', (req, res) => {
  res.render('index');
});

/* Weather route */
router.get('/weather', (req, res) => {
  const country = req.query.country;

  if (!country) {
    return res.send({ error: 'You must provide a country name' });
  }

  geocode(country, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return res.send({ error: 'UNABLE TO FIND LOCATION' });
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return res.send({ error: 'UNABLE TO FIND WEATHER' });
      }

      res.send({
        country: location || country.toLowerCase(),
        latitude,
        longitude,
        forecast: forecastData
      });
    });
  });
});

module.exports = router;