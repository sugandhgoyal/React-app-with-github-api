import React from 'react';
//import firebase from 'firebase';
import { auth} from 'firebase';
import logo from '../../images/socitybg.svg';
import { googleProvider, facebookProvider } from '../../utils/firebase';
import { asyncFacebookLogin, asyncGoogleSignin} from '../../action/ayncAction.js/user.async.action';


class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // user: null,
        }
        this.Firebase = this.Firebase.bind(this);
        this.facebook = this.facebook.bind(this);
    }
    componentWillMount() {
        this.member = <a href="#" className="btn btn-primary loginbutton fbLogin" onClick={() => this.Firebase('facebook')}>
        <i className="fa fa-facebook-f" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
    }
    googleLogin = (responseData) => {
        this.props.dispatch(asyncGoogleSignin(responseData, responseData.googleId))
            .then((data) => {
                if (data.success) {
                    console.log("glogin data",data );
                    // this.setState({
                    //     loginDialogueAppear: false,
                    //     loginDialogueAppearMobile: false
                    // });
                    // cookies.set('token', data.accessToken, {path: '/'});
                    // cookies.set('mode', 'google');
                }
            })
            .catch(error => {

            });
    };


    facebookLogin = (responseData) => {
        if (responseData.additionalUserInfo) {
            if (responseData.additionalUserInfo.profile.email) {
                this.props.dispatch(asyncFacebookLogin(responseData))
                    .then(data => {
                        console.log("fblogin data",data);
                        // if (data.success) {
                        //     this.setState({
                        //         loginDialogueAppear: false,
                        //         loginDialogueAppearMobile: false
                        //     });
                        //     cookies.set('token', data.accessToken, {path: '/'});
                        //     cookies.set('mode', 'facebook');
                        // }
                    })
                    .catch(error => {

                    });
            }
            else {
                console.log("else email modal");
            }
        }
    };

    // returnDisplayNameNonHome = () => {
    //     if(this.props.userReducer.isLoggedIn) {
    //         if(this.props.userReducer.userData.user) {
    //             return (
    //                 <button className="no-home-desktop-button vertically-center" onClick={this.onLoginClick}>{this.props.userReducer.userData.user.displayName}</button>
    //             );
    //         }

    //         else {
    //             return (
    //                 <button className="no-home-desktop-button vertically-center" onClick={this.onLoginClick}></button>
    //             );
    //         }
    //     }
    //     else {
    //         return (
    //             <button className="no-home-desktop-button vertically-center" onClick={this.onLoginClick}>Login/Signup</button>
    //         );
    //     }
    // }

    facebook(result) {
        console.log("fb", result.operationType);
        if (result.operationType === 'signIn') {
            this.member = <button>logout</button>;
        }
        else {
            this.member = <a href="#" className="btn btn-primary loginbutton fbLogin" onClick={() => this.Firebase('facebook')}>
            <i className="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
        }
    }
    Firebase = (mode) => {
        let provider
        if (provider === 'google') {
            provider = googleProvider;
        }
        else {
            provider = facebookProvider;
        }
        auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                if (mode === 'facebook') {
                    this.facebookLogin(result);//state
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
        //const { user } = this.state;
        return (
            <div>
                <div className="newcard">
                    <img src={logo} alt="Avatar" className="sologo" />
                    <div className="container">
                        {this.member}
                        <a href="#" className="btn btn-danger loginbutton gLogin" onClick={() => this.Firebase('google')}>
                        <i className="fa fa-google" aria-hidden="true"></i>&nbsp;&nbsp;Login with google</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Loginform;