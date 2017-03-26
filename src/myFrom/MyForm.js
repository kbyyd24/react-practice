import React from 'react';
import './MyForm.css';

let MyForm = React.createClass({
  getInitialState() {
    return {content: 'no content submit yet'};
  },
  updateContent() {
    let input = document.getElementById('input');
    input.value && this.setState({content: input.value});
    input.value = '';
  },
  render() {
    return (
      <div className="MyForm">
        <div>{this.state.content}</div>
        <div><input type="text" id="input"/></div>
        <div><button onClick={this.updateContent}>submit</button></div>
      </div>
    );
  }
});

export default MyForm;