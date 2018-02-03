import React from 'react';
import '../App.css';

class Listingcard extends React.Component {
    render() {
        return (
            <div className="card1 card text-white">
                <div className="container">
                    <div className="row firstRow">
                        <div className="col-xs-4">
                            <img alt="list" className="listImage" src={require('../images/article.jpg')} />
                        </div>
                        <div className="col-xs-7 titleContainer">
                            <div className="listTitle"> Saints N Sinners</div>
                        </div>
                        <div className="col-xs-1">
                            <i className="fa-lg fa fa-paperclip" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row secondRow">
                        <div className="col-xs-6">
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>&nbsp;Published</span>
                        </div>
                        <div className="col-xs-6">
                            <i className="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
                    </div>
                    </div>
                </div>
            </div>
            // <div className="card1 card text-white">
            //     <div className="container">
            //         <div className="row row1">
            //             <div className="col-xs-4">
            //                 <img alt="list" className="listImage" src="logo1.jpg" />
            //             </div>
            //             <div className="col-xs-7 titleContainer">
            //                 <div className="title"> Saints N Sinners</div>
            //             </div>
            //             <div className="col-xs-1 sideContainer">
            //                 <i className="fa-lg fa fa-paperclip" aria-hidden="true"></i>
            //             </div>
            //         </div>
            //         <div className="row">
            //             <div className="col-xs-6">
            //                 <i className="fa fa-check-circle-o" aria-hidden="true"></i>
            //                 <span>&nbsp;Published</span>
            //             </div>
            //             <div className="col-xs-6">
            //                 <i className="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
            //         </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Listingcard;