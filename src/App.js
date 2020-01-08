import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component.jsx';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    )

    return (
      <div className="App">
      <h1>Test</h1>
      <SearchBox
        placeholder='search stuff'
        handleChange={this.handleChange}>
      </SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
