import React from 'react';
import '../assets/css/articleForm.css';
import Modal from 'react-responsive-modal';
import Example1 from './editorPopup';

class Addcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }
    render() {
        return (
            <Modal open={this.props.open} onClose={this.props.onCloseModal} little>
                    <div className="content">
                        <input
                            className="form-control title-control"
                            type="text"
                            placeholder="card title" onBlur={() => this.props.updateData("cardTitle",this.state.newInput)}
                            onChange={(e) => {this.setState({newInput:e.target.value})}} />
                        <input
                            className="form-control title-control"
                            type="text"
                            placeholder="card subtitle" onBlur={() => this.props.updateData("cardSubtitle",this.state.newInput)}
                            onChange={(e) => {this.setState({newInput:e.target.value})}} />
                        <input
                            className="form-control title-control"
                            type="text" placeholder="Card Image Url" onClick={this.props.openCloudinaryWidget}/>
                            {/* // onChange={(e) => {this.setState({newInput:e.target.value})}}
                            // onBlur={() => this.props.updateData("cardImageUrl",this.state.newInput)}
                            //  /> */}
                        <input
                            className="form-control title-control"
                            type="text"
                            onChange={(e) => {this.setState({newInput: e.target.value })}}
                             onBlur={() => this.props.updateData("cardAssociatedListing",this.state.newInput)}
                            placeholder="Card Associated Listing"/>
                        <input
                            className="form-control title-control"
                            type="text"
                            onChange={(e) => {this.setState({newInput: e.target.value })}} 
                            onBlur={() => this.props.updateData("cardPhoneNumber",this.state.newInput)}
                            placeholder="Card Phone Number"/>
                        <div className="editor">
                            <Example1 updateData={this.props.updateData}/>
                            <button className="addToPage" onClick={this.props.saveDataAsJson}>Add To Page</button>
                            <button className="cancelAddToPage" onClick={this.props.saveDataAsJson}>Cancel</button>
                        </div>
                    </div>
                </Modal>
        )
    }
}

export default Addcard;