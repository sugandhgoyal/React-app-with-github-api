import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/imageCard.css';
import Imagecard from '../../components/imageCard';
import axios from 'axios';
//import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Images);