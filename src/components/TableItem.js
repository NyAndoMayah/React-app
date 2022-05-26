import React from "react";
export function TableItem(props) {
    return (
        <tr>
            <td>{props.Name}</td>
            <td>{props.Position}</td>
            <td>{props.Office}</td>
            <td>{props.Age}</td>
            <td>{props.StartDate}</td>
            <td>{props.Salary}</td>
        </tr>
    );
}