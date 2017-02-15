var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult= require('WeatherResult');
var openWeatherAPI= require('openWeatherAPI');


var Weather = React.createClass({

  getInitialState: function()
  {
    return {
          location:null,
          temp: null,
          isLoading: false
    }

  },

  searchHandler: function(location)
  {
    var temp;
    var _root = this;

    this.setState({
      isLoading:true
    })

    openWeatherAPI.getTemp(location).then(
      function(temp)
      {
        _root.setState({
          location:location,
          temp: temp,
          isLoading: false
        })
      },
      function(error){
        _root.setState({isLoading: false})
      });
  },

  render: function()
  {
      var {isLoading, temp, location} = this.state;

      function renderMessage()
      {
        if(isLoading) return <h1>Fetching data....</h1>
        else if(temp && location) return <WeatherResult location={location} temp={temp}/>
      }

      return(
        <div>
          <h1>Get Weather</h1>
          <WeatherForm onSearch={this.searchHandler}/>
          {renderMessage()}
        </div>
      )
  }
});

module.exports = Weather;
