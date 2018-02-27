import React from 'react';
import '../assets/css/listingCard.css';
import {connect} from 'react-redux';
import {loadlistingDataApi} from '../action/index';

var _ = {
    find: require('lodash/find'),
  };


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
   
    getListingAdress = (_id) => {
        return _.find(this.props.listingReducer.address_data, {'_id': _id});
    }

    render() {
        if(this.props.listingReducer.listing_data.length > 0){
        return (
            <div>
                {this.props.listingReducer.listing_data
                    .map((ele,index) => {
                        const listingAddress = this.getListingAdress(ele._id);
                        let hreff = `https://so.city/delhi/article/${ele._id}`;
                        // let imageHref = ele.cities[0];
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
                                            <i className="fa fa-share-alt" aria-hidden="true"></i>
                                            <a target='_blank' href={hreff}><i className="fa fa-eye"></i></a>
                                            </div>
                                        </div>
                                        <div className="col-xs-4 titleContainer">
                                            <div className="listTitle">{ele.primaryNameOfListing}</div>
                                            {listingAddress["Location Details"] &&
                                                        <div className="listAddress">{listingAddress["Location Details"].Address}</div>
                                            }
                                            <div id="primaryCategory">{ele.primaryCategory}</div>
                                            <div id="arrow">&nbsp;>&nbsp;</div>
                                            <div id="subCategory">{ele.primarySubCategory}</div>
                                            <div id="displayDate"><b>Scheduled For:</b>&nbsp;{new Date(ele.publishDate).toString().split(' ').splice(0, 4).join(' ')}&nbsp;{new Date(ele.publishDate).toLocaleString().split(',')[1]}</div>
                                        </div>
                                        <div className="col-xs-6">
                                        <ul>
                                        {ele.cities[0] && 
                                        <li><span className="dot3">
                                            <span className="cityCircle"> 
                                            {ele.cities[0] && <img alt="twitter"className="displayCity" src={require(`../images/${ele.cities[0]}.png`)}/>}
                                            </span>
                                        <span className="cityName">{ele.cities[0]}</span>
                                        </span></li>
                                        }
                                        <li><span className="dot1">
                                            <span className="shares"> 
                                            <i className={ele.published === true ? "fa fa-check-circle-o" : "fa fa-file-text-o"} aria-hidden="true"></i>
                                            </span>
                                            {ele.published === true && <span className="shareNum">Published</span>}
                                            {ele.published === false && <span className="shareNum">Draft</span>}
                                        </span></li>
                                        <li><span className="dot2">
                                            <span className="likes"> 
                                            <i className={ele.sponsored === 1 ? "fa fa-star" : "fa fa-eye"} aria-hidden="true"></i>
                                            </span>
                                            <span className="likesNum">Featured</span>
                                        </span></li>
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
    else{
        return (
            <div className="loadingPage">
            <div className="loader-container">
            <div className="progress float shadow">
              <div className="progress__item"></div>
            </div>
            </div>    
            </div>          
        )
    }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Listingcard);
