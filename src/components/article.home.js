import React from 'react';
import Navigationbar from './navbar';
import { connect } from 'react-redux';

class ArticleHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.filterText = "";
        this.state.products = [
            {
                Title: "Suryaveer's Live Gig + Unlimited Booze @ Farzi Cafe & More AWESOME ",
                PubAllFeed: "0",
                Publisher: "so delhi",
                Rss: "0",
                AMP: "1",
                Delete: "del",
                Publish: "icon",

            }, {
                Title: "Suryaveer's Live Gig + Unlimited Booze @ Farzi Cafe & More AWESOME NYE Deal",
                PubAllFeed: "0",
                Publisher: "so delhi",
                Rss: "0",
                AMP: "1",
                Delete: "del",
                Publish: "icon",
            }, {
                Title: "Suryaveer's Live Gig + Unlimited Booze @ Farzi Cafe & M Deals From nearbuy.com",
                PubAllFeed: "0",
                Publisher: "so delhi",
                Rss: "0",
                AMP: "1",
                Delete: "del",
                Publish: "icon",
            }, {
                Title: "Suryaveer's Live Gig + Unlimited Booze @ FaESOME NYE Deals From nearbuy",
                PubAllFeed: "0",
                Publisher: "so delhi",
                Rss: "0",
                AMP: "1",
                Delete: "del",
                Publish: "icon",
            }, {
                Title: "Suryaveer's Live Gig + Unlimited Booze @ Farzi Cafe & More AWESOME NYE Deals",
                PubAllFeed: "0",
                Publisher: "so delhi",
                Rss: "0",
                AMP: "1",
                Delete: "del",
                Publish: "icon",
            }
        ];

    }
    render() {
        return (
            <Navigationbar products={this.props.data} />
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(ArticleHome);