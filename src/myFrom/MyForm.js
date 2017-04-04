import React, {Component} from 'react';
import './MyForm.css';

class MyForm extends Component{

  constructor(props, context) {
    super(props, context);
    this.state = {content: 'no content submit yet'};
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent() {
    let input = document.getElementById('input');
    input.value && this.setState({content: input.value});
    input.value = '';
  }

  render() {
    return (
      <div className="MyForm">
        <div>{this.state.content}</div>
        <div><input className="form-group" type="text" id="input"/></div>
        <div><button className="btn btn-success" onClick={this.updateContent}>submit</button></div>
      </div>
    );
  }
}

export default MyForm;