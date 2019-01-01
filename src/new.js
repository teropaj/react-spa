import React, { Component } from 'react';
import './new.css'
import './App.css';
import Img from 'react-image'



class New extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editmode: true,
        name: "Full name",
        email: "email address",
        phone: "Phone number",
        person :  [
                [ "John","john@email.com",46],
                 ["Matti","matti@email.com",45],
                 ["Abraham","abraham@email.com",56]
                ]
      };


      this.person=[]
      this.handleChangeN = this.handleChangeN.bind(this);
      this.handleChangeE = this.handleChangeE.bind(this);
      this.handleChangeP = this.handleChangeP.bind(this);
      this.touched = this.touched.bind(this);
      this.sort = this.sort.bind(this)
    }
  //this.d = new Date();
  handleChangeN(event) {
    this.setState({name: event.target.value});
  }
  handleChangeE(event) {
    //if (event.target.value=="e-mail") this.setState({email: ""})
    this.setState({email: event.target.value});
    console.log(this.state.email)
  }
  handleChangeP(event) {
    this.setState({phone: event.target.value});
  }

  touched(index){this.state.person.splice(index,1);this.setState({person: this.state.person});console.log(index )}

  edit =()=>  {this.setState({editmode: !this.state.editmode});console.log(this.state.editmode);
               }

  defaultView = () => {return <div>
        joo
  </div>}

  inputView = () => {return <div>
        <input jeeejooo></input>
  </div>}



  handleSubmit(event) {
  //this.setState(person:person+[this.state.name,this.state.email,this.state.phone])
  console.log('person is '+this.person[0])
  let personState=this.state.person;
  personState+=this.person
  this.setState={person:personState}
  console.log(this.state.person)
  event.preventDefault();
}
sort() {

 console.log('Before '+this.state.person)
 console.log('')
// for (let index = 0; index < this.state.person.length; index++) {
// console.log(this.state.person[index]+index);
//this.state.person.sort(function(a,b))
let personState=this.state.person
personState.sort(function(a, b) {
var nameA = a[0].toUpperCase(); // ignore upper and lowercase
var nameB = b[0].toUpperCase(); // ignore upper and lowercase
if (nameA < nameB) {
  return -1;
}
if (nameA > nameB) {
  return 1;
}

// names must be equal
return 0;


});
this.setState({person: personState})
console.log(this.state.person)

}

  render() {

    return (
      <div className="color" >

          <table className="formCss">
            <thead>
             <tr >

              <td className="lp"><input key="n" type="text" name="name" value={this.state.name} onChange={this.handleChangeN}/></td>
              <td><input key="e" type="text" name="e-mail" value={this.state.email} onChange={this.handleChangeE} /></td>
              <td><input key="n" type="text" name="name" value={this.state.phone} onChange={this.handleChangeP}/></td>

              <td><input type="submit" onClick={this.handleSubmit} value="Add new" /></td>
            </tr>
          </thead>
          </table>


          <table className="a">
            <thead>
            <tr className="header ">
              <th   className="lp" onClick={this.sort}>name &darr;</th>
              <td  >E-mail address</td>
              <td>Phone number</td>
              <th> </th>
              <th> </th>
            </tr>
          </thead>


          <tbody className="mb">
            {this.state.person.map((p,index)=>(
                                        <tr key={`g${index}`}>
                                          <td className="  lp" key={`f${index}`}>{p[0]}</td>


                                              <td  key={`b${index}`}    >{p[1]} </td>
                                              <td  key={`c${index}`}   onChange={this.handleChangeN}>{p[2]}</td>
                                              <td>
                                                    <a key={`d${index}`} href="alert(`index `+index)">
                                                      <img key={`e${index}`}src={require('./pen.jpg')  } alt=""/>
                                                    </a>
                                              </td>
                                              <td><img  key={`f${index}`}value={index} onClick={()=>this.touched(index)} src={require('./trash.jpg')} alt="" /></td>


                                        </tr>))}




        </tbody>
        </table>
        <p onClick={this.edit}
          >Editmode</p> {this.state.editmode ? this.defaultView() : this.inputView()}




</div>

    );
  } //render end

}

export default New;
