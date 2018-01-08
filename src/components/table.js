import React from 'react';
import SwitchButton from './switchButton';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPublished: 0,
        }
    }
    render() {
        return (
            <div>
                <div className="pageTitle">Articles</div>
                <div className="table" >
                    <div className="container " >
                        <div className="show-grid row">
                            <div className="col-xs-4 head1">Title</div>
                            <div className="col-xs-1 head2">Pub All</div>
                            <div className="col-xs-3 head3">Publisher</div>
                            <div className="col-xs-1 head4">Rss</div>
                            <div className="col-xs-1 head5">AMP</div>
                            <div className="col-xs-1 head7">Publish</div>
                        </div>
                        {this.props.products.map((ele, index) => {
                            let hreff = `https://so.city/amp/delhi/${ele._id}.html`;
                            return (

                                <div className="show-grid row rowData" key={index}>
                                    <div className="col-xs-4">{ele.title}</div>
                                    <div className="col-xs-1">
                                        <SwitchButton checkedProp={ele.allFeedPublished} />
                                    </div>
                                    <div className="col-xs-3 publisher">{ele.createdBy}</div>
                                    <div className="col-xs-1">
                                        <SwitchButton checkedProp={ele.rssCreated} />
                                    </div>
                                    <div className="col-xs-1 amp">
                                        <i className="fa fa-refresh" aria-hidden="true"></i> &nbsp;
                                        <a href={hreff} ><i className="fa fa-link" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="col-xs-1"><i className={ele.published === 1 ? "fa fa-eye" : "fa fa-eye-slash"} aria-hidden="true"></i></div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;