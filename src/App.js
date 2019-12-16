import React from 'react';
import TodoForm from './Components/TodoForm';
import "./index.css"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoForm/>
      </div>
    );
  }
}

export default App;
