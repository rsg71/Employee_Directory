import React from "react"
import Header from "./components/Header/Header"
// import Main from "./components/Main/Main"
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
import employees from "./employees.json"



//practice using filter on an array. Why isn't this working for the employees.json? Answer: because you had item.includes instead of item.name.includes


class App extends React.Component {
  // Setting the component's initial state
  state = {
    search: "",
    employees: employees,
    sortOrder: "ASC"
  };


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    //filter 
    // const filteredEmployees = [{}];


    //getting the filter down
    console.log(employees)

    //Question - why is my search term behind by one letter? *******
    const searchTerm = this.state.search;
    console.log(searchTerm)

  
    const filteredEmp = employees.filter(item => item.name.includes(searchTerm))
    console.log(filteredEmp)


    //Sort Order





    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

 

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("employees coming up")
    console.log(employees)

    
    // Clear `this.state.search`, clearing the inputs
    this.setState({
      search: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <Header></Header>
        <p>
          Hello {this.state.search}
        </p>
        <form className="form">
          <input
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
         
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <EmployeeTable>
          {/* <tableHead/> */}
          {/* employees.map(users => () {}) */}
          {/* <tableRow/> */}
        </EmployeeTable>
      </div>
    );
  }
}

export default App;
