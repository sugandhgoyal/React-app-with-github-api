import React from 'react';
import '../assets/css/articleForm.css';
//import Example from './example';
import {connect} from 'react-redux';
//import Addcard from './addCard';
import Modal from 'react-responsive-modal';
import Test from './newEditor';
import Test1 from './editorPopus';


var _ = {
    merge: require('lodash/merge'),
  };
var  addNewCardDetails = {};
var newCardDataJson = [];
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '500px',
        height: '600px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Addarticleform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditor: [],
            open: false,
            openSecond: false,
            showList: 3,
            showAnyList: false,
            closePopupState: false,
            parentEditorData:'',
            newData: '',
            newInput1:'',
            newCardData:{},
            newCardDataJson:''
        }
    }

    getTrustedHtml() {
        return {__html: this.state.newData};
    }
    onOpenModal = () => {
        addNewCardDetails= {};
        this.setState({
            open: true,
        });
        console.log(" open modal",addNewCardDetails);
    };

    onCloseModal = () => {
        this.setState({open: false, openSecond: false});
    };
    onOpenSecondModal = () => {
        this.setState({openSecond: true});
    };

    onCloseSecondModal = () => {
        this.setState({openSecond: false});
    };
    showCities = (id) => {
        this.setState({showAnyList: true, showList: id});
    }
    closePopup = () => {
        this.setState({closePopupState: true})
    }
    handleStateOfOuterEditor = (e)=>{
        this.setState({parentEditorData: e});
        console.log("outer editor data", this.state.parentEditorData);
    }
    updateData = (key,input) =>{
        console.log("add new in update",addNewCardDetails);
        addNewCardDetails[key] = input;
        console.log("after",addNewCardDetails);
        this.setState({
            newCardData: addNewCardDetails
        })
    }
    saveDataAsJson = () =>{
        newCardDataJson.push(this.state.newCardData);
        console.log(newCardDataJson);
        this.setState({ newCardDataJson:newCardDataJson },() => {
            this.saveDataOnParenteditor();
        })
    }

    saveDataOnParenteditor = () => {
        console.log("parent",this.state.parentEditorData);
        console.log("popup",this.state.newCardDataJson);
        let combinedData = '';
        this.state.newCardDataJson.map((ele)=>{
          for(var prop in ele){
              combinedData = combinedData.concat(ele[prop]);
              console.log(combinedData);
              this.setState({ parentEditorData: combinedData})
          }
        })
    }
    render() {
        console.log(this.state.newCardDataJson);
        const {open} = this.state;
        const cities = [
            "Andaman",
            "Amritsar",
            "Agra",
            "Coorg",
            "Delhi",
            "Darjeeling",
            "Jaisalmer",
            "Kasol",
            "Leh Ladakh",
            "Mussoorie",
            "Mcleodganj & Dharamshala",
            "Nasik",
            "Nainital",
            "Ooty",
            "Pondicherry",
            "Rishikesh",
            "Srinagar",
            "shimla",
            "Shillong",
            "Udaipur",
            "Varanasi"
        ];
        const interests = [
            "Art & Culture",
            "City Life",
            "Events",
            "Entertainment",
            "Food & Nightlife",
            "Fashion",
            "Health & Beauty",
            "Hobbies & Learning",
            "Music",
            "Nature & Heritage",
            "People & Communities",
            "Shopping",
            "Student Life",
            "Sports",
            "Travel"
        ];
        return (
            <div>
                <div className="leftPart">
                    <Test handleStateOfOuterEditor={this.handleStateOfOuterEditor} parentEditorData={this.state.parentEditorData}/>
                </div>
                <div id="rightSideBar">
                    <div className="saveContainer">
                        <button onClick={this.onOpenModal} className="submitArticle" type="submit">ADD CARD</button>
                    </div>
                    <div className="saveContainer">
                        <button className="submitArticle" type="submit">SAVE ARTICLE</button>
                        <div id="preview" onClick={this.onOpenSecondModal}>Preview</div>
                    </div>
                    <div className="tags">
                        <div
                            className={this.state.showList === 1
                            ? "active-marker"
                            : "active-marker-right"}></div>
                        <div>
                            <span
                                className="cityTag"
                                onClick={() => {
                                this.showCities(1)
                            }}>Cities</span>
                        </div>
                        <div>
                            <span
                                className="categoryTag"
                                onClick={() => {
                                this.showCities(2)
                            }}>Interests</span>
                        </div>
                    </div>
                    <div className="tagsContainer">
                        <div
                            className={this.state.showList === 1
                            ? "showCityDiv"
                            : "hideCityDiv"}>
                            {cities.map((city, index) => <div key={index}>
                                <input type="checkbox" className="city btn btn-default"/>&nbsp;&nbsp;{city}
                            </div>)}
                            <div/>
                        </div>
                        <div
                            className={this.state.showList === 2
                            ? "showCategoryDiv"
                            : "hideCategoryDiv"}>
                            {interests.map((interest, index) => <div key={index}>
                                <input type="checkbox" className="city btn btn-default"/>&nbsp;&nbsp;{interest}
                            </div>)}
                            <div/>
                        </div>
                    </div>
                    <span className="advance" onClick={this.props.openNav}>Advanced<i className="fa fa-arrow-right"></i>
                    </span>
                </div>
                <div
                    className={this.props.moveaside
                    ? "moveSidenav"
                    : "sidenav"}
                    id="mySidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.props.openNav}>x</a>
                    <div className="sideWidgetHeading">
                        <h2>Advanced</h2>
                    </div>
                    <input className="form-control title-control" type="text" placeholder="Title"/>
                    <input className="form-control title-control" type="text" placeholder="Id"/>
                    <input
                        className="form-control title-control"
                        type="text"
                        placeholder="Meta Title"/>
                    <input
                        className="form-control title-control"
                        type="text"
                        placeholder="Meta Description"/>
                    <input
                        className="form-control title-control"
                        type="text"
                        placeholder="Meta Keywords"/>
                    <input
                        className="form-control title-control"
                        type="text"
                        placeholder="Meta Image"/>
                    <div className="footer">Preview on Google</div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <div className="content">
                        <input
                            className="form-control title-control"
                            type="text"
                            placeholder="card subtitle" onBlur={() => this.updateData("subtitle",this.state.newInput)}
                            onChange={(e) => {this.setState({newInput: '<p>'+ e.target.value +'</p>'})}} />
                        <input
                            className="form-control title-control"
                            type="text"
                            onChange={(e) => {this.setState({newInput: '<p>'+ e.target.value +'</p>'})}}
                            onBlur={() => this.updateData("imageurl",this.state.newInput)}
                            placeholder="Card Image Url"/>
                        <input
                            className="form-control title-control"
                            type="text"
                            onChange={(e) => {this.setState({newInput: '<p>'+ e.target.value +'</p>'})}}
                             onBlur={() => this.updateData("listing",this.state.newInput)}
                            placeholder="Card Associated Listing"/>
                        <input
                            className="form-control title-control"
                            type="text"
                            onChange={(e) => {this.setState({newInput: '<p>'+ e.target.value +'</p>'})}} 
                            onBlur={() => this.updateData("phonenumber",this.state.newInput)}
                            placeholder="Card Phone Number"/>
                        <div className="editor">
                            <Test1 updateData={this.updateData}/>
                            <button onClick={this.saveDataAsJson}>Add To Page</button>
                        </div>
                    </div>
                </Modal>
                <Modal
                    className="previewModal"
                    style={customStyles}
                    open={this.state.openSecond}
                    onClose={this.onCloseModal}
                    little>
                    <div className='fr-view' dangerouslySetInnerHTML={this.getTrustedHtml()}></div>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}
export default connect(state => state, mapDispatchToProps)(Addarticleform);