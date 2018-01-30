import React from 'react';
import '../App.css';
import { withRouter } from 'react-router-dom';
import Datetimepicker from '../components/dateTimePicker';
import { getImageUrl } from '../utils/utils';
import Displaydate from './displayDate';
import MapWithASearchBox from './mapComponent';

class Feedcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            newDate: '',
        };
        this.changeUrlToMap = this.changeUrlToMap.bind(this);
        this.getDate = this.getDate.bind(this);
        this.getPlace = this.getPlace.bind(this);
    }
    componentWillMount() {
        this.setState({
            newDate: new Date(this.props.eachFeed.publishDate).toUTCString()
        })
    }
    changeUrlToMap() {
        this.props.history.push({
            pathname: '/bb'
        })
    }
    getDate(date) {
        this.setState({
            newDate: date,
        })
    }
    getPlace(place) {
        this.setState({
            newPlace: place,
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
                                <a className="button" href="#popup2"><i className="fa fa-location-arrow" aria-hidden="true"></i></a>
                                <Datetimepicker displaydt={this.displaydt} show={this.state.show} getDate={this.getDate} />
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
                                <div id="popup2" className="overlay">
                                    <div className="popup">
                                        <a className="close" href="#">&times;</a>
                                        <div className="content">
                                            <MapWithASearchBox getPlace={this.getPlace} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Displaydate publishedDate={this.state.newDate} />
                            <div className="displayPlace">{this.state.newPlace}</div>
                        </div>
                        <div className="col-xs-2 right-part">
                            <ul>
                                <li>
                                    <i className={this.props.eachFeed.published === 1 ? "fa fa-check-circle-o" : "fa fa-file-text-o"} aria-hidden="true"></i>
                                    {this.props.eachFeed.published === 1 && <span>&nbsp;Published</span>}
                                    {this.props.eachFeed.published === 0 && <span>&nbsp;Draft</span>}
                                </li>
                                <li>
                                    <i className="fa fa-star" aria-hidden="true"></i> &nbsp;Featured
                                </li>
                                <li>
                                    <i className="fa fa-bell" aria-hidden="true"></i> &nbsp;Notify Users
                                </li>
                                <li>
                                    <i className="fa fa-trash" aria-hidden="true"></i> &nbsp;Delete Feed
                                 </li>
                            </ul>
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