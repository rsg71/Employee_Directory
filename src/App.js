import React from "react"
import Header from "./components/Header/Header"
// import Main from "./components/Main/Main"
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
import employees from "./employees.json"



class App extends React.Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    employees: employees,
    sortOrder: "ASC"
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    //filter 
    // const filteredEmployees = 

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName}`);
    this.setState({
      firstName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Header></Header>
        <p>
          Hello {this.state.firstName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
         
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <EmployeeTable></EmployeeTable>
      </div>
    );
  }
}

export default App;
