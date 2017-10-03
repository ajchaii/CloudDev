const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);

  } else {
    console.log(results.address);
    weather.getWeather(results.latitude, results.longtitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);

      } else {
        var tempCel = (weatherResults.temperature - 32)*(5/9);
        var apprtempCel = (weatherResults.apparentTemperature - 32)*(5/9);
        console.log(`It's currently ${tempCel}. It feels like ${apprtempCel}`);
        // console.log(JSON.stringify(weatherResults, undefined, 2));

      }
    });
  }
});
// lat, lng, callback
