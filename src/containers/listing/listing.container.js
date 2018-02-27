import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';
import Listingcard from '../../components/listingCard';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: []
        };
    }
    componentWillMount() {
        if (!this.props.userReducer.isLoggedIn) {
            console.log('Not logged in!');
            this.props.history.push({pathname: '/login'})
        }
    }

    render() {
        const category = [ "Foods And Drinks", "Events", "See and Do","Shopping","Hotels","Health and Beauty","Experiences","Visitor's Info","Deals"];
        return (
            <div className="listingBackground">
                <h3>Listing</h3>
                <div className="feedDropdown">
                            <button className="filterButtons">Category</button>
                            <div className="dropdown-content">
                                {category.map((element, index) => {
                                        return (
                                            <div key={index}>
                                                <div
                                                    defaultChecked={true}
                                                    className="btn btn-default">{element}</div>
                                            </div>
                                        )
                                })}
                            </div>
                        </div>
                <Listingcard/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Listing);