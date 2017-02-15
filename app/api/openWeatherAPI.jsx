var axios = require("axios");
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=d31460c25a21d2034f509907d5b4e575&units=imperial&q=";

module.exports =
{
    getTemp: function(location)
    {
       return axios.get(OPEN_WEATHER_MAP_URL+location)
        .then(function (response) {
          return(response.data.main.temp);
        })
        .catch(function (error) {
          return(error.data.message);
        });
    }
}
