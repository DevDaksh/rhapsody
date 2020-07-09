import React, { Component } from 'react';
import './App.css';
import Add from './components/Add';
import Posts from './components/Posts';
import PostContextProvider from './contexts/PostContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <br />
          <PostContextProvider>
            <Posts />
            <Add />
          </PostContextProvider>
        </div>
      </div>
    )
  }
}

export default App;
