// import React from 'react'; import CKEditor from "react-ckeditor-component";
// import '../App.css';

import React, {Component} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import '../assets/css/articleForm.css';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            contentState: ''
        };
    }
    // onEditorStateChange = (editorState) => {
    //     this.setState({editorState, contentState: this.state.contentState});
    // };
    onChange = (editorState) => {
        this.setState({editorState});
      //  const contentState = editorState.getCurrentContent();
       // const rawContent = JSON.stringify(convertToRaw(contentState));
    }
    render() {
        const {editorState} = this.state;
       // var contentState = editorState.getCurrentContent();
        console.log(this.state.contentState);
        return (<Editor
            contentState={this.state.contentState}
            editorState={editorState}
            onChange={this.onChange}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
           />)
    }
}
export default Example;
