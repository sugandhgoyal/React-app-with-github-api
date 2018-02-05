import React from 'react';
import '../assets/css/feedCard.css';
import {connect} from 'react-redux';
import DateTime from 'react-datetime';
import {getImageUrl} from '../utils/utils';
import MapWithASearchBox from './mapComponent';
import {deleteFeedApi} from '../action/index';
import _ from 'lodash';
import {updateFeedApi} from '../action/index';
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

class Feedcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            deletedFeed: true,
            display: false
        };
    }
    getPlace = (place) => {
        this.setState({newPlace: place})
    }
    getArticleId = (createdBy) => {
        return _.find(this.props.feedReducer.article_data, {'createdBy': createdBy});
    }
    deleteFeed = () => {
        confirmAlert({
            message: 'Are you sure, you want to delete the feed?',
            confirmLabel: 'Confirm',
            cancelLabel: 'Cancel',
            onConfirm: () => {
                this
                    .props
                    .dispatch(deleteFeedApi(this.props.eachFeed._id, this.props.eachFeed.city, this.getArticleId(this.props.eachFeed.createdBy)._id));
                this.setState({
                    deletedFeed: !this.state.deletedFeed
                })
            },
            onCancel: () => console.log("cancelled")
        })

    }
    updatePublishDate = (date, action) => {
        let publishDate = date._d.getTime();
        const updatedData = {
            publishDate: publishDate,
            published: 1
        };
        this.props.dispatch(updateFeedApi(this.props.eachFeed._id, this.props.eachFeed.city, updatedData, date._d.toUTCString(), "updateDateTime"));
    }
    updateNotifyState = (date) => {
        console.log(date._d);
        let notifydate = date._d.getTime();
        const updatedData = {
            NotifyDate: notifydate,
            notified: 1
        };
        this.props.dispatch(updateFeedApi(this.props.eachFeed._id, this.props.eachFeed.city, updatedData, date._d.toUTCString()));
    }
    updateFeature = () =>{
        const updatedData = {
            sponsored: 1,
            ourPicks: 1,
        };
        this.props.dispatch(updateFeedApi(this.props.eachFeed._id, this.props.eachFeed.city, updatedData));   
    }
    render() {
    //    console.log(this.props.eachFeed);
        let hreff = `https://so.city/delhi/article/${this.props.eachFeed.feedEntity.entityId}`;
        let fbid = `https://www.facebook.com/share.php?u=https://so.city/delhi/article/${this.props.eachFeed.feedEntity.entityId}`;
        return (
            <div id="feedCards">
                {this.props.eachFeed.published === 1 && 
                <div
                    className={this.state.deletedFeed
                    ? "card6 card"
                    : "cardHide"}>
                    <div className="container-fluid">
                        <div className="col-xs-2 left-part">
                            <img
                                alt="article"
                                className="articleImage"
                                src={getImageUrl(this.props.eachFeed.imageUrl)}/>
                        </div>
                        <div className="col-xs-8 middle-part">
                            <div className="title">
                                {this.props.eachFeed.title}</div>
                            <div>
                                <img alt="user" className="image-user" src={getImageUrl(this.props.imageLink)}/>
                                <span className="subtitle">&nbsp; {this.props.getDisplayName(this.props.eachFeed.createdBy).displayName}
                                </span>
                            </div>
                            <div className="icons">
                                <a href={hreff}>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                    {/* <span class="tooltiptext">Tooltip text</span> */}
                                </a>
                                <a className="button" href="#popup1">
                                    <i className="fa fa-share-alt" aria-hidden="true"></i>
                                </a >
                                <i
                                    className="fa fa-calendar"
                                    aria-hidden="true"
                                    onClick=
                                    {() => { this.setState({ show: !this.state.show }) }}></i>
                                <a className="button" href="#popup2">
                                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                                </a >
                                <DateTime className={this.state.show ? 'rdt' : 'hide'} onBlur={this.updatePublishDate}/>
                                <div id="popup1" className="overlay">
                                    <div className="popup">
                                        <a className="close" href="#">&times;</a>
                                        <div className="content">
                                            <a href={fbid}>< img alt="fb" src={require('../images/fb.png')}/></a>
                                            <img alt="twitter" src={require('../images/twitter.png')}/>
                                            <img alt="google" src={require('../images/google.png')}/>
                                            <img alt="instagram" src={require('../images/insta.png')}/>
                                            <img alt="slack" src={require('../images/slack.png')}/>
                                        </div>
                                    </div>
                                </div>
                                <div id="popup2" className="overlay">
                                    {this.state.showMap && <div className="popup">
                                        <a className="close" href="#">
                                            &times;
                                        </a>
                                        <div className="content">
                                            <MapWithASearchBox
                                                eachFeed={this.props.eachFeed}
                                                getPlace={this.getPlace}
                                                feedId={this.props.eachFeed._id}
                                                city={this.props.eachFeed.city}
                                                publishDate={this.props.eachFeed.publishDate}/>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                            <div className="displayDate">Scheduled For:&nbsp;{new Date(this.props.eachFeed.publishDate).toString()}&nbsp;</div>
                            <div className="displayPlace">
                                {this.state.newPlace}
                            </div>
                        </div>
                        <div className="col-xs-2 right-part">
                            <ul >
                                <li >
                                    <i className={this.props.eachFeed.published === 1 ? "fa fa-check-circle-o": "fa fa-file-text-o"}
                                        aria-hidden="true"></i>
                                    {this.props.eachFeed.published === 1 && <span>
                                        &nbsp;Published &nbsp;</span>}
                                    {this.props.eachFeed.published === 0 && < span > &nbsp;
                                    Draft&nbsp;</span>}
                                </li>
                                <li>
                                <a className="featureFeed" onClick={this.updateFeature}>
                                    <i className={this.props.eachFeed.sponsored === 1 && this.props.eachFeed.ourPicks === 1 ? "fa fa-star":"fa fa-star grey-star"} aria-hidden="true"></i>
                                    &nbsp;Featured&nbsp; &nbsp;
                                    </a>
                                </li>
                                <li>
                                    <a className="notifyUsers" onClick={() => { this.setState({ display: !this.state.display }) }}>
                                        <i className="fa fa-bell" aria-hidden="true"></i>&nbsp;Notify Users &nbsp; &nbsp;
                                    </a>
                                    <DateTime className={this.state.display ? 'rdt': 'hide'} onBlur={this.updateNotifyState}/>
                                </li>
                                <li>
                                    <p>{(new Date(this.props.eachFeed.NotifyDate)).toDateString()}</p>
                                </li>
                                <li>
                                    <a onClick={this.deleteFeed} className="deleteFeed"> &nbsp;
                                        <i className="fa fa-trash" aria-hidden="true"></i>&nbsp; Delete Feed &nbsp;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
}
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Feedcard);