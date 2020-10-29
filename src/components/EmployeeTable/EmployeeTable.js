import { func } from "prop-types"
import React from "react"
import { render } from "react-dom"
import "./style.css"


function EmployeeTable() {
    return(
        <>
            <table id="employees" className="employeeTable">
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                <tr>
                    <td>Jimmy</td>
                    <td>945-683-1237</td>
                    <td>Jimmy3@gmail.com</td>
                    <td>4/9/1990</td>
                </tr>
            </table>
        </>
    )
}

export default EmployeeTable;