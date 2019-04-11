import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = 
    {
      persons:[
        {name:"Lloyd", age: 40},
        {name:"Ameena", age: 34},
        {name:"Coco", age: 5},
        {name:"Raga", age: 4}
      ]
    };

  switchNameHandler = (newName) => {
    const newPerson = {
      persons: [
        {name: newName, age: 40},
        {name: "Ameena", age: 34},
        {name: "Coco", age: 5.5},
        {name: "Raga", age: 4}
    ]}
    this.setState(newPerson);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max')}
          // click={() => {
          //   this.switchNameHandler("newName")}}
          />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}>I am awesome!!!</Person>
      </div>
    );
  }
}

export default App;
