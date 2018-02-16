import React from 'react';
import '../assets/css/listingCard.css';
import {connect} from 'react-redux';
import {loadlistingDataApi} from '../action/index';

class Listingcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'Featured'
        };
    }
    componentWillMount() {
        this
            .props
            .dispatch(loadlistingDataApi(10, 0));
    }

    render() {
        return (
            <div>
                {this.props.listingReducer.listing_data
                    .map((ele,index) => {
                        let hreff = `https://so.city/delhi/article/${ele._id}`;
                        let imageHref = ele.cities[0];
                        return (
                            <div key = {index} className="card1 card">
                                <div className="container">
                                    <div className="row firstRow">
                                        <div className="col-xs-2">
                                            <img
                                                alt="list"
                                                className="listImage"
                                                src="http://www.spriteland.com/sprites/downloads/night-background_SVG.svg"/>
                                            <div className="listingOverlay">
                                            <a target='_blank' href={hreff}><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                <i className="fa fa-eye" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 titleContainer">
                                            <div className="listTitle">{ele.primaryNameOfListing}</div>
                                            <div id="primaryCategory">{ele.primaryCategory}</div>
                                            <div id="arrow">&nbsp;>&nbsp;</div>
                                            <div id="subCategory">{ele.primarySubCategory}</div>
                                            <div id="displayDate"><b>Scheduled For:</b>&nbsp;{new Date(ele.publishDate).toString()}&nbsp;</div>
                                            {ele.cities[0] && <img alt="twitter"className="displayCity" src={require(`../images/${ele.cities[0]}.png`)}/>}
                                            <span>{ele.cities[0]}</span>
                                        </div>
                                        <div className="col-xs-3">
                                        <span className="dot1">
                                            <span className="shares">Shares</span>
                                            <span className="shareNum">{ele.numberOfShares}</span>
                                        </span>
                                        <span className="dot2">
                                            <span className="likes">Likes</span>
                                            <span className="likesNum">{ele.numberOfLikes}</span>
                                        </span>
                                        </div>
                                        <div className="col-xs-1">
                                            <ul >
                                                <li >
                                                    <i
                                                        className={ele.published === true
                                                        ? "fa fa-check-circle-o"
                                                        : "fa fa-file-text-o"}
                                                        aria-hidden="true"></i>
                                                    {ele.published === true && <span>
                                                        &nbsp;Published &nbsp;</span>}
                                                    {ele.published === false && <span>
                                                        &nbsp;&nbsp;Draft&nbsp;</span>}
                                                </li>
                                                <li>
                                                    <a className="featureFeed">
                                                        <i
                                                            className={ele.sponsored === 1
                                                            ? "fa fa-star"
                                                            : "fa fa-eye"}
                                                            aria-hidden="true"></i>
                                                        &nbsp;&nbsp;Featured&nbsp; &nbsp;
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Listingcard);
