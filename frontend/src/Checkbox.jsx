import React, { Component } from 'react';

class Checkbox extends Component {
  handleChange = (event) => {
    if (event.target.id === 'all') {
      this.props.handleSelectAll(event);
    } else {
      this.props.handleCheckboxChange(event);
    }
  }

  render() {
    return (
      <div className="form-group form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={this.props.value}
          id={this.props.id}
          checked={this.props.checked}
          onChange={this.handleChange}
        />
        <label className="form-check-label" for={this.props.id}>
          {this.props.value}
        </label>
      </div>
    )
  }
}

export default Checkbox;
