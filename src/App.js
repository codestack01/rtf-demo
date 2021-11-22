import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import './App.css';
import CustomOption from './CustomOption';

function App() {
  const [data, setData] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setData(editorState);
  };

  return (
    <div className="App">
      <h2>Using React-Draft-wysiwyg-demo</h2>
      <Editor
        editorState={data}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        toolbarCustomButtons={[<CustomOption />]}
      />
      <div>
        <button type="button" onClick={() => { console.log('milan : ', data); }}>Save</button>
      </div>
    </div>
  );
}

export default App;
