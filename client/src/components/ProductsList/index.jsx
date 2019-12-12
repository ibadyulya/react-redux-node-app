/* eslint-disable react/prop-types */
// eslint-disable-next-line jsx-a11y/label-has-associated-control
import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Input, Button } from 'antd';

import Table from '../common/Table';
import { PRODUCT_TABLE_COLUMNS } from '../../constants';
import { convertToTableFormat } from '../../helpers/parsers';
import './styles.less';

const { Search } = Input;

class ProductsList extends React.Component {
    static propTypes = {
        filterList: PropTypes.func.isRequired,
        getProduct: PropTypes.func.isRequired,
        productsList: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.string.isRequired,
                category: PropTypes.string.isRequired,
                created: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.string.isRequired
            })
        )
    };

    static defaultProps = {
        productsList: []
    };

    componentDidMount() {
        this.props.getProduct();
    }

    filterList = event => {
        this.props.filterList(event.target.value.toLowerCase());
    };

    handleRedirect = productKey => {
        const { history } = this.props;

        history.push(`/display/${productKey}/`);
    };

    render() {
        const { productsList } = this.props;
        return (
            <div className="products-list">
                <div className="form">
                    <Search
                        className="form__search"
                        placeholder="filter product"
                        onChange={this.filterList}
                    />
                    <Button className="form__button" type="primary">
                        <Link to="/create">Create New</Link>
                    </Button>
                </div>
                <Table
                    data={convertToTableFormat(productsList)}
                    handleRedirect={this.handleRedirect}
                    columns={PRODUCT_TABLE_COLUMNS}
                />
            </div>
        );
    }
}

export default ProductsList;
