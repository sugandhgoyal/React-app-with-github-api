import React from 'react';
import {connect} from 'react-redux';
import Table, {TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Displaylang from './displayLanguages';
import Displaystars from './displayStars';
import InfiniteScroll from 'react-infinite-scroller';
import {loadRepoDataApi} from '../action/index';

class Repositorydata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  loadMore = () => {
    let length = this.props.repoReducer.repo_data.length;
    if (!this.props.repoReducer.has_more_items) {
      this.props.dispatch(loadRepoDataApi('lazyLoad',length));
    }
  }
  render() {
    if (this.props.repoReducer.repo_data.length > 0) {
      return (
      <div>
          <InfiniteScroll
              pageStart={1}
              loadMore={this.loadMore}
              hasMore={true}
              loader={< div className = "loader" key = {
              0
          } > Loading ........... </div>}>
              <div className="table">
                  <div className="container ">
                      {this.props.repoReducer.repo_data.map((ele, index) => {
                              return (
                                  <div key={index}>
                                  <div className="show-grid row rowData" key={index} >
                                      <img alt="avatar" id="repoImage" className="col-md-3 col-xs-3" src={ele.owner.avatar_url}/>
                                      <div className="col-md-7 col-xs-7">
                                          <div id="repoTitle">Repo Name:&nbsp;{ele.name}</div>
                                          <div id="repoTitle">Description:&nbsp;{ele.description}</div>
                                      </div>
                                      <div className="col-md-2 col-xs-2">
                                          <ul id="tableUl">
                                             <li>
                                               <i className="fa fa-star"aria-hidden="true"></i>
                                               <Displaylang langUrl={ele.languages_url}/>
                                            </li>
                                             <li>
                                               <i className="fa fa-sign-language"></i>
                                               <Displaystars reponame={ele.name} username={ele.owner.login}/>
                                            </li>
                                          </ul>
                                      </div>
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
  else{
      return (
          <div className="loadingPage">
          <div className="loader-container">
          <div className="progress float shadow">
            <div className="progress__item"></div>
          </div>
          </div>    
          </div>          
      )
  }
    return (
      <div>
        <Paper className="root">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell >Repository Name</TableCell>
                <TableCell >Languages</TableCell>
                <TableCell >Stars</TableCell>
                <TableCell >Description</TableCell>
              </TableRow>
            </TableHead>
            <InfiniteScroll
                pageStart={1}
                loadMore={this.loadMore}
                hasMore={true}
                loader={< div className = "loader" key = {
                0
                } > Loading ........... </div>}>
               <TableBody>
                  {this.props.repoReducer.repo_data.map((elements, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{elements.name}</TableCell>
                          <TableCell><Displaylang langUrl={elements.languages_url}/></TableCell>
                          <TableCell><Displaystars reponame={elements.name} username={elements.owner.login}/></TableCell>
                          <TableCell >{elements.description}</TableCell>
                        </TableRow>
                      )
                    })}
               </TableBody>
              </InfiniteScroll>
          </Table>
        </Paper>
      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {dispatch};
}

export default connect(state => state, mapDispatchToProps)(Repositorydata);