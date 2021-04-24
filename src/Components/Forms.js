import React, { Component } from 'react'
import { Form, Input, Label, Button } from 'reactstrap'

class Forms extends Component{
    render() {
        return(
            <div id="Form">
            <h3>Add a new item to the table:</h3>  
            <Form onSubmit={this.props.handleFormSubmit}>
              <Label htmlFor="username">
              Name:
              <Input id="name" value={this.props.newName} 
                type="text" name="name"
                onChange={this.props.handleInputChange} required/>
              </Label>
              <br/><br/>
    
    
              <Label for="gender">
              Gender: 
              <Input id="gender" value={this.props.newGender} 
                type="text" name="gender"
                onChange={this.props.handleInputChange} required />
              </Label> <br/><br/>
    
    
              <Label for="phoneNumber">
              Phone Number:
              <Input id="phoneNumber" value={this.props.newPhoneNumber} 
                type="number" name="phoneNumber"
                onChange={this.props.handleInputChange} required />
              </Label> <br/><br/>
    
    
              <Label for="qualification">
              Qualification:
              <Input id="qualification" value={this.props.newQualification} 
                type="text" name="qualification"
                onChange={this.props.handleInputChange} required />
              </Label> <br/><br/>
    
              <Label for="email">
              Email:
              <Input id="email" value={this.props.newEmail} 
                type="email" name="email"
                onChange={this.props.handleInputChange} required/>
              </Label> <br/><br/>
              <Button color="primary" type="submit" value="Submit">Save</Button>
            </Form>
    
            
          </div>
        )
    }
}


export default Forms