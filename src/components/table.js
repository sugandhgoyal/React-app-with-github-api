import React from 'react';
import SwitchButton from './switchButton';
import SwitchButtonPubAll from './switchButtonPubAll';
import '../assets/css/table.css';
import {connect} from 'react-redux';
import {loadArticleDataApi} from "../action/index";
import InfiniteScroll from 'react-infinite-scroller';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    loadMore = () => {
        let length = this.props.articleReducer.article_data.length;
        if(!this.props.articleReducer.has_more_items) {
            this.props.dispatch(loadArticleDataApi(length, 'lazyLoad'));
        }
    }

    render() {
        return (
            <div>
                <InfiniteScroll
                    pageStart={1}
                    loadMore={this.loadMore}
                    hasMore={true}
                    loader={
                < div className = "loader" key = {0} >Loading...........
                    </div>}>
                    <div className="table">
                        <div className="container ">
                            <div className="show-grid row">
                                <div className="col-xs-4 head1">Title</div>
                                <div className="col-xs-2 head2">Pub All</div>
                                <div className="col-xs-2 head3">Publisher</div>
                                <div className="col-xs-2 head4">Rss</div>
                                <div className="col-xs-1 head5">AMP</div>
                                <div className="col-xs-1 head7">Publish</div>
                            </div>
                            {this.props.articleReducer.article_data.map((ele, index) => {
                                    let hreff = `https://so.city/amp/delhi/${ele._id}.html`;
                                    return (

                                        <div className="show-grid row rowData" key={index}>
                                            <div className="col-xs-4">{ele.title}</div>
                                            <div className="col-xs-2">
                                                <SwitchButtonPubAll checkedProp={ele.allFeedPublished}/>
                                            </div>
                                            <div className="col-xs-2 publisher">{ele.createdBy}</div>
                                            <div className="col-xs-2">
                                                <SwitchButton checkedProp={ele.rssCreated}/>
                                            </div>
                                            <div className="col-xs-1 amp">
                                                <i className="fa fa-refresh" aria-hidden="true"></i>
                                                &nbsp;
                                                <a href={hreff}>
                                                    <i className="fa fa-link" aria-hidden="true"></i>
                                                </a>
                                            </div>
                                            <div className="col-xs-1">
                                                <i
                                                    className={ele.published === 1
                                                    ? "fa fa-eye eyee"
                                                    : "fa fa-eye-slash"}
                                                    aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Table);