import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleInputChange = ({target: {value}}) => {this.setState({text: value})}

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state.text, this.props.restaurantId)
    this.setState({text: ''})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add a review:</label>
        <input
          type='text'
          value={this.state.text}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
};

export default ReviewInput;
