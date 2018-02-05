import React from 'react';

class Imagecard extends React.Component {
    render() {
        return (
            <div className="cardImage">
                <img
                    src="https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
                    alt="Avatar"
                    className="imageSample"/>
                <div className="container">
                    <h4 className="imageCaption">
                        <b>Caption:</b> John Doe
                    </h4>
                    <h4 className="imageAlt"><b>Image Alt: </b>Architect & Engineer</h4>
                    <i class="fa fa-edit"></i>
                    <button className="copyButton"><i class="fa fa-clone"></i>&nbsp;Copy Image URL</button>
                        <a><i className="fa fa-trash deleteImage" aria-hidden="true"></i></a>
                </div>
            </div>
        )
    }
}

export default Imagecard;
