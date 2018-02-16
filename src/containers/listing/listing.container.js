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
        return (
            <div className="listingBackground">
                <h3>Listing</h3>
                <Listingcard/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Listing);