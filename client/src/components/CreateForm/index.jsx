import React from 'react';

import PropTypes from 'prop-types';

import ReactRouterPropTypes from 'react-router-prop-types';

import { Form, Input, InputNumber, Button } from 'antd';

import { Link } from 'react-router-dom';

import OptionMenu from '../common/OptionMenu';
import { LOADING_STATUSES, PRODUCT_CATEGORIES } from '../../constants/index';

import './styles.less';

const formItemLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 }
    }
};

class CreateForm extends React.PureComponent {
    state = {
        // eslint-disable-next-line react/no-unused-state
        _id: '',
        name: '',
        category: 'Select type of product',
        price: ''
    };

    static propTypes = {
        createProduct: PropTypes.func.isRequired,
        getProduct: PropTypes.func.isRequired,
        updateProduct: PropTypes.func.isRequired,
        loadingProductGet: PropTypes.string.isRequired,
        loadingProductCreate: PropTypes.string.isRequired,
        match: ReactRouterPropTypes.match.isRequired,
        history: ReactRouterPropTypes.history.isRequired,
        product: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        }),
        form: PropTypes.shape({
            validateFields: PropTypes.func.isRequired,
            getFieldDecorator: PropTypes.func.isRequired
        }).isRequired
    };

    static defaultProps = {
        product: {}
    };

    componentDidMount() {
        const { match, getProduct } = this.props;

        // eslint-disable-next-line no-unused-expressions
        match.params.number && getProduct(match.params.number);
    }

    componentDidUpdate(prevProps) {
        const {
            product: { name, category, price, _id },
            loadingProductGet,
            loadingProductCreate
        } = this.props;

        if (
            loadingProductGet === LOADING_STATUSES.VALID &&
            prevProps.loadingProductGet === LOADING_STATUSES.LOADING
        ) {
            this.setState({
                // eslint-disable-next-line react/no-unused-state
                _id,
                name,
                category,
                price
            });
        }

        if (loadingProductCreate === LOADING_STATUSES.VALID) {
            this.props.history.push('/');
        }
    }

    onProductNameChange = event => {
        const { value } = event.target;

        this.setState({ name: value });
    };

    onProductCategoryChange = value => {
        this.setState({ category: value });
    };

    onProductPriceChange = value => {
        this.setState({ price: value });
    };

    handleSubmit = () => {
        const { name, category, price } = this.state;

        const {
            match,
            getProduct,
            createProduct,
            form: { validateFields }
        } = this.props;

        validateFields(errors => {
            if (!errors) {
                if (match.params.number) {
                    getProduct({ name, category, price });
                } else {
                    createProduct({ name, category, price });
                }
            }
        });
    };

    render() {
        const { category, name, price } = this.state;
        const {
            match,
            form: { getFieldDecorator }
        } = this.props;

        return (
            <Form
                className="create-form"
                {...formItemLayout}
                onSubmit={this.handleSubmit}
            >
                <Form.Item hasFeedback>
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input product name'
                            },
                            {
                                max: 25,
                                message:
                                    'Product name cannot be longer than 25 characters'
                            }
                        ],
                        initialValue: name
                    })(
                        <Input
                            placeholder="Input Product Name"
                            onChange={this.onProductNameChange}
                        />
                    )}
                </Form.Item>
                <Form.Item hasFeedback required>
                    <OptionMenu
                        handleChange={this.onProductCategoryChange}
                        options={PRODUCT_CATEGORIES}
                        value={category}
                    />
                </Form.Item>
                <Form.Item hasFeedback required>
                    {getFieldDecorator('price', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input product price'
                            },
                            {
                                pattern: new RegExp('^[0-9]*$'),
                                message: 'It is not a number'
                            }
                        ],
                        initialValue: price
                    })(
                        <InputNumber
                            style={{ width: '100%' }}
                            placeholder="Input Price $"
                            onChange={this.onProductPriceChange}
                        />
                    )}
                </Form.Item>
                <Form.Item className="buttons-block">
                    <Button type="primary" onClick={this.handleSubmit}>
                        {match.params.number ? 'Edit' : 'Create'}
                    </Button>
                    <Button type="default">
                        <Link to="/">Cancel</Link>
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedDynamicRule = Form.create({ name: 'dynamic_rule' })(CreateForm);

export default WrappedDynamicRule;
