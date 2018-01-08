import React from 'react';
import '../App.css';
import logo from '../images/logo.png';
import Feeds from '../containers/feed/feed.container';

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
                        <li>
                            <a href="#" id="title">So Dashboard</a>
                        </li>
                        <li>
                            <img src={logo} className="logo" />
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-building" aria-hidden="true"></i>&nbsp;City
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li className="feed">
                                    <a href={Feeds}> <i className="fa fa-bars"></i>&nbsp;Feeds</a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-database"></i>&nbsp;Listings
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-newspaper-o"></i>&nbsp;Articles
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-home"></i>&nbsp;Articles Home</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-plus-square"></i>&nbsp;Add New Article</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-camera-retro"></i>&nbsp;Media</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;Memes</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-users"></i>&nbsp;Users
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-home"></i>&nbsp;Users Home</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-plus-square"></i>&nbsp;Add New Users</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-window-maximize" aria-hidden="true"></i>&nbsp;Apps
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-slack" aria-hidden="true"></i>&nbsp;Slack</a>

                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div >)
    }
}

export default Navigationbar;