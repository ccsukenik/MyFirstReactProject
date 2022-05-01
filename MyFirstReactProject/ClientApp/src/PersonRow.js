import React from "react";
import { render } from "react-dom";
import PeopleTable from "./PeopleTable";

class PersonRow extends React.Component {
    generateTable = (people) => {
      if(people.length === 0){
        return <h1>Add people now!!!</h1>
      }
        return (<div>
            <table className='table table-hover table-striped table bordered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map(this.generateRow)}
                </tbody>
            </table>
        </div>);
    }

    generateRow = ({ firstName, lastName, age }, key) => {
        let className = '';
        if (age > 65) {
            className = 'table-danger';
        }
        return (
            <tr className={className} key={key}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
            </tr>
        );
    }

    render() {
        const people = this.props.people;
        return this.generateTable(people);
    }
}

export default PersonRow;