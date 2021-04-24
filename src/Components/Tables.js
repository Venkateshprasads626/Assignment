import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap'



class Tables extends Component {

  render() {
    const items = this.props.items;

    return (
       <div>
            <input type="text" placeholder="Search"/>
          
     
        
        <Table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Qualification</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
            {items.map((item, idx) => {
              return (
                 
                <tr>
                  <td>key={item.name}</td>
                  <td>key={item.gender}</td>
                  <td>key={item.phoneNumber}</td>
                  <td>key={item.qualification}</td>
                  <td>key={item.email}</td>
                  <td>
                      <Button variant="info" onClick={()=>this.props.editItem(item, idx)}>Edit</Button>
                  </td>
                  <td>
                      <Button onClick={this.props.handleRemoveSpecific(idx)}>Remove</Button>
                  </td>
           
                </tr>
              
              
              );
            })}
          
          </tbody>
         
        </Table>
        {/* <Button onClick={this.props.handleRemove}>Remove</Button> */}
    
 
       </div>
      
    );
  }
}

export default Tables;