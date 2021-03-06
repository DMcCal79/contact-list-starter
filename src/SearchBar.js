import React from 'react';

const SearchBar = (props) => {

    return (
      <input
        className='search-bar'
        type="text"
        placeholder='Search Contacts'
        value={props.value}
        onChange={ event => props.onChange(event) }
      />
    );
  }

SearchBar.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default SearchBar;
