import { func } from "prop-types"
import React from "react"
import { render } from "react-dom"
import "./style.css"


function EmployeeTable() {
    return(
        <>
            <table id="employees" id="employeeTable">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                

                {/* <tr>
                    <td>Jimmy Miller</td>
                    <td>(750) 983-7329</td>
                    <td>Jimmy3@gmail.com</td>
                    <td>4/9/1990</td>
                </tr>
                <tr>
                    <td>Madison Visco</td>
                    <td>(277) 490-1918</td>
                    <td>mbalazin@yahoo.com</td>
                    <td>5/5/1985</td>
                </tr>
                <tr>
                    <td>Fred Williams</td>
                    <td>(898) 780-3863</td>
                    <td>raines@aol.com</td>
                    <td>12/2/2000</td>
                </tr> */}
            </table>
        </>
    )
}

export default EmployeeTable;