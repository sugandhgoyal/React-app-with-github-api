import React from 'react';
import './../App.css';

class Tableheaders extends React.Component {
    render() {
        return (
            <div className="show-grid row">
                <div className="col-xs-1 head1">Date</div>
                <div className="col-xs-1 head1">Time</div>
                <div className="col-xs-1 head1">Title</div>
                <div className="col-xs-1 head1">Type</div>
                <div className="col-xs-1 head7">Published</div>
                <div className="col-xs-1 head2">Schedule</div>
                <div className="col-xs-1 head3">Sponsored</div>
                <div className="col-xs-1 head4">Our Picks</div>
                <div className="col-xs-1 head5">Edit</div>
                <div className="col-xs-1 head6">Delete</div>
                <div className="col-xs-1 head7">User</div>
                <div className="col-xs-1 head7">Location</div>
                <div className="col-xs-1 head7">Notify Users</div>
                <div className="col-xs-1 head7">Refresh</div>
                <div className="col-xs-1 head7">Share</div>
            </div>
        )
    }
}

export default Tableheaders;