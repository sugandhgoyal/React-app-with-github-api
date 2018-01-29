import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Listingcard from '../../components/listingCard';

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: [],
        };
    }
    render() {
        return (
            <div>
                <Listingcard />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}

export default connect(state => state, mapDispatchToProps)(Listing);