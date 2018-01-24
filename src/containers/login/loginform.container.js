import React from 'react';
import firebase from 'firebase';
import { auth, provider } from 'firebase';
import logo from '../../images/sologo.png';


class Loginform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    // async componentWillMount() {
    //     const user = await auth.onAuthStateChanged();
    //     if (user) this.setState({ user })
    // }
    login() {
        const result = auth().signInWithPopup(provider)
        this.setState({ user: result.user });
    }

    logout() {
        auth().signOut()
        this.setState({ user: null });
    }
    render() {
        const { user } = this.state;
        return (
            <div>
                <div class="newcard">
                    <img src={logo} alt="Avatar" className="sologo" />
                    <div class="container">
                        <a href="#" className="btn btn-primary loginbutton fbLogin"><i class="fa fa-facebook-square" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
                        <a href="#" className="btn btn-danger loginbutton gLogin"><i class="fa fa-google-plus-official" aria-hidden="true"></i>&nbsp;&nbsp;Login with facebook</a>
                    </div>
                </div>
            </div >

        )
    }
}

export default Loginform;