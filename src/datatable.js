import React from "react";
import { table } from "./donneestable";
export function Implement() {
    return (<> {
        table.map(e => (
        <tr>
            <td>{e.Name}</td>
            <td>{e.Position}</td>
            <td>{e.Name}</td>
            <td>{e.Office}</td>
            <td>{e.StartDate}</td>
            <td>{e.Salary}</td>
        </tr>))}
    </>
    )
}