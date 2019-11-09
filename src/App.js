import React from "react";
import "./App.css";

// class Student extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "rahul",
//       roll: this.props.roll
//     };
//   }
//   handleClick = () => {
//     this.setState({ name: "minhaj", roll: 202 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           {" "}
//           my name is {this.state.name} amd my roll number is {this.state.roll}
//         </h1>
//         <button onClick={this.handleClick}>Click Me</button>
//       </div>
//     );
//   }
// }

class Student extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    city: this.props.city,
    hobby: this.props.hobby
  };
  // second method user it accept function in aurgment
  handleClick = () => {
    this.setState((state, props) => {});
  };

  render() {
    return (
      <div>
        <h1>
          my name is {this.state.name} and i belong to {this.state.city}. and i
          am {this.state.age} i love to play {this.state.hobby}
          <button onClick={this.handleClick}>
            Click here to change the name
          </button>
        </h1>
      </div>
    );
  }
}

export default Student;
