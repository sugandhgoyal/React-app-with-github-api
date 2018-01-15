import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import Datetimepicker from '../components/dateTimePicker';
import { getImageUrl } from '../utils/utils';

class Feedcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            dateValue: '',
        };
        this.changeUrlToMap = this.changeUrlToMap.bind(this);
        this.displaydt = this.displaydt.bind(this);
    }
    changeUrlToMap() {
        this.props.history.push({
            pathname: '/bb'
        })
    }
    displaydt(dt) {
        this.setState({
            dateValue: dt,
        })
    }
    render() {
        let hreff = `https://so.city/delhi/article/${this.props.eachFeed.feedEntity.entityId}`;
        let fbid = `https://www.facebook.com/share.php?u=https://so.city/delhi/article/${this.props.eachFeed.feedEntity.entityId}`;
        return (
            <div id="customers">
                <div className="card6 card">
                    <div className="container">
                        <div className="col-xs-2 left-part">
                            <img alt="article" className="articleImage" src={getImageUrl(this.props.eachFeed.imageUrl)} />
                        </div>
                        <div className="col-xs-8 middle-part">
                            <div className="title">{this.props.eachFeed.title}</div>
                            <div>
                                <img alt="user" className="image-user" src={getImageUrl(this.props.imageLink)} />
                                <span className="subtitle">&nbsp;{this.props.eachFeed.createdBy}</span>
                            </div>
                            <div className="icons">
                                <a href={hreff}><i className="fa fa-eye" aria-hidden="true"></i></a>
                                <a className="button" href="#popup1"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                <i className="fa fa-calendar" aria-hidden="true" onClick={() => { this.setState({ show: !this.state.show }) }}></i>
                                <Datetimepicker displaydt={this.displaydt} show={this.state.show} />
                                <a><i onClick={() => { this.changeUrlToMap(); }} className="fa fa-location-arrow" aria-hidden="true"></i></a>
                                <div id="popup1" className="overlay">
                                    <div className="popup">
                                        <a className="close" href="#">&times;</a>
                                        <div className="content">
                                            <a href={fbid}><img src={require('../images/fb.png')} /></a>
                                            <img src={require('../images/twitter.png')} />
                                            <img src={require('../images/google.png')} />
                                            <img src={require('../images/insta.png')} />
                                            <img src={require('../images/slack.png')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>Scheduled for : {new Date(this.props.eachFeed.publishDate).toUTCString()}</div>
                        </div>
                        <div className="col-xs-2 right-part">
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
export default withRouter(Feedcard);
// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch
//     };
// }

// export default connect(state => state, mapDispatchToProps)(Feedcard);