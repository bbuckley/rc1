
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

// Date.age_by_year(start_age, end_age){
//   var d1 = new Date(start_age);
//   var d2 = new Date(end_age);
//
//
//   var i1 = Year(d1);
//   var i2 = Year(d2);
//   return i2 - i1;
// }

var xxx = 888;

var Hello = React.createClass({

  render: function(){
    return (
      <div>
        {this.props.name}.  I was born on {this.props.dob} ({xxx} years old).
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
