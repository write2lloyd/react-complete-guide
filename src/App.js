import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {id:'asd', name:"Lloyd", age: 40},
      {id:'asd1', name:"Ameena", age: 34},
      {id:'asd2', name:"Coco", age: 5},
      {id:'asd3', name:"Rafa", age: 4}
    ],
    showPersons: false
  };

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons.filter((person, index) => {
      return personIndex !== index;
    });
    console.log(persons);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event, id) => {
    console.log(event.target.value, id);
    const newPersonIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    console.log(newPersonIndex);
    const personToChange = {...this.state.persons[newPersonIndex]};
    personToChange.name = event.target.value;
    console.log(personToChange);
    const persons = [...this.state.persons];

    persons[newPersonIndex] = personToChange;

    this.setState({persons: persons});
    
    // this.setState(newPerson);
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      button: {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonsHandler(index)}
              key={person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.togglePersonsHandler} style={style.button}>
          Switch name  
        </button>
        {persons}
      </div>
      
    );
  }
}

export default App;
