import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import AddNewContact from './AddNewContact';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: []
    };
  }

componentDidMount() {
  axios.get('http://localhost:3001/api/contacts')
    .then(resp => {
      this.setState({
        searchText: this.state.searchText,
        contacts: resp.data
      })


    })
    .catch(err => console.log(`Error! ${err}`));
}

  handleSearchBarChange(event) {
    this.setState({
      contacts: this.state.contacts,
      searchText: event.target.value
    })
  }

  getFilteredContacts() {
    //Removes white space and converts the searchText to lowercase
    const term = this.state.searchText.trim().toLowerCase();
    const contacts = this.state.contacts;

    //If search term is an empty string, all contacts will be returned
    if(!term) {
      return contacts;
    }

    //Filter will return a new array of contacts
    //The contact will be in the array if the function returns true
    //The contact will be excluded in the function returns false

    return contacts.filter(contact => {
      return contact.name.toLowerCase().search(term) >= 0;
    });
  }

  handleAddNewContact(attributes) {
    axios.post('http://localhost:3001/api/contacts', attributes)
      .then(resp => {
        const contact = resp.data;
        this.setState({
          searchText: this.state.searchText,
          contacts: [contact, ...this.state.contacts]
        })
      })
    }


  render() {
    // console.log('render');
    // debugger;
    return (
      <div className="App">
        <AddNewContact onAdd ={this.handleAddNewContact.bind(this)} />
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    )
  }

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   debugger;
  // }

}
export default App;
