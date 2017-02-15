var React = require('react');

/*
var About = React.createClass({

  render: function()
  {
      return(
          <h1> This is the About app</h1>
      )
  }
});
*/

//stateless component
var About = (props) =>  {
  return(
    <div>
    <h1> Welcome to the about page</h1>
    <p> This is the about section </p>
  </div>
)}


module.exports = About;
