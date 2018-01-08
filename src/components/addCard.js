import React from 'react';
import CKEditor from "react-ckeditor-component";
import '../App.css';

class Addcard extends React.Component {
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
                <div className="container">
                    <div className="row">
                        <div className="col-50">
                            <input type="text" id="fname" name="Card Subtitle" placeholder="Card Subtitle" />
                        </div>
                        <div className="col-50">
                            <input type="text" id="fname" name="Card Image Url" placeholder="Card Image Url" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-50">
                            <input type="text" id="lname" name="Card Associated Listing" placeholder="Card Associated Listing" />
                        </div>
                        <div className="col-50">
                            <input type="text" id="lname" name="Card Phone Number" placeholder="Card Phone Number" />
                        </div>
                    </div>
                    <div className="editor">
                        <CKEditor
                            activeclass="p10"
                            content={this.state.content}
                            events={{
                                "blur": this.onBlur,
                                "afterPaste": this.afterPaste,
                                "change": this.onChange
                            }}
                        />
                        <button className="submit" type="submit">SAVE</button>
                        <button className="cancel" type="submit">CANCEL</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addcard;