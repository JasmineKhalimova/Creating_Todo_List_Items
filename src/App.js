import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Take out the trash',
        completed:false
      },
      {
        id:2,
        title:'Dinner with Jasmine',
        completed:false
      },
      {
        id:3,
        title:'Meeting with boss',
        completed:false
      },
    ]
  }
  render() { // * this is lifecyle method and it is required to render the component in the browser
    return ( // this render returing jsx its basically easier way to output javascript in the browser
      <div className="App">
       <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
