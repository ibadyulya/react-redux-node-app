import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import Card from '../common/Card';


import { LOADING_STATUSES, CARD_DICTIONARY } from '../../constants/index';

import './styles.less';

export default class ProductCard extends React.Component {
    componentDidMount() {
        const { getProduct, match } = this.props;
        getProduct(match.params.number);
    }

    componentDidUpdate() {
        const { loadingProductDelete } = this.props;

        if (loadingProductDelete === LOADING_STATUSES.VALID) {
            this.props.history.push('/');
        }
    }

    handleOnClick = () => {
        const { deleteProduct, product } = this.props;

        deleteProduct(product.id);
    }

    render() {
        const { product, match } = this.props;
        return (
            <div className="product-card">
                <Card title="Product" dictionary={CARD_DICTIONARY} values={product} />
                <hr />
                <div className="buttons-block">
                    <Button type="primary">
                        <Link to={`/edit/${match.params.number}/`}>
                            {'Edit'}
                        </Link>
                    </Button>
                    <Button onClick={this.handleOnClick}>
                        {'Delete'}
                    </Button>
                    <Button>
                        <Link to="/">
                            {'Cancel'}
                        </Link>
                    </Button>
                </div>
            </div>
        );
    }
}
