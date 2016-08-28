
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
        {this.props.name}.  I was born on {this.props.dob}.
      </div>
    )
  }
});
// React.render(<Hello name="Joe"/>, document.getElementById("root"));

var ThreeHello = React.createClass({
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
 // React.render(<ThreeHellos/>, document.getElementById("root"));

var ThreeHelloDob = React.createClass({
  render: function(){
    return (
      <div>
        <Hello name="Karl" dob='12/2/1960'/>
        <Hello name="David" dob='11/12/1957'/>
        <Hello name="Jim" dob='6/30/1964'/>
      </div>
    )
  }
});
React.render(<ThreeHelloDob/>, document.getElementById("root"));
