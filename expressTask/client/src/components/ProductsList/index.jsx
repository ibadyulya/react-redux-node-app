import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Table, Button, FormGroup, Input,
} from 'reactstrap';

import './styles.less';

class ProductsList extends React.Component {
    componentDidMount() {
        this.props.getProduct();
    }

    productsListRender = productsList => productsList.map((product, index) => (
        <LinkContainer key={product._id} to={`/display/${product._id}/`}>
            <tr className="list-row">
                <th scope="row">
                    {index}
                </th>
                <td>
                    {product.name}
                </td>
                <td>
                    {product.category}
                </td>
            </tr>
        </LinkContainer>
    ))

    filterList = (event) => {
        this.props.filterList(event.target.value.toLowerCase());
    }

    render() {
        const { productsList } = this.props;
        return (
            <div className="products-list">
                <FormGroup className="list-form">
                    <Input onChange={this.filterList} placeholder="filter products" />
                    <LinkContainer to="/create">
                        <Button>
                            {'Create New'}
                        </Button>
                    </LinkContainer>
                </FormGroup>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                {'#'}
                            </th>
                            <th>
                                {'Product Name'}
                            </th>
                            <th>
                                {'Category'}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productsListRender(productsList)}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductsList;
