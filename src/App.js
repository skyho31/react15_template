var React = require('react');

// pattern 1 class
// class App extends React.Component {
//   render(){
//     return (
//       <div>hello world</div>
//     )
//   }
// }

// pattern 2 createClass
// var App = React.createClass({
//   render(){
//     return (
//       <div>hello world</div>
//     )
//   }
// })

// pattern 3 function Component

var App = (props) => (
  <div>hello world</div>
)

module.exports = App;
