import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import MyMapComponent from '../../components/mapComponent';

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
                <MyMapComponent isMarkerShown />
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