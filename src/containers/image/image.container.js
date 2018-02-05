//import LazyLoad from 'react-lazyload';
import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/imageCard.css';
// import {loadFeedDataApi} from "../../action/index"; import Feedcard from
// '../../components/feedCard';
import Imagecard from '../../components/imageCard';
import axios from 'axios';
import {cloudinary,CloudinaryContext, Transformation, Image }from 'cloudinary-react'; 


class Images extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
        // Request for images tagged xmas       
        axios.get('https://res.cloudinary.com/christekh/image/list/xmas.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }
    uploadWidget=()=> {
        cloudinary.openUploadWidget({ cloud_name: 'dashboardui', upload_preset: 'fszoi1n9', tags:['xmas']},
            function(error, result) {
                console.log(result);
            });
    }
    render(){
        return (
            <div className="main">
            <h1>Galleria</h1>
            <div className="upload">
                <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                    Add Image
                </button>
            </div>
            <Imagecard/>
        </div>
            // <div className="main">
            //     <h1>Galleria</h1>
            //     <div className="gallery">
            //         <CloudinaryContext cloudName="CLOUDNAME">
            //             {
            //                 this.state.gallery.map(data => {
            //                     return (
            //                         <div className="responsive" key={data.public_id}>
            //                             <div className="img">
            //                                 <a target="_blank" href={`https://res.cloudinary.com/christekh/image/upload/${data.public_id}.jpg`}>
            //                                     <Image publicId={data.public_id}>
            //                                         <Transformation
            //                                             crop="scale"
            //                                             width="300"
            //                                             height="200"
            //                                             dpr="auto"
            //                                             responsive_placeholder="blank"
            //                                         />
            //                                     </Image>
            //                                 </a>
            //                                 <div className="desc">Created at {data.created_at}</div>
            //                             </div>
            //                         </div>
            //                     )
            //                 })
            //             }
            //         </CloudinaryContext>
            //         <div className="clearfix"></div>
            //     </div>
            // </div>

        );
    }   
}


const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Images);