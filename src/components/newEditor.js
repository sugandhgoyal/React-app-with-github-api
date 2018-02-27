import React from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import '../assets/css/articleForm.css';
import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      model: ''
    };
    this.defaultTag = 'div';
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({model: nextProps.parentEditorData})
  }

  handleModelChange = (model) => {
    this.setState({model: model});
    this.props.handleStateOfOuterEditor(this.state.model);
  }

  render() {
    this.tag = this.state.defaultTag;
    return (
      <div>
        <FroalaEditor
          tag='textarea'
          config={this.config}
          model={this.state.model}
          onModelChange={this.handleModelChange}/>
      </div>
    );
  }
}

export default Test;