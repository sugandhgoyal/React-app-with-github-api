import React from 'react';
import SwitchButton from './switchButton';
import ParentComponent from './datePicker';
//import TableHeader from './tableHeaders';
import { Table, TableHeader } from 'react-bootstrap';


class Feedtable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: 0,
        }
    }
    render() {
        console.log("dd", this.props);
        return (
            <div>
                <div className="pageTitle">Feed</div>
                <div className="table" >
                    <div >
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Published</th>
                                    <th>Schedule</th>
                                    <th>Sponsored</th>
                                    <th>Our Picks</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>User</th>
                                    <th>Location</th>
                                    <th>Notify Users</th>
                                    <th>Refresh</th>
                                    <th>Share</th>
                                </tr>
                            </thead>
                        </Table>
                        <Table responsive>
                            <tbody>
                                {this.props.products.map((ele, index) => {
                                    return (
                                        <tr>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td><i className="fa fa-eye" aria-hidden="true"></i></td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            {/* <td>
                                                <ParentComponent />
                                            </td> */}
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feedtable;