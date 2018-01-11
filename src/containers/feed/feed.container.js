import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import {
    loadFeedDataApi
} from "../../action/index";
import Feedcard from '../../components/feedCard';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: [],
            defaultSelected: 'Featured',
        };
        this.selected = this.selected.bind(this);
    }
    selected() {
        console.log("selected");
    }

    componentWillMount() {
        this.props.dispatch(loadFeedDataApi(2, 'delhi'));
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            feed_items: nextProps.feedReducer.feed_data
        })
    }
    render() {
        return (
            <div>
                <div className={this.state.moveaside ? "mainMove" : "main"}>
                    <div class="dropdown">
                        <button>City</button>
                        <div class="dropdown-content">
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
                    <div class="dropdown">
                        <button>{this.state.defaultSelected}</button>
                        <div class="dropdown-content">
                            <p onClick={this.state.selected}>Featured</p>
                            <p>Not Featured</p>
                        </div>

                    </div>
                    {this.state.feed_items.map((ele) => {
                        return (<Feedcard data={this.state.feed_items} eachFeed={ele} />);
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