//import LazyLoad from 'react-lazyload';
import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/feedCard.css';
import {loadFeedDataApi, filterFeedApi, filterCityFeedApi} from "../../action/index";
import Feedcard from '../../components/feedCard';

var _ = {
    find: require('lodash/find'),
  };

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'Featured'
        };
    }
    featureFilter = (action) => {
        console.log("action", action);
        if (action === "notfeatured") {
            this
                .props
                .dispatch(filterFeedApi('delhi', 50, Date.now(), false));
        } else {
            this
                .props
                .dispatch(filterFeedApi('delhi', 50, Date.now(), true));
        }
    }

    cityFilter = (city) => {
        console.log("city", city);
        this
            .props
            .dispatch(filterCityFeedApi(city, 50, Date.now(), true));
    }

    componentWillMount() {
        if (this.props.userReducer.isLoggedIn === true) {
            this.props.dispatch(loadFeedDataApi('delhi', 50, Date.now()));
        } 
        else {
            console.log('Not logged in!');
            this.props.history.push({pathname: '/login'})
        }
    }

    getPublisherImage = (username) => {
        return _.find(this.props.feedReducer.publisher_data, {'username': username});
    }

    getDisplayName = (username) => {
        return _.find(this.props.feedReducer.publisher_data, {'username': username});
    }
    render() {
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
        if (this.props.feedReducer.feed_data.length > 0) {
            return (
                <div className="feedBackground">
                    <div>
                        <h3>Feed</h3>
                        <div className="feedDropdown">
                            <button className="filterButtons">City</button>
                            <div className="dropdown-content">
                                {cities.map((city, index) => {
                                    if (city === "Delhi") 
                                        return (
                                            <div key={index}>
                                                <div
                                                    defaultChecked={true}
                                                    onClick={() => this.cityFilter('Delhi')}
                                                    className="city btn btn-default">{city}</div>
                                            </div>
                                        )
                                    else 
                                        return (
                                            <div key={index}>
                                                <div
                                                    defaultChecked={false}
                                                    onClick={() => this.cityFilter(city)}
                                                    className="city btn btn-default">{city}</div>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                        <div className="feedDropdown">
                            <button className="filterButtons">{this.state.defaultSelected}</button>
                            <div className="dropdown-content2">
                                <div onClick={() => this.featureFilter('featured')}>Featured</div>
                                <div onClick={() => this.featureFilter('notfeatured')}>Not Featured</div>
                            </div>

                        </div>
                        {this
                            .props
                            .feedReducer
                            .feed_data
                            .map((ele) => {
                                const imageUrl = this.getPublisherImage(ele.createdBy);
                                if (imageUrl) {
                                    return (<Feedcard
                                        key={ele._id}
                                        eachFeed={ele}
                                        imageLink={imageUrl.profilePicture}
                                        getDisplayName={this.getDisplayName}/>);
                                }
                            })
}
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
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Feed);