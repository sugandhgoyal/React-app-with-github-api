//import LazyLoad from 'react-lazyload';
import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadFeedDataApi
} from "../../action/index";
import Feedcard from '../../components/feedCard';
import _ from 'lodash';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'Featured',
        };
        this.selected = this.selected.bind(this);
        this.getPublisherImage = this.getPublisherImage.bind(this);
        this.getDisplayName = this.getDisplayName.bind(this);
    }
    selected() {
        console.log("selected");
    }

    componentWillMount() {
        this.props.dispatch(loadFeedDataApi('delhi', 50, Date.now()));
    }

    getPublisherImage(username) {
        return _.find(this.props.feedReducer.publisher_data, { 'username': username });
    }

    getDisplayName(username) {
        return _.find(this.props.feedReducer.publisher_data, { 'username': username });
    }
    render() {
        if (this.props.feedReducer.feed_data.length > 0) {
            return (
                <div>
                    <div className={this.props.headerReducer.header_data ? "mainMove" : "main"}>
                        <h3>Feed</h3>
                        <div className="dropdown">
                            <button className="filterButtons">City</button>
                            <div className="dropdown-content">
                                <p>Delhi</p>
                                <p>Andaman</p>
                                <p>Amritsar</p>
                                <p>Agra</p>
                                <p>Coorg</p>
                                <p>Delhi</p>
                                <p>Darjeeling</p>
                                <p>Jaisalmer</p>
                                <p>Kasol</p>
                                <p>Leh Ladakh</p>
                                <p>Musoorie</p>
                                <p>Mcleodganj & Dharamshala</p>
                                <p>Nasik</p>
                                <p>Nainital</p>
                                <p>Ooty</p>
                                <p>Pondicherry</p>
                                <p>Rishikesh</p>
                                <p>Srinagar</p>
                                <p>Shimla</p>
                                <p>Shillong</p>
                                <p>Udaipur</p>
                                <p>Varanasi</p>
                            </div>

                        </div>
                        <div className="dropdown">
                            <button className="filterButtons">{this.state.defaultSelected}</button>
                            <div className="dropdown-content">
                                <p onClick={this.state.selected}>Featured</p>
                                <p>Not Featured</p>
                            </div>

                        </div>
                        {this.props.feedReducer.feed_data.map((ele) => {
                            const imageUrl = this.getPublisherImage(ele.createdBy);
                            if(imageUrl){
                            return (
                                <Feedcard key={ele._id} data={this.props.feedReducer.feed_data} publisherData={this.props.feedReducer.publisher_data} eachFeed={ele}
                                    imageLink={imageUrl.profilePicture} getDisplayName={this.getDisplayName} />
                            );
                        }
                        })}

                    </div>
                </div>
            );
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Feed);