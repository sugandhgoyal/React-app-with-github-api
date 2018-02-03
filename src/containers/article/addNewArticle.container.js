import React from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import Addarticleform from '../../components/articleForm';

class Newarticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
        }

    }
    render() {
        return (
            <div className={this.state.moveaside ? "mainMove" : "main"}>
                <h3>Add new article</h3>
                <Addarticleform />
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