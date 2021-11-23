import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import './App.css';
import CustomOption from './CustomOption';

function App() {
  const [data, setData] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setData(editorState);
  };

  return (
    <div>
      <h2>Using React-Draft-wysiwyg-demo</h2>
      <Editor
        editorState={data}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbarCustomButtons={[<CustomOption />]}
      />
      <div>
        <button type="button" onClick={() => { console.log('milan : ', convertToRaw(data.getCurrentContent())); }}>Save</button>
      </div>
    </div>
  );
}

export default App;
