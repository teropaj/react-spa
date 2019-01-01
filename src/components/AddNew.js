import React, { Component } from 'react';
import './styles/AddNew.css'

export class AddNew extends Component{

  constructor(props) {
      super(props);
      this.name = ""
      this.name =""
      this.phone= ""








      this.handleChangeN = this.handleChangeN.bind(this);
      this.handleChangeE = this.handleChangeE.bind(this);
      this.handleChangeP = this.handleChangeP.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)

      //this.sort = this.sort.bind(this)
}

  handleChangeN(event) {
    this.name=event.target.value;
    console.log(this.name)
  }
  handleChangeE(event) {
    //if (event.target.value=="e-mail") this.setState({email: ""})
    this.email=event.target.value;
    //console.log(this.state.email);
    //this.props.callbackFromParent(event.target.value)
  }
  handleChangeP(event) {
    this.phone=event.target.value;
  }
  handleSubmit(event) {
  //this.setState(person:person+[this.state.name,this.state.email,this.state.phone])
  this.props.callbackFromParent(
    [this.name,
     this.email,
     this.phone])



  // console.log('person is '+this.person[0])
  // let personState=this.state.person;
  // personState+=this.person
  // this.setState={person:personState}
  // console.log(this.state.person)
  // event.preventDefault();
}



render (){


return (<table className="formCss">
  <thead>
   <tr >

    <td className="lp"><input key="n" type="text" name="name" placeholder={this.props.names[0]} onChange={this.handleChangeN}/></td>
    <td><input key="e" type="text" name="e-mail" placeholder={this.props.names[1]} onChange={this.handleChangeE} /></td>
    <td><input key="n" type="text" name="name" placeholder={this.props.names[2]} onChange={this.handleChangeP}/></td>

    <td><input type="submit" onClick={this.handleSubmit} value="Add new" /></td>
  </tr>
</thead>
</table>)
}
}
