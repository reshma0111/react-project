import React, { Component } from 'react';
import {Consumer} from '../../Context';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Contact extends Component {
  
  state={
    showContactInfo: false
  };
  onDeleteClick= async(id,dispatch) =>{
    try{
 await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}
`)
dispatch({type: 'Delete_Contact',payload:id})
    }catch(e){
      dispatch({type: 'Delete_Contact',payload:id})
    }
  };

  render() {
    const {id,name,email,phone} = this.props.contact;
    const {showContactInfo} =this.state;
         
    return (
<Consumer>
  {
    value => {
      const {dispatch} = value;
      return(
<div className = "container">
            <div className ="card card-body w-50 py-3 mx-auto y-3 my-4 ">
           <h4> {name}<i 
           onClick={() => this.setState({
            showContactInfo:true
           })}
           className="fas fa-sort-down"
           style = {{cursor : 'pointer'}}/>
           < i className ="fas fa-times"
            style = {{cursor : 'pointer' ,
            float:'right',
            color:'red'
          }}
            onClick={this.onDeleteClick.bind(this,id,dispatch)}/>
          <Link to = {`edit/${id}`}>
            <i 
            className ="fas fa-pencil-alt"
            style={{cursor:'pointer',
            float:'right',
            color:'black',
            marginRight:'1rem'
          }}
            >
            </i>
          </Link>


           </h4>
           {showContactInfo?  ( <ul className ="list-group ">
           <li className="list-group-item  ">Email:  {email}</li>
             <li className="list-group-item">phone:{phone}</li>
               </ul>):null}
          </div></div>
      )
    }
  }
</Consumer>


      
           
          );
        }}
     
 
export default Contact;