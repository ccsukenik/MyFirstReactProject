﻿//Create a React application that has the following functionality:
//On top, there should be three textboxes (firstname, lastname, age), and a button. 
//When the button is clicked, the person should get added to a table underneath
//the buttons, and the textboxes should get cleared out.
//One additional twist we'll add is that for each row on the table where the
//person is older than 65, that row should be highlighted in red. 
//(<tr class="table-danger">...</tr>).
// Finally, on top of the page, there
//should also be a Clear People button that when clicked, should clear out the 
//the people in the table.

//This application should have three components: PeopleTable, PersonForm and PersonRow
//PeopleTable should be the top level component that has the array of persons in state, 
//and renders a <table>. Within the table body, you should render a PersonRow component
//for each person in the array, and pass in that person as a prop. 
//PersonRow should display a single row of a single person.

//PersonForm should have the textboxes as well as the Add and Clear People buttons. 

//In React, when creating tables, thead and tbody are NOT optional. They must both be there
//<table>
//<thead>
    //<tr>
        //<th>....
    //</tr>
//</thead>
//<tbody>
//all of your <tr>s....
//</tbody>
//</table>

import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//import PersonForm from './PersonForm';
import PeopleTable from './PeopleTable';

ReactDom.render(<PeopleTable />, document.getElementById('root'));