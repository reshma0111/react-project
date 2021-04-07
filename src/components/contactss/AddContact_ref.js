import React, { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
      super(props)
  
     
           this.nameInput =React.createRef();
           this.emailInput =React.createRef();
           this.phoneInput =React.createRef();
      
  }
  
    onSubmits = e => 
{e.preventDefault();
    const contact ={
        name:this.nameInput.current.value,
        email:this.emailInput.current.value,
        phone:this.phoneInput.current.value
    }
    console.log(contact);
}
   static defaultProps={
       name:'joey',
       email:'joe@gmail.com',
       phone:'7777-777-777'
   };
    render() {
        const {name,phone,email} = this.props;
        return (
                <div className ="card mb-3 w-50 py-3 mx-auto y-3 my-4">
                <div className ="card-header"> Add Contact</div>
                <div className ="card-body">
                    <form onSubmit ={this.onSubmits}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                           <input type="text"
                           name ="name"
                            className ="form-control
                            form-control-lg"
                            placeholder="Enter name .."
                            defaultValue={name}
                            ref={this.nameInput}
                          
                            />    
                          </div>

                          <div className="form-group">
                            <label htmlFor="name">Email</label>
                           <input type="email"
                           name ="email"
                            className ="form-control
                            form-control-lg"
                            placeholder="Enter email .."
                            defaultValue={email}
                            ref={this.emailInput}
                            />    
                          </div>

                          <div className="form-group">
                            <label htmlFor="name">Phone</label>
                           <input type="text"
                           name ="phone"
                            className ="form-control
                            form-control-lg"
                            placeholder="Enter phone .."
                            defaultValue={phone}
                            ref={this.phoneInput}
                          />   
                          </div>
                          <input type ="submit"
                           value ="Add contact"
                            className =" btn btn-block btn-light"/>
                         </form>

                </div>
            </div>
        )
    }
}
export default AddContact;