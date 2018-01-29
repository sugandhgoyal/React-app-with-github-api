import React from 'react';
import firebase from 'firebase';
import { auth, provider } from 'firebase';
import logo from '../../images/socitybg.svg';
import { googleProvider, facebookProvider } from '../../utils/firebase';


class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        }
        this.Firebase = this.Firebase.bind(this);
        this.facebook = this.facebook.bind(this);
    }
    componentWillMount() {
        this.member = <a href="#" className="btn btn-primary loginbutton fbLogin" onClick={() => this.Firebase('facebook')}><i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
    }
    facebook(result) {
        console.log("fb", result.operationType);
        if (result.operationType == 'signIn') {
            this.member = <button>logout</button>;
        }
        else {
            this.member = <a href="#" className="btn btn-primary loginbutton fbLogin" onClick={() => this.Firebase('facebook')}><i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
        }
    }
    Firebase = (mode) => {
        let provider
        if (provider == 'google') {
            provider = googleProvider;
        }
        else {
            provider = facebookProvider;
        }
        auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                if (mode === 'facebook') {
                    this.facebook(result);
                }
                if (mode === 'google') {
                    this.props.google(result);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                <div class="newcard">
                    <img src={logo} alt="Avatar" className="sologo" />
                    <div class="container">
                        {this.member}
                        <a href="#" className="btn btn-danger loginbutton gLogin" onClick={() => this.Firebase('google')}><i class="fa fa-google-plus-official" aria-hidden="true"></i>&nbsp;&nbsp;Login with google</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Loginform;