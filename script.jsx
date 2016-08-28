

var react = require('react');
var reactdom = require('react-dom');


var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>
        Hello World!
      </div>
    )
  }
});

React.render(<HelloWorld/>,document.getElementById("root"));
