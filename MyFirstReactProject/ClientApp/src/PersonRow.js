import React from "react"
import { render } from "react-dom"

class PersonRow extends React.Component{
    render() {
       const { person } = this.props;

       return (
        <div className={person.age >= 65 ? 'table-danger' : ''} >
            <tr >
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>  
            </tr>
        </div> 
       );
    }
}

export default PersonRow