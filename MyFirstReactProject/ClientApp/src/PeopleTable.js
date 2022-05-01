import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
    
        state = {
            people: [],
            person: {}
        }
        
        onFirstNameChange = e => {
            const { lastName, age } = this.state.person;
            this.setState({ person: {firstName: e.target.value, lastName, age} });
        }

        onLastNameChange = e => {
            const { firstName, age } = this.state.person;
            this.setState({person: {firstName, lastName: e.target.value, age} })
        }
       
        onAgeChange = e => {
            const { firstName, lastName } = this.state.person;
            this.setState({person: {firstName, lastName, age: e.target.value} })
        }

        onAddClick = () => {
            const { people, person } = this.state;
            const copy = [...people, person];
            this.setState = ({people: copy,
                person: { firstName: '', lastName: '', age: '', }
            })
        }

        onClearClick = () => {
            this.setState({ people: [] });
        }
        
        render() {
        return (         
            <div className="container" style={{ marginTop: 60 }}>
            <PersonForm
                person={this.state.person}
                onFirstNameChange={this.onFirstNameChange}
                onLastNameChange={this.onLastNameChange}
                onAgeChange={this.onAgeChange}
                onAddClick={this.onAddClick}
                onClearClick={this.onClearClick} />
            <PersonRow people={ this.setState.people } />           
        </div>    
        )
    }
}

export default PeopleTable;
