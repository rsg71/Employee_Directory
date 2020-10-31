import React from "react"
import Header from "./components/Header/Header"
// import Main from "./components/Main/Main"
import EmployeeTable from "./components/EmployeeTable/EmployeeTable"
import employees from "./mockData.json"
// import TableRow from "./components/TableRow/TableRow"
import style from "./appstyle.css"

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
    const filteredEmployeeNames = filteredEmp.map(item => item.name)

    const sortedEmp = filteredEmployeeNames.sort();
    console.log('sorted coming up')
    console.log("sorted: ", sortedEmp)



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



  sortName = event => {
    //sort order toggle
    const sortedEmployees = employees.sort((a, b) => {


      const aFirstName = a.name.split(" ")[0]

      const bFirstName = b.name.split(" ")[0]
      if (this.state.sortOrder === "ASC") {
        if (aFirstName < bFirstName) {
          return -1;
        } else if (aFirstName > bFirstName) {
          return 1;
        } else {
          return 0
        }
      } else {
        if (aFirstName > bFirstName) {
          return -1;
        } else if (aFirstName < bFirstName) {
          return 1;
        } else {
          return 0
        }
      }




    })
    if(this.state.sortOrder === "ASC") {
      this.setState({sortOrder: "DSC"})
    } else if (this.state.sortOrder === "DSC") {
      this.setState({sortOrder: "ASC"})
    }
    this.setState({ employees: sortedEmployees })

  }




  render() {

    //duplicate of the filtered names based on search ****why does this go here?
    const searchTerm = this.state.search;
    console.log(searchTerm)


    const filteredEmp = employees.filter(item => item.name.includes(searchTerm))
    console.log(filteredEmp)

    //duplicate of the filtered names based on Sort Order ****why does this go here?
    const filteredEmployeeNames = filteredEmp.map(item => item.name)

    const sortedEmp = filteredEmployeeNames.sort();
    console.log('sorted coming up')
    console.log("sorted: ", sortedEmp)

    return (
      <div>
        <Header></Header>
        <br></br>
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
        <br></br>
        <table id="employeeTable" style={style}>
          <tr>
            <th>Name
              {" "}
            <button onClick={this.sortName}>
                Sort
              </button></th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
          {filteredEmp.map(user =>
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.DoB}</td>
            </tr>
          )}

        </table>

      </div>
    );
  }
}

export default App;
