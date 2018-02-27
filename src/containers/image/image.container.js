
import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/imageCard.css';
import Imagecard from '../../components/imageCard';
import axios from 'axios';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';

class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentWillMount() {
        if (!this.props.userReducer.isLoggedIn) {
            console.log('Not logged in!');
            this.props.history.push({pathname: '/login'})
        }
    }
    componentDidMount() {
        // Request for images tagged xmas
        //https://res.cloudinary.com/<your_cloud_name>/<resource_type>/list/<tag>.json
        axios
            .get('https://res.cloudinary.com/dashboardui/image/upload/list/xmas.json')
            .then(res => {
                console.log("res",res);
                this.setState({gallery: res});
            });
    }
    uploadWidget = () => {
        window.cloudinary
            .openUploadWidget({
                cloud_name: 'dashboardUI',
                upload_preset: 'fszoi1n9',
                tags: ['xmas']
            }, function (error, result) {
                console.log(result);
            });
    }
    render() {
        return (
            <div>
            <div className="main">
                <h1>Galleria</h1>
                <div className="upload">
                    <button onClick={this.uploadWidget.bind(this)} className="upload-button">Add Image</button>
                </div>
                <Imagecard/>
            </div>
        <div className="main">     
        <h1>Galleria</h1>     
        <div className="gallery">
             <CloudinaryContext cloudName="dashboardUI">  
             {/* <img src="http://res.cloudinary.com/dashboardui/image/upload/sample.jpg"/>       */}
             {
            this.state.gallery.map(data => {                     
            return (
                <div className="responsive" key={data.public_id}>
                <div className="img">                                 
                <a target="_blank" href={`https://res.cloudinary.com/dashboardUI/image/upload/${data.public_id}.jpg`}>                                     <Image publicId={data.public_id}>
                <Transformation crop="scale" width="300" height="200" dpr="auto" responsive_placeholder="blank"/>  
                </Image>
               </a><div className="desc">Created at{data.created_at}</div>                             
               </div>
             </div>                     
            )                 
        })             
        }
        </CloudinaryContext>         
        <div className="clearfix"></div>     
        </div>
        </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Images);