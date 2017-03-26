import React from 'react';
import './MyForm.css';

let MyForm = React.createClass({
  getInitialState: () => {
    return {content: 'no content submit yet'};
  },
  render: () => {
    return (
      <div className="MyForm">
        <div>{this.state.content}</div>
        <div><input type="text" id="input"/></div>
        <div><button onclick={this.updateContent}>{this.props.submint | 'submit'}</button></div>
      </div>
    );
  },
  updateContent: () => {
    let input = document.getElementById('input');
    input.value && this.setState({content: input.value});
    input.value = '';
  }
});

export default MyForm;