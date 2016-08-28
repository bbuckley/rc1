
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


import React from 'react';
import ReactDOM from 'react-dom';


var Hello = React.createClass({

  ages: function (d1, d2) {
    return [new Date(d1), new Date(d2)];
  },

  // age: function (d1, d2) {
  //   return d2.getFullYear() - d1.getFullYear();
  // },

  age_hir: function () {
    // va d1 = new Date(this.props.dob);
    // va d2 = new Date(this.props.doe);
  return (new Date(this.props.doe)).getFullYear() - (new Date(this.props.dob)).getFullYear();
  },

  render: function(){
    return (
      <div>
       {this.props.name}.  I was born on {this.props.dob} ({this.age_hir()} years old).
        <br/>
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
        <Hello name="Karl"    dob='12/2/1960'  doe='1/1/1984' crd='1/2/2020'/>
        <Hello name="David"   dob='11/12/1957' doe='6/16/1982' crd=''/>
        <Hello name="Ralph"   dob='10/10/1962' crd=''/>
        <Hello name="Jim"     dob='6/30/1964'  doe='7/1/1987' crd=''/>
        <Hello name="Unknown" crd=''/>
        <Hello name="Brian"   dob='12/11/1958' doe='6/30/1992' crd=''/>
      </div>
    )
  }
});
// React.render(<ThreeHelloDob/>, document.getElementById("root"));

var ThreeListHello = React.createClass({


  render: function(){
    return (
      <div>
        <Hello name="Karl"    dob='12/2/1960'  doe='1/1/1984' crd='1/2/2020'/>
        <Hello name="David"   dob='11/12/1957' doe='6/16/1982' crd=''/>
        <Hello name="Ralph"   dob='10/10/1962' crd=''/>
        <Hello name="Jim"     dob='6/30/1964'  doe='7/1/1987' crd=''/>
        <Hello name="Unknown" crd=''/>
        <Hello name="Brian"   dob='12/11/1958' doe='6/30/1992' crd=''/>
      </div>
    )
  }
});
//ReactDOM.render(<ThreeListHello/>, document.getElementById("root"));

// var HelloState = React.createClass({
export default class HelloState extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "Buckley",
      dob: '12/11/1958',
      doe: '6/30/1992'
    }
  }

  dob(){
    return new Date(this.state.dob);
  }
  doe(){
    return new Date(this.state.doe);
  }

  age(){
    return this.doe().getFullYear() - this.dob().getFullYear() ;
  }

  render(){
    return (
      <div>
       {this.state.name}.  I was born on {this.state.dob} and hired on {this.state.doe}.  Age is {this.age()}.
      </div>
    )
  }

}
ReactDOM.render(<HelloState crd='1/1/2020'/>, document.getElementById("root"));
