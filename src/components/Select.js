import React from 'react';
import Form from 'react-bootstrap/Form';
import './Select.css'

class Select extends React.Component {
  render() {
    return (
        <div className="select-form">
      <Form.Group>
        <Form.Control
          className="options"
          as="select"
          onChange={e => this.props.onChange(e.target.value)}
          placeholder={this.props.placeholder}
          data-dropup-auto="false"
        >
          {this.props.options.map((option, index) => (
            <option className="test" key={index}>{option}</option>
          ))}
        </Form.Control>
      </Form.Group>
      </div>
    );
  }
}

export default Select;