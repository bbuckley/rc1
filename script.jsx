

// var react = require('react');
// var reactdom = require('react-dom');

var Hello = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

React.render(<Hello/>, document.getElementById("root"));
