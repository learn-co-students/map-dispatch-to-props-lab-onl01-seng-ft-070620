import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {
  state = {
    name: '',
    location: ''
  }

// updating state with user form inputs
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

// invoking addRestaurant() to update state
// submitted info is then rendered in the list below the form
// and the form is cleared out
  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({ name: '', location: '' })
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            id="name"
            value={this.state.name}
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleChange(event)}
            id="location"
            value={this.state.location}
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: (newRestaurant) => { dispatch(addRestaurant(newRestaurant)) }
  }
}

// passing addRestaurant() function to RestaurantInput
export default connect(null, mapDispatchToProps)(RestaurantInput)
