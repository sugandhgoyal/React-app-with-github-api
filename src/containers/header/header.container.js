import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Navigationbar from '../../components/navbar';
import Searchbox from '../../components/searchbox';
import { getPropsFromHeader } from '../../action/index';
import { setTimeout } from 'timers';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: [],
        };
        this.changeUrl = this.changeUrl.bind(this);
        this.openNav = this.openNav.bind(this);
    }
    openNav() {
        let currentState = this.state.moveaside;
        this.setState({ moveaside: !currentState });
        console.log("curr", currentState);
        console.log("open", this.state.moveaside);
        setTimeout(() => {
            this.props.dispatch(getPropsFromHeader(this.state.moveaside));
        }, 200);
    }
    changeUrl(endpoint) {
        console.log('function called');
        this.props.history.push({
            pathname: '/' + endpoint
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div className={this.state.moveaside ? "mainMove" : "main"} id="mainFeed">
                        <div className="container no-pd">
                            <span className="openButton" onClick={this.openNav}>&#9776; </span>
                            <Searchbox />
                            <div id="floatRight">
                                <i className="fa fa-user-circle-o user" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <Navigationbar moveasideProp={this.state.moveaside} changeUrl={this.changeUrl} />
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

export default connect(state => state, mapDispatchToProps)(Header);