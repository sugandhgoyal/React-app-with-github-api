import React from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;

class Test1 extends React.Component {
    constructor() {
        super();
        this.state = {
            modelNew: 'Example text'
        };
    }

    handleModelChange = (modelNew) => {
        this.setState({modelNew: modelNew});
        this.props.updateData("4",this.state.modelNew);
    }
    render() {
        return (
            <div>
                <FroalaEditor
                    tag='textarea'
                    config={this.config}
                    modelNew={this.state.modelNew}
                    onModelChange={this.handleModelChange}/>
            </div>
        );
    }
}

export default Test1;