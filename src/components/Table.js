import React, { Component, PropTypes } from 'react';
import './styles/Table.css'


/**
 * Table
 */
export class Table extends Component {

  constructor(props) {
      super(props);
      this.state = {array : this.props.state}
      this.sort = this.sort.bind(this);
      this.handleChangeN = this.handleChangeN.bind(this);
      this.handleChangeE = this.handleChangeE.bind(this);
      this.handleChangeP = this.handleChangeP.bind(this);
      this.touched = this.touched.bind(this);
    }
    handleChangeN(event) {
      this.setState({name: event.target.value});
    }
    handleChangeE(event) {
      console.log(event)
      let stateArray=this.state.array;
      console.table(stateArray)
      stateArray.person[event][3]=!stateArray.person[event][3]
      console.log(this.state.array.person[event][3])
      this.setState({array:stateArray})
      //if (event.target.value=="e-mail") this.setState({email: ""})
      // this.setState({email: event.target.value});
      // console.log(this.state.email)
    }
    handleChangeP(event) {
      this.setState({phone: event.target.value});
    }
    touched(index){this.state.array.person.splice(index,1);this.setState({person: this.state.person});console.log(index )}



  sort = () => {

  let personarray=this.state.array.person
  personarray.sort(function(a, b) {
    var nameA = a[0].toUpperCase(); // ignore upper and lowercase
    var nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;



  });

  this.setState({person: personarray})


  }

  render() {
    return (
       <div>


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
        {this.state.array.person.map((p,index)=>(
                                    <tr key={`g${index}`}>
                                        <td className="  lp" key={`f${index}`}>
                                            {p[3] ?
                                          <input key="n" type="text" name="e-mail" value={p[0]} onChange={this.handleChangeN} />:
                                          p[0]}
                                        </td>

                                        <td  key={`b${index}`}  >
                                          {p[3] ?
                                            <input key="e" type="text" name="e-mail" value={p[1]} onChange={this.handleChangeE} />:
                                            p[1]
                                          }
                                        </td>

                                        <td  key={`c${index}`}   onChange={this.handleChangeN}>
                                          {p[3] ?
                                            <input key="age" type="text" name="e-mail" value={p[1]} onChange={this.handleChangeE} />:
                                            p[2]}
                                        </td>

                                        <td  key={`f${index}`}  >
                                          {p[3] ?
                                            <button key="f">ok</button>:
                                            ""
                                          }
                                        </td>

                                        <td onClick={()=>this.handleChangeE(index)}>
                                              <a key={`d${index}`}  >
                                                <img key={`e${index}`}src={require('./pen.jpg')  } alt=""/>
                                              </a>
                                        </td>

                                        <td><img  key={`f${index}`}value={index} onClick={()=>this.touched(index)} src={require('./trash.jpg')} alt="" /></td>


                                    </tr>))}




    </tbody>
    </table>

    </div>
    );
  }
}



export default Table;
