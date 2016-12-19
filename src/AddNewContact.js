import React, { Component } from 'react';

class AddNewContact extends Component {
  constructor() {
    super();

    this.state = {
      avatar: '',
      name: '',
      occupation: ''
    }
  }

  handleInputChangeAvatar(event) {
    const { value } = event.target;
    this.setState({
      avatar: value,
      name: this.state.name,
      occupation: this.state.occupation
    })
  }

  handleInputChangeName(event) {
    const { value } = event.target;
    this.setState({
      avatar: this.state.avatar,
      name: value,
      occupation: this.state.occupation
    })
  }

  handleInputChangeOccupation(event) {
    const { value } = event.target;
    this.setState({
      avatar: this.state.avatar,
      name: this.state.name,
      occupation: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { avatar, name, occupation } = this.state;
    this.props.onAdd({avatar, name, occupation});
  }

render() {
  return(

    <form className="new-contact-form" onSubmit={this.handleSubmit.bind(this)}>
      <input
        type='text'
        name='avatar'
        placeholder='Avatar Link'
        value={this.state.avatar}
        onChange={this.handleInputChangeAvatar.bind(this)}
        />

      <input
        type='text'
        name='name'
        placeholder='Name'
        value={this.state.name}
        onChange={this.handleInputChangeName.bind(this)}
        />

      <input
        type='text'
        name='occupation'
        placeholder='Occupation'
        value={this.state.occupation}
        onChange={this.handleInputChangeOccupation.bind(this)}
        />

      <input
        type='submit'
        value='Add Contact'
        />

    </form>
   )
 }
}

AddNewContact.propTypes = {
  onAdd: React.PropTypes.func.isRequired
}

export default AddNewContact;
