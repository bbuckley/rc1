
// var Hello = React.createClass({
//   render: function(){
//     return (
//       <div>
//         Hello World
//       </div>
//     )
//   }
// });
//
// React.render(<Hello/>, document.getElementById("root"));

var Hello = React.createClass({
  render: function(){
    return (
      <div>
        Hello {this.props.name}.  React is cool.
      </div>
    )
  }
});
// React.render(<Hello name="Joe"/>, document.getElementById("root"));

var ThreeHellos = React.createClass({
  render: function(){
    return (
      <div>
        <Hello name="Joe"/>
        <Hello name="David"/>
        <Hello name="Jim"/>
      </div>
    )
  }
});
React.render(<ThreeHellos/>, document.getElementById("root"));
