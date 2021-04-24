import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Table from './Components/Tables';
import Forms from './Components/Forms';


class App extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      gender: '',
      phoneNumber: '',
      qualification: '',
      email: '',
      items: [],
      searchTerm: ""
    }
  };




  handleFormSubmit = (e) => {

    e.preventDefault();

    let items = [...this.state.items];
    console.log(items)

    items.push({
      name: this.state.name,
      gender: this.state.gender,
      phoneNumber: this.state.phoneNumber,
      qualification: this.state.qualification,
      email: this.state.email

    }

    );

    this.setState({
      items,
      name: '',
      gender: '',
      phoneNumber: '',
      qualification: '',
      email: ''
    });

  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
   

    this.setState({
        [name] : value
    })

    
  };

  handleRemove = (e) =>{
    this.setState({
      items: this.state.items.slice(0, -1)
    });
  };

  handleRemoveSpecific = (idx) => () =>{
    const items = [...this.state.items]
    items.splice(idx, 1)
    this.setState({ items })
  }

  editItem(itemname) {
    console.log(itemname)
  
  }




  render() {
    

   
    return (
      <div className="App">
    
        <Forms handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          
          newName={ this.state.name }
          newGender={ this.state.gender } 
          newPhoneNumber={ this.state.phoneNumber } 
          newQualification={ this.state.qualification } 
          newEmail={ this.state.email } 
        />
         <Table items={ this.state.items }
         handleRemove={this.handleRemove}
         handleRemoveSpecific={this.handleRemoveSpecific}
         editItem={this.editItem}
         />
      </div>
    );
  }
}

export default App;