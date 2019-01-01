import React, { Component } from 'react';

import './App.css';
import {New} from './components/New.js'
import {Header} from './components/Header.js'







class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: null,
        array:[1,2,3]
      };

    }
  //this.d = new Date();


  render() {



    return (
      <div className="App">
         <Header/>
        <div className="App-root  ">


              <h1 className="lp">List of participants</h1>



            <New />


          </div>

        </div>
    );
  }
}

export default App;
