import React from 'react';
import Table from '../../components/table';
import { connect } from 'react-redux';

class ArticleHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            displayItems: [],
        };
        // this.search = this.search.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    // handleChange(e, isEnter) {
    //     const searchData = () => {
    //       let tempArticle = JSON.parse(JSON.stringify(this.props.data));
    //       if (!this.state.searchString) {
    //         this.setState({
    //           displayItems: tempMenuProductDetails
    //         })
    //       } else {
    //         const filterArray = tempMenuProductDetails.reduce((result, category) => {
    //           if (category.categoryName.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1) {
    //             result.push(category);
    //           }
    //           if (category.productList && category.productList.length > 0) {
    //             category.productList = category.productList.reduce((productListResult, productList) => {
    //               if (!!productList.productName && productList.productName.toLowerCase().indexOf(this.state.searchString.toLowerCase()) > -1) {
    //                 productListResult.push(productList);
    //               }
    //               return productListResult;
    //             }, []);
    //           }
    //           if (category.productList.length) {
    //             result.push(category);
    //           }
    //           return result;
    //         }, []);
    //         this.setState({
    //           displayItems: filterArray
    //         })
    //       }
    //     }
    //     if (!isEnter) {
    //       this.setState({
    //         searchString: e.target.value
    //       });
    //     } else {
    //       searchData();
    //     }
    //   }
    
    //   search(e) {
    //     if (e.keyCode == 13) {
    //       this.handleChange(e, true);
    //     }
    //     this.handleChange(e, false);
    //   }
    
    render() {
        return (
            <div className={this.state.moveaside ? "mainMove" : "main"}>
                <Table products={this.props.data} />
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(ArticleHome);