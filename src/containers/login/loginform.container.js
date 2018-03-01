import React from 'react';
import {connect} from 'react-redux';
import Cookies from 'universal-cookie';
import {auth} from 'firebase';
import '../../assets/css/login.css';
import logo from '../../images/socitybg.svg';
import {googleProvider, facebookProvider} from '../../utils/firebase';
import {asyncFacebookLogin, asyncGoogleSignin, asyncCheckUserToken} from '../../action/ayncAction.js/user.async.action';

const cookies = new Cookies();

class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {     
    const x = cookies.get('token');     
    if (x) {
      this.props.dispatch(asyncCheckUserToken(x));     
        } 
    }

    googleLogin = (responseData) => {
        console.log(this.props);
        if (responseData) {
            console.log(this.props.history);
            this.props.dispatch(asyncGoogleSignin(responseData))
                .then((data) => {
                    cookies.set('token', responseData.credential.accessToken, {path: '/'});
                    cookies.set('mode', 'google');
                    console.log("glogin cookies",cookies);
                    this.props.history.push({pathname: '/dashboard'}); //not working
                })
                .catch(error => {
                    console.log(error);
                })
        }
    };

    facebookLogin = (responseData) => {
        if (responseData.additionalUserInfo) {
            if (responseData.additionalUserInfo.profile.email) {
                this
                    .props
                    .dispatch(asyncFacebookLogin(responseData))
                    .then(data => {
                        console.log("fblogin data", data);
                        if (this.props.userReducer.isLoggedIn) {
                            this
                                .props
                                .history
                                .push({pathname: '/dashboard'});
                        }
                    })
                    .catch(error => {});
            } else {
                console.log("else email modal");
            }
        }
    };

    displayNameFunc = () => {
        if (this.props.userReducer.isLoggedIn) {
                console.log("if", this.props.userReducer);
                return (
                    <div className="container">
                    <div>Logged In!</div>
                    </div>
                );
        } else {
            return (
                <div className="container">
                    <span className="btn loginbutton fbLogin">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook
                    </span>
                    <span
                        className="btn btn-danger loginbutton gLogin"
                        onClick={() => this.Firebase('google')}>
                        <i className="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;Login with google
                    </span>
                </div>
            );
        }
    }
    facebook(result) {
        console.log("fb", result.operationType);
        if (result.operationType === 'signIn') {
            this.member = <button>logout</button>;
        } else {
            this.member = <a
                className="btn btn-primary loginbutton fbLogin"
                onClick={() => this.Firebase('facebook')}>
                <i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
        }
    }
    Firebase = (mode) => {
        let provider;
        console.log("mode", mode);
        if (mode === 'google') {
            provider = googleProvider;
        } else {
            provider = facebookProvider;
        }
        auth()
            .signInWithPopup(provider)
            .then((result) => {
                if (mode === 'facebook') {
                    this.facebookLogin(result); //state
                }
                if (mode === 'google') {
                    this.googleLogin(result); //state
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        console.log(this.props.userReducer.isLoggedIn);
        return (

            <div>
                <div className="newcard">
                    <img src={logo} alt="Avatar" className="sologo"/> {this.displayNameFunc()}
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Loginform);