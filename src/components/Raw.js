 import React  from 'react';

 export class Raw extends React.Component {
   constructor(props) {
     super(props);
     this.state={
       person:this.props.person
     }
     this.raws=[]
   }

   //console.log(this.state.person)

   for( i=0;i<this.props.person.length;i++){
     this.raws.push(<p>{this.state.person[i][0]}</p>)
   }


   render() {

     return (<div>{this.raws}</div>);
   }
 }
