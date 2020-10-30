// import React from "react"
// import "./style.css"

// function Main () {
// return(


//     handleInputChange = event => {
//         // Getting the value and name of the input which triggered the change
//         const { name, value } = event.target;
    
//         // Updating the input's state
//         this.setState({
//           [name]: value
//         });
//       };
    
//       handleFormSubmit = event => {
//         // Preventing the default behavior of the form submit (which is to refresh the page)
//         event.preventDefault();
    
//         // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
//         alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
//         this.setState({
//           firstName: "",
//           lastName: ""
//         });
//       };

    <>
        <div className="search">
            <input 
            value={this.state.search}
            name="search"
            onChange={this.handleInputChange}
            type="text"
            placeholder="search"
            />
            <button onClick={this.handleFormSubmit}>Search</button>
        </div>
    </>
// )
// }



// export default Main;