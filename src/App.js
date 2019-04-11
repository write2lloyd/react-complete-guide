import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Lloyd", age: 40},
      {name:"Ameena", age: 34},
      {name:"Coco", age: 5},
      {name:"Rafa", age: 4}
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

  nameChangedHandler = (event) => {
    const newPerson = {
      persons: [
        {name: "Lloyd", age: 40},
        {name: event.target.value, age: 34},
        {name: "Coco", age: 5.5},
        {name: "Rafa", age: 4}
    ]}
    this.setState(newPerson);
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
              click={() => this.deletePersonsHandler(index)}/>
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
