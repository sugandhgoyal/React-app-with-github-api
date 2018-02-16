import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/header.css';
import Cookies from 'universal-cookie';
import Navigationbar from '../../components/navbar';
import Searchbox from '../../components/searchbox';
import {getPropsFromHeader} from '../../action/index';
import {setTimeout} from 'timers';
import {asyncLogout} from '../../action/ayncAction.js/user.async.action';
import {asyncCheckUserToken} from '../../action/ayncAction.js/user.async.action';

const cookies = new Cookies();

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            feed_items: []
        };
    }
    componentWillMount() {
        const x = cookies.get('token');
        if (x) {
            this.props.dispatch(asyncCheckUserToken(x));
        }
    }

    openNav = () => {
        let currentState = this.state.moveaside;
        this.setState({
            moveaside: !currentState
        });
        setTimeout(() => {
            this.props.dispatch(getPropsFromHeader(this.state.moveaside));
        }, 200);
    }
    changeUrl = (endpoint) => {
        this.props.history.push({
                pathname: '/' + endpoint
            })
    }

    logout = () => {
        cookies.remove('token');
        this.props.dispatch(asyncLogout());
        console.log(this.props.history);
        // this.props.context.history.push({
        //     pathname: '/login'
        // });
    };

    render() {
        console.log(this.props.userReducer);
        return (
            <div>
                {this.props.userReducer.isLoggedIn === true && 
                <div>
                    <div className={this.state.moveaside ? "mainMove": "main"} id="mainFeed">
                        <div className="row">
                            <span className="openButton" onClick={this.openNav}>&#9776;
                            </span>
                            <Searchbox/>
                            <div className="userDataColumn col-sm-1">
                            <img className="loginUserImage" src={this.props.userReducer.userData.photoURL}/>
                            <button className="logout" onClick={this.logout}>Logout</button>
                                 {/* {this.props.userReducer.userData.displayName} */}
                                {/* <i className="fa fa-user-circle-o user" aria-hidden="true"></i> */}
                            </div>
                        </div>
                    </div>
                    <Navigationbar moveasideProp={this.state.moveaside} changeUrl={this.changeUrl}/>
                </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Header);