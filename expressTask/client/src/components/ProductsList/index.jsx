import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from 'antd';

import Table from '../common/Table';
import { productTableColumns } from '../../constants';
import { convertToTableFormat } from '../../helpers/parsers';
import './styles.less';

const { Search } = Input;
class ProductsList extends React.Component {
    componentDidMount() {
        this.props.getProduct();
    }

    filterList = (event) => {
        this.props.filterList(event.target.value.toLowerCase());
    }

    handleRedirect = (productKey) => {
        const { history } = this.props;

        history.push(`/display/${productKey}/`);
    }

    render() {
        const { productsList } = this.props;
        return (
            <div className="products-list">
                <div className="products-list__form">
                    <Search
                        placeholder="filter product"
                        onChange={this.filterList}
                        style={{ width: 200 }}
                    />
                    <Button type="primary">
                        <Link to="/create">
                            Create New
                        </Link>
                    </Button>
                </div>
                <Table
                    data={convertToTableFormat(productsList)}
                    handleRedirect={this.handleRedirect}
                    columns={productTableColumns}
                />
            </div>
        );
    }
}

export default ProductsList;
