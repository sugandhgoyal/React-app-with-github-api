import React from 'react';
import '../App.css';

class Listingcard extends React.Component {
    render() {
        return (
            <div class="card1 card text-white">
                <div class="container">
                    <div class="row firstRow">
                        <div class="col-xs-4">
                            <img alt="list" class="listImage" src={require('../images/article.jpg')} />
                        </div>
                        <div class="col-xs-7 titleContainer">
                            <div class="listTitle"> Saints N Sinners</div>
                        </div>
                        <div class="col-xs-1">
                            <i class="fa-lg fa fa-paperclip" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="row secondRow">
                        <div class="col-xs-6">
                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>&nbsp;Published</span>
                        </div>
                        <div class="col-xs-6">
                            <i class="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
                    </div>
                    </div>
                </div>
            </div>
            // <div class="card1 card text-white">
            //     <div class="container">
            //         <div class="row row1">
            //             <div class="col-xs-4">
            //                 <img alt="list" class="listImage" src="logo1.jpg" />
            //             </div>
            //             <div class="col-xs-7 titleContainer">
            //                 <div class="title"> Saints N Sinners</div>
            //             </div>
            //             <div class="col-xs-1 sideContainer">
            //                 <i class="fa-lg fa fa-paperclip" aria-hidden="true"></i>
            //             </div>
            //         </div>
            //         <div class="row">
            //             <div class="col-xs-6">
            //                 <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            //                 <span>&nbsp;Published</span>
            //             </div>
            //             <div class="col-xs-6">
            //                 <i class="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
            //         </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Listingcard;