import React, {PropTypes} from 'react';
import 'styles/AddItem.css'

export default class MyComponent extends React.Component {
  render() {
    return (

      <table className="formCss">
      <thead>
       <tr >

        <td className="lp"><input key="n" type="text" name="name" value={this.state.name} onChange={this.handleChangeN}/></td>
        <td><input key="e" type="text" name="e-mail" value={this.state.email} onChange={this.handleChangeE} /></td>
        <td><input key="n" type="text" name="name" value={this.state.phone} onChange={this.handleChangeP}/></td>

        <td><input type="submit" onClick={this.handleSubmit} value="Add new" /></td>
      </tr>
    </thead>
    </table>);
  }
}
