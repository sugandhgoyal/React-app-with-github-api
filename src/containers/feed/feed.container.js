import LazyLoad from 'react-lazyload';
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
            moveaside: false,
            feed_items: [],
            publisher_items: [],
            defaultSelected: 'Featured',
        };
        this.selected = this.selected.bind(this);
        this.getPublisherImage = this.getPublisherImage.bind(this);
    }
    selected() {
        console.log("selected");
    }

    componentWillMount() {
        this.props.dispatch(loadFeedDataApi('delhi', 50, "1513154868810"));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            feed_items: nextProps.feedReducer.feed_data,
            publisher_items: nextProps.feedReducer.publisher_data
        })
    }

    getPublisherImage(username) {
        return _.find(this.state.publisher_items, { 'username': username });
    }

    render() {
        return (
            <div>
                <div className={this.state.moveaside ? "mainMove" : "main"}>
                    <div className="dropdown">
                        <button>City</button>
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
                        <button>{this.state.defaultSelected}</button>
                        <div className="dropdown-content">
                            <p onClick={this.state.selected}>Featured</p>
                            <p>Not Featured</p>
                        </div>

                    </div>
                    {this.state.feed_items.map((ele) => {
                        var imageUrl = this.getPublisherImage(ele.createdBy);
                        return (
                            <Feedcard key={ele._id} data={this.state.feed_items} publisherData={this.props.feedReducer.publisher_data} eachFeed={ele}
                                imageLink={imageUrl.profilePicture} />
                        );
                    })}

                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Feed);