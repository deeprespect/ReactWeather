var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({

  onSearch: function(e){
    e.preventDefault();
    alert("not wired yet");
  },

  render: function()
  {
      return(
        <div className="top-bar">
              <div className="top-bar-left">
                  <ul className="menu">
                      <li>  <IndexLink to="/" activeclassNameName="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink></li>
                      <li> <Link to="about" activeclassNameName="active" activeStyle={{fontWeight:'bold'}}> About </Link></li>
                      <li>  <Link to="examples" activeclassNameName="active" activeStyle={{fontWeight:'bold'}}> Examples </Link></li>
                  </ul>
              </div>

        <div class="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
                <li>
                   <input type="seach" placeholder="Search Weather" />
                </li>
                <li>
                   <input type="submit" className="button" value="Get Weather"/>
                </li>
            </ul>
          </form>
       </div>
     </div>

      )
  }
});

module.exports = Nav;
