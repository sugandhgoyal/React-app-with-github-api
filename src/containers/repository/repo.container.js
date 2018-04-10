import React from 'react';
import {connect} from 'react-redux';
import '../../assets/css/searchBox.css';
import '../../assets/css/repo.css';
import { FormControl } from 'react-bootstrap';
import {loadRepoDataApi,searchApiCall,filterApiFunction } from "../../action/index";
import Repositorydata from '../../components/repoData';

class Repositories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            hasMoreItems: true
        }
    }
    componentWillMount() {
        this.props.dispatch(loadRepoDataApi('firstLoad',20));
    }
    search =(e)=> {
        console.log("search");
        if (e.keyCode === 13) {
            this.handleChange(e, true);
        }
        this.handleChange(e, false);
    }
    handleChange=(e, isEnter)=> {
        console.log("handlechnage");
        if (!isEnter) {
            this.setState({
                searchString: e.target.value
            });
        } else {
            console.log("else",this.state.searchString);
            let searchedString = this.state.searchString;
            this.props.dispatch(searchApiCall(searchedString));
        }
    }

    filterFunction = (filter) => {
        this.props.dispatch(filterApiFunction(filter));
    }
    render() {
        return (
            <div>
                <div className="main" id="mainFeed">
                    <div className="col-sm-10">
                        <FormControl
                            value={this.state.searchString}
                            type="text"
                            placeholder="Search here.."
                            onChange={this.handleChange}
                            onKeyDown={this.search}/>
                        <i className="fa fa-search" aria-hidden="true" id="searchIcon"></i>
                        <i
                            className="fa fa-times"
                            aria-hidden="true"
                            id="cancelButton"
                            onClick={()=>this.setState({searchString:''})}></i>
                    </div>
                </div>
                <div className="feedDropdown">
                    <button className="filterButtons">Filter</button>
                    <div className="dropdown-content">
                        <div onClick={() => this.filterFunction('stars')}>&nbsp;Stars</div>
                        <div onClick={() => this.filterFunction('notfeatured')}>&nbsp;Watchers</div>
                        <div onClick={() => this.filterFunction('notfeatured')}>&nbsp;Score</div>
                        <div onClick={() => this.filterFunction('name')}>&nbsp;Name</div>
                        <div onClick={() => this.filterFunction('created_at')}>&nbsp;Created at</div>
                        <div onClick={() => this.filterFunction('updated_at')}>&nbsp;Updated at</div>
                    </div>
                </div>
                <Repositorydata history={this.props.history}/>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Repositories);