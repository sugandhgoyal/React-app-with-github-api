import React from 'react';
import '../assets/css/listingCard.css';
import {connect} from 'react-redux';
import {loadlistingDataApi} from '../action/index';

class Listingcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelected: 'Featured'
        };
    }
    componentWillMount() {
        this.props.dispatch(loadlistingDataApi(10,0));
    }

    render() {
        console.log(this.props.listingReducer.listing_data);
        // {this.props.listingReducer.listing_data.map((list)=>{
        return (
            <div className="card1 card text-white">
                <div className="container">
                    <div className="row firstRow">
                        <div className="col-xs-4">
                            <img alt="list" className="listImage" src={require('../images/article.jpg')}/>
                        </div>
                        <div className="col-xs-7 titleContainer">
                            <div className="listTitle">
                                Saints N Sinners</div>
                        </div>
                        <div className="col-xs-1">
                            <i className="fa-lg fa fa-paperclip" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="row secondRow">
                        <div className="col-xs-6">
                            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>&nbsp;Published</span>
                        </div>
                        <div className="col-xs-6">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            &nbsp;Delete Feed
                        </div>
                    </div>
                </div>
            </div>
        );           
    //    })}
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Listingcard);
