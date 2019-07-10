import React, { useEffect, useState } from 'react';
import './App.css';

import Nav from './components/Nav';

import { base } from './base';

class App extends React.Component {
  state = {
    users: []
  }

  componentDidMount(){
    console.log(this.state.users);
    base.syncState('users', {
      context: this,
      state: 'users'
    });
  };

  render(){
    return (

      <div className="App">
        <Nav />
    </div>
    )
  };
}

export default App;
