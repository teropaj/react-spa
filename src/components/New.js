import React, { Component } from 'react';
import './styles/new.css'
import './styles/App.css';
import {AddNew} from './AddNew'
import Img from 'react-image'
import {Table} from './Table'



export class New extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editmode: true,
        addNew: ["Full name","email address","Phone number"],

        person :  [
                [ "John","john@email.com",46,false],
                 ["Matti","matti@email.com",45,false],
                 ["Abraham","abraham@email.com",56,false]
                ]
      };


      this.person=[]
      this.handleChangeN = this.handleChangeN.bind(this);
      this.handleChangeE = this.handleChangeE.bind(this);
      this.handleChangeP = this.handleChangeP.bind(this);
      this.touched = this.touched.bind(this);
      this.sort = this.sort.bind(this)
      this.callback = this.callback.bind(this)

    }
  //this.d = new Date();
  handleChangeN(event) {
    console.log(event)
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

}  //sort end
callback = (dataFromChild) => {

  this.state.person.push(dataFromChild);
  console.table(this.state.person)
  this.setState({person: this.state.person})}

  render() {

    return (
      <div className="color" >
        {this.names=['a','b','c']}
          <AddNew names={this.state.addNew} callbackFromParent={this.callback}/>








          <Table state={this.state} />

</div>

    );
  } //render end

}
