import React from "react";
export function Rows(props){
    const {Name,Position,Office, Age,Start_date,Salary} = props;
    return(
        <tr>
             <td>{Name}</td>
            <td>{Position}</td>
            <td>{Office}</td>
            <td>{Age}</td>
            <td>{Start_date}</td>
            <td>{Salary}</td> 
        </tr>
    );
}