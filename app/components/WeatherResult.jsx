var React = require('react');


//stateless component
var WeatherResult = ({temp, location}) => {
   return(
        <section id="weatherResult">
               <h1>The weather is {temp}C in {location}</h1>
        </section>
   )

}

module.exports = WeatherResult;
