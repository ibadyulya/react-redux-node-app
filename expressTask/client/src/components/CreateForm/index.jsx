/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';
import { Alert } from 'react-bootstrap';

import FormErrors from '../FormErrors';
import { LOADING_STATUSES } from '../../constants/index';
import './styles.less';

export default class CreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                name: '',
                category: 'Digital Camera',
                price: '',
            },
            formErrors: [],

        };
    }

    componentDidMount() {
        const {
            match, loadProduct,
        } = this.props;

        // eslint-disable-next-line no-unused-expressions
        match.params.number && loadProduct(match.params.number);
    }

    componentDidUpdate(prevProps) {
        const {
            product: {
                name, category, price, _id,
            },
            loadingProductDisplay,
            loadingProductCreate,
            loadingProductUpdate,
        } = this.props;

        if (loadingProductDisplay === LOADING_STATUSES.VALID
            && prevProps.loadingProductDisplay === LOADING_STATUSES.LOADING) {
            this.setState({
                product: {
                    _id,
                    name,
                    category,
                    price,
                },
            });
        }

        if (loadingProductCreate === LOADING_STATUSES.VALID || loadingProductUpdate === LOADING_STATUSES.VALID) {
            this.props.history.push('/');
        }
    }

    handleChange = (event) => {
        const { id, value } = event.target;
        const { product } = this.state;
        this.setState({
            product: {
                ...product,
                [id]: value,
            },
        },
        () => { this.validateField(id, value); });
    }

    handleSubmit = () => {
        const { product, formErrors } = this.state;
        const { match, updateProduct, createProduct } = this.props;
        if (!formErrors.length) {
            if (match.params.number) {
                updateProduct(product);
            } else {
                createProduct(product);
            }
        }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = [];

        switch (fieldName) {
        case 'name':
            // value = parseInt(value, 10);
            if (value.trim().length > 256) {
                fieldValidationErrors.push('name should be less than 256 charachers');
            } else {
                fieldValidationErrors = [];
            }
            break;
        case 'price':
            if (value <= 100000 && parseInt(value, 10)) {
                fieldValidationErrors = [];
            } else {
                fieldValidationErrors.push('price should be less than 10000$ \n or it should be a number');
            }
            break;
        default:
            break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
        });
    }

    render() {
        const { formErrors, product } = this.state;
        const { match } = this.props;

        return (
            <Form className="create-edit-form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input
                        id="name"
                        placeholder="fill a product name"
                        value={product.name}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">
                        {'Select a Category'}
                    </Label>
                    <Input
                        type="select"
                        id="category"
                        onChange={this.handleChange}
                    >
                        <option value="Digital Camera">
                            {'Digital Camera'}
                        </option>
                        <option value="Smartphone">
                            {'Smartphone'}
                        </option>
                        <option value="TV">
                            {'TV'}
                        </option>
                        <option value="Console">
                            {'Console'}
                        </option>
                        <option value="Hardware">
                            {'Hardware'}
                        </option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Input
                        id="price"
                        placeholder="fill a product price"
                        value={product.price}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                {formErrors.length
                    ? (
                        <Alert bsStyle="danger">
                            <FormErrors formErrors={this.state.formErrors} />
                        </Alert>
                    ) : ''}
                <Button onSubmit={this.handleSubmit}>
                    { match.params.number ? 'Edit' : 'Create' }
                </Button>
                <LinkContainer to="/">
                    <Button type="submit">
                        {'Cancel'}
                    </Button>
                </LinkContainer>
            </Form>
        );
    }
}
