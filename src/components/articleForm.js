import React from 'react';
import '../assets/css/articleForm.css';
import Example from './example';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';
import Addcard from './addCard';
import Addcarddisplay from './addCardDisplay';
import Advancedtab from './advancedTab';
import cloudinary from 'cloudinary';
import {CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY} from "../constants/keys";

cloudinary.config({cloud_name: CLOUDINARY_CLOUD_NAME, api_key: CLOUDINARY_API_KEY, api_secret: CLOUDINARY_API_SECRET});

var addNewCardDetails = {};
var newCardDataJson = [];
var addNewFieldInJson = {};
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
            showList: 1,
            showAnyList: false,
            closePopupState: false,
            parentEditorData: '',
            newData: '',
            newInput1: '',
            newCardData: {},
            newCardDataJson: '',
            finalJsonObject: {},
            showDropdown: false
        }
    }

    getTrustedHtml() {
        return {__html: this.state.newData};
    }
    onOpenModal = () => {
        addNewCardDetails = {};
        this.setState({open: true});
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
    handleStateOfOuterEditor = (e) => {
        this.setState({parentEditorData: e});
        this.updateDataForWholeJson("introduction", this.state.parentEditorData)
        // console.log("outer editor data", this.state.parentEditorData);
    }
    updateData = (key, input) => {
        addNewCardDetails[key] = input;
        this.setState({newCardData: addNewCardDetails})
    }
    saveDataAsJson = () => {
        this.onCloseModal();
        newCardDataJson.push(this.state.newCardData);
        this.setState({newCardDataJson: newCardDataJson});
        if (this.state.newCardDataJson.length > 0) {
            this
                .state
                .newCardDataJson
                .map((element, index) => {
                    console.log(element);
                    console.log(index);
                    element.cardorder = index;
                })
        }
        //    for(var key in this.state.newCardDataJson){
        // this.state.newCardDataJson.map((element)=>{         console.log(element);
        // console.log(key);         element.cardorder = key;     })    }
        console.log("final json of new card", this.state.newCardDataJson);
        // this.setState({ newCardDataJson:newCardDataJson },() => {
        // this.saveDataOnParenteditor(); })
    }

    // saveDataOnParenteditor = () => {     let combinedData =
    // this.state.parentEditorData;     this.state.newCardDataJson.map((ele)=>{
    // for(var prop in ele){           combinedData =
    // combinedData.concat(ele[prop]);          // console.log(combinedData);
    // this.setState({ parentEditorData: combinedData})       }     }) }

    myFunction = () => {
        console.log("show");
        this.setState({
            showDropdown: !this.state.showDropdown
        })
    }
    filterFunction = () => {
        console.log("filter");
        // var input, filter, ul, li, a, i; input = document.getElementById("myInput");
        // filter = input.value.toUpperCase(); div =
        // document.getElementById("myDropdown"); a = div.getElementsByTagName("a"); for
        // (i = 0; i < a.length; i++) {     if
        // (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) { a[i].style.display =
        // "";     } else {         a[i].style.display = "none";  } }
    }

    ///func for advanced tab and outer editor
    updateDataForWholeJson = (key, input) => {
        addNewFieldInJson[key] = input;
        this.setState({finalJsonObject: addNewFieldInJson})
        console.log("final json", this.state.finalJsonObject);
    }

    openCloudinaryWidget = () => {
        cloudinary
            .openUploadWidget({
                cloud_name: CLOUDINARY_CLOUD_NAME,
                upload_preset: CLOUDINARY_UPLOAD_PRESET,
                api_key: CLOUDINARY_API_KEY,
                api_secret: CLOUDINARY_API_SECRET
            }, function (error, result) {
                console.log(error, result)
            });
    }

    render() {
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
                    <div className="mainEditor">
                        <Example
                            handleStateOfOuterEditor={this.handleStateOfOuterEditor}
                            parentEditorData={this.state.parentEditorData}/>
                    </div>
                    <Addcarddisplay newCardDataJson={this.state.newCardDataJson}/>
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
                                <input type="checkbox" id={index} className="city btn btn-default"/>
                                <label htmlFor={index}>{city}</label>
                            </div>)}
                            <div/>
                        </div>
                        <div
                            className={this.state.showList === 2
                            ? "showCategoryDiv"
                            : "hideCategoryDiv"}>
                            {interests.map((interest, index2) => <div key={index2}>
                                <input type="checkbox" id={index2} className="city btn btn-default"/>
                                <label htmlFor={index2}>{interest}</label>
                            </div>)}
                            <div/>
                        </div>
                    </div>
                    <span className="advance" onClick={this.props.openNav}>Advanced<i className="fa fa-arrow-right"></i>
                    </span>
                </div>
                <Advancedtab
                    moveaside={this.props.moveaside}
                    openNav={this.props.openNav}
                    updateDataForWholeJson={this.updateDataForWholeJson}/>
                <Addcard
                    onCloseModal
                    ={this.onCloseModal}
                    open={open}
                    onClose={this.onCloseModal}
                    updateData={this.updateData}
                    saveDataAsJson={this.saveDataAsJson}
                    openCloudinaryWidget={this.openCloudinaryWidget}/>
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