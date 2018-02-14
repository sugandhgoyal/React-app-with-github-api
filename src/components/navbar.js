import React from 'react';
import '../assets/css/navbar.css';
import logo from '../images/socitybg.svg';

class Navigationbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <nav id={this.props.moveasideProp ? "openNavbar" : "sidebar-wrapper"} className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <ul className="nav sidebar-nav">
                        <li className="dashboard">
                            <span id="title">Dashboard</span>
                        </li>
                        <li>
                            <img alt="so delhi logo" src={logo} className="logo" />
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-building-o" aria-hidden="true"></i>&nbsp;City
                                <img alt="twitter"className="dropdownArrow1" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li className="feed">
                                    <a onClick={() => { this.props.changeUrl('feed'); }}> <i className="fa fa-bars"></i>&nbsp;Feeds</a>
                                </li>
                                <li>
                                    <a> <i className="fa fa-database"></i>&nbsp;Listings
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-newspaper-o"></i>&nbsp;Articles
                                <img alt="twitter"className="dropdownArrow2" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a onClick={() => { this.props.changeUrl('articlehome'); }}><i className="fa fa-home"></i>&nbsp;Articles Home</a>
                                </li>
                                <li>
                                    <a onClick={() => { this.props.changeUrl('addarticle'); }}><i className="fa fa-plus-square"></i>&nbsp;Add New Article</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-camera-retro" aria-hidden="true"></i>&nbsp;Media
                                <img alt="twitter"className="dropdownArrow3" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a><i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;Images</a>
                                </li>
                                <li>
                                    <a><i className="fa fa-video-camera" aria-hidden="true"></i>&nbsp;Videos</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-file-video-o" aria-hidden="true"></i>&nbsp;Gifs</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-users"></i>&nbsp;Users
                                <img alt="twitter"className="dropdownArrow4" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a ><i className="fa fa-home"></i>&nbsp;Users Home</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-plus-square"></i>&nbsp;Add New Users</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-window-maximize" aria-hidden="true"></i>&nbsp;Apps
                                <img alt="twitter"className="dropdownArrow5" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a ><i className="fa fa-slack" aria-hidden="true"></i>&nbsp;Slack</a>

                                </li>
                                <li>
                                    <a ><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-cloud-upload" aria-hidden="true"></i>&nbsp;Cloudinary</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Digital Ocean</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Mail Chimp</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Sms Service</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-google-plus-official" aria-hidden="true"></i>&nbsp;Google+</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-instagram" aria-hidden="true"></i>&nbsp;Instagram</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Facebook</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-users"></i>&nbsp;Monitoring
                                <img alt="twitter"className="dropdownArrow6" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a ><i className="fa fa-home"></i>&nbsp;page 1</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-plus-square"></i>&nbsp;Page 2</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-search" aria-hidden="true"></i>&nbsp;Search
                                <img alt="twitter"className="dropdownArrow7" src={require('../images/arrow.png')}/>
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a ><i className="fa fa-home"></i>&nbsp;Manual Scheduler</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-plus-square"></i>&nbsp;Search analytics</a>
                                </li>
                                <li>
                                    <a ><i className="fa fa-plus-square"></i>&nbsp;Search Server Health</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div >)
    }
}

export default Navigationbar;