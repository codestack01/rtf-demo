import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditorState, Modifier } from 'draft-js';

class CustomOption extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
  };
  constructor(props){
    super(props);
    this.state = {
      customVar : 'custom'
    }
  }

  addStar = () => {
    const { editorState, onChange } = this.props;
    const customPlaceHolder = `{{${this.state.customVar}}}`;
    debugger;
    const contentState = Modifier.replaceText(
      editorState.getCurrentContent(),
      editorState.getSelection(),
      customPlaceHolder,
      editorState.getCurrentInlineStyle(),
    );
    onChange(EditorState.push(editorState, contentState, 'insert-characters'));
  };

  customVarUpdate = (e) => {
    console.log('milan test : ', e.target.value);
    this.setState({customVar:e.target.value});
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.customVar} onChange={this.customVarUpdate} />
        <div onClick={this.addStar}>Add Variable</div>
      </React.Fragment>
    );
  }
}

export default CustomOption;