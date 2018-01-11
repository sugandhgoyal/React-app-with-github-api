import React from 'react';
import '../App.css';
import Datetimepicker from '../components/dateTimePicker';
import Maps from '../components/mapComponent';

class Feedcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        //this.state.showDateTimePicker = this.state.showDateTimePicker.bind(this);
    }

    render() {
        let hreff = `https://so.city/delhi/article/${this.props.eachFeed.feedEntity.entityId}`;
        return (
            <div id="customers">
                <div className="card6 card">
                    <div className="container">
                        <div className="col-xs-2 left-part">
                            <img alt="article" src={require('../images/article.jpg')} />
                        </div>
                        <div className="col-xs-9 middle-part">
                            <div className="title">{this.props.eachFeed.title}</div>
                            <div>
                                <img alt="user" className="image-user" src={require("../images/user.png")} />
                                <span>&nbsp;{this.props.eachFeed.createdBy}</span>
                            </div>
                            <div className="icons">
                                <a href={hreff}><i className="fa fa-eye" aria-hidden="true"></i></a>
                                <a className="button" href="#popup1"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                <i className="fa fa-calendar" aria-hidden="true" onClick={() => { this.setState({ show: !this.state.show }) }}></i>
                                <Datetimepicker show={this.state.show} />
                                <a><i href={Maps} className="fa fa-location-arrow" aria-hidden="true"></i></a>
                                <div id="popup1" className="overlay">
                                    <div className="popup">
                                        <h4>Share here..</h4>
                                        <a className="close" href="#">&times;</a>
                                        <div className="content">
                                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                            <i className="fa fa-slack" aria-hidden="true"></i>
                                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                                            <i className="fa fa-google-plus-official" aria-hidden="true"></i>
                                            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-1 right-part">
                            <i className={this.props.eachFeed.published === 1 ? "fa fa-check-circle-o" : "fa fa-file-text-o"} aria-hidden="true"></i>
                            {this.props.eachFeed.published === 1 && <span>&nbsp;Published</span>}
                            {this.props.eachFeed.published === 0 && <span>&nbsp;Draft</span>}

                            <br />
                            <i className="fa fa-star" aria-hidden="true"></i> &nbsp;Featured
                        <br />
                            <i className="fa fa-bell" aria-hidden="true"></i> &nbsp;Notify Users
                        <br />
                            <i className="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedcard;