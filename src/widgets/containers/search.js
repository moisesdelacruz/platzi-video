import React, { Component } from 'react';
import Search from '../components/search.js';
import { connect } from 'react-redux';
import { searchEntities } from '../../actions';

class SearchContainer extends Component {
  state = {
    value: 'Moises'
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(searchEntities(this.input.value))
  }

  setInputRef = element => {
    this.input = element;
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ', '-'),
    })
  }

  render () {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default connect()(SearchContainer);
