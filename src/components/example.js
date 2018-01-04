import React from 'react';
import CKEditor from "react-ckeditor-component";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.updateContent = this.updateContent.bind(this);
        this.state = {
            content: '',
        }
        this.onChange = this.onBlur.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt) {
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent,
        });
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }

    render() {
        return (
            <div>
                <CKEditor
                    activeClass="p10"
                    content={this.state.content}
                    events={{
                        "blur": this.onBlur,
                        "afterPaste": this.afterPaste,
                        "change": this.onChange
                    }}
                />
                <button type="submit">SAVE</button>
                <button type="submit">CANCEL</button>
            </div>

        )
    }
}

export default Example;