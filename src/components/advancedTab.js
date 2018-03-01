import React from 'react';

class Advancedtab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newText1:''
        }
    }
    render() {
        return (
            <div className={this.props.moveaside? "moveSidenav": "sidenav"} id="mySidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={this.props.openNav}>x</a>
                <div className="sideWidgetHeading">
                    <h2>Advanced</h2>
                </div>
                <input className="form-control title-control" type="text" placeholder="Id"
                 onBlur={() => this.props.updateDataForWholeJson("metatitle",this.state.newText)}
                 onChange={(e) => {this.setState({newText: e.target.value})}}/>

                <input className="form-control title-control" type="text" placeholder="Title"
                 onBlur={() => this.props.updateDataForWholeJson("title",this.state.newText)}
                 onChange={(e) => {this.setState({newText: e.target.value})}}/>

                 <input
                    className="form-control title-control" type="text" placeholder="Meta Tags"
                    onBlur={() => this.props.updateDataForWholeJson("metaTags",this.state.newText)}
                    onChange={(e) => {this.setState({newText: e.target.value })}}/>

                 <input
                    className="form-control title-control"type="text"placeholder="Meta Description"
                    onBlur={() => this.props.updateDataForWholeJson("metaDescription",this.state.newText)}
                    onChange={(e) => {this.setState({newText: e.target.value})}}/>

                 <input
                    className="form-control title-control" type="text" placeholder="Meta Keywords"
                    onBlur={() => this.props.updateDataForWholeJson("metaKeywords",this.state.newText)}
                    onChange={(e) => {this.setState({newText: e.target.value })}}/>
               
                <input
                    className="form-control title-control" type="text" placeholder="Meta Image"
                    onBlur={() => this.props.updateDataForWholeJson("metaImage",this.state.newText)}
                    onChange={(e) => {this.setState({newText: e.target.value })}}/>
                <div className="searchDropdown">
                    <button
                        onClick={() => {
                        this.setState({
                            showDropdown: !this.state.showDropdown
                        })
                    }}
                        className="searchDropbtn">Dropdown</button>
                    <div
                        id="myDropdown"
                        className={this.state.showDropdown
                        ? "search-dropdown-content"
                        : "hide-dropdown-content"}>
                        <input
                            type="text"
                            placeholder="Search.."
                            id="myInput"
                            onKeyUp={this.filterFunction}/>
                        <a href="#about">About</a>
                        <a href="#base">Base</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                        <a href="#custom">Custom</a>
                        <a href="#support">Support</a>
                        <a href="#tools">Tools</a>
                    </div>
                </div>
                <div className="footer">Preview on Google</div>
            </div>
        )
    }
}

export default Advancedtab;