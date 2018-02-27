import React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/articleForm.css';
import Addarticleform from '../../components/articleForm';

class Newarticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
        }
    }
    // componentWillMount() {
    //     if (!this.props.userReducer.isLoggedIn) {
    //         this.props.history.push({pathname: '/login'})
    //     }
    // }
    openNav = () => {
        let currentState = this.state.moveaside;
        this.setState({
            moveaside: !currentState
        });
        // setTimeout(() => {
        //     this.props.dispatch(getPropsFromHeader(this.state.moveaside));
        // }, 200);
    }
    render() {
        return (
            <div className={this.state.moveaside ? "divChangeBackground": "divNotChange" }>
                <h3 id="addArticleHeading">Add new article</h3>
                <Addarticleform moveaside={this.state.moveaside} openNav={this.openNav} history={this.props.history} />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}


export default connect(state => state, mapDispatchToProps)(Newarticle);