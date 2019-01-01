import React from 'react';
import './styles/Header.css'

export class Header extends React.Component {
  render() {
    const style =  {

      height: '150px',
      padding: '32px',
      color: 'white',

       }
//background-color: 'rgb(230, 230, 230)',
// text-align: 'left'

    return (<div className="App-header">
      <h1>lord Software</h1>
    </div>);
  }
}
