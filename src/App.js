import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: ""     
    }
  }

  render() {
    return (
      <div className="App">       
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}/>
        <div>
          <label>
            <input type="text" value={this.state.name.length} onChange={this.updateName.bind(this)}/>            
          </label>
        </div>        
      </div>
    );
  }

  updateName(event){
    this.setState({
      name: event.target.value
    });
  }

}

export default App;
