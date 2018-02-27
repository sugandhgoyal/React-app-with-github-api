import React from 'react';
import {connect} from 'react-redux';
import '../../App.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        if (!this.props.userReducer.isLoggedIn) {
            console.log('Not logged in!');
            this.props.history.push({pathname: '/login'})
        }
    }
    render() {
        return (
            <div>
            <h3>Dashboard</h3>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Dashboard);