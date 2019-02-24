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

export default class EditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            product: {
                _id: '',
                name: '',
                category: 'Digital Camera',
                price: '',
                created: '',
            },
            formErrors: [],
        };
    }

    componentDidMount() {
        const {
            match, foundProduct,
            searching, searchProduct,
        } = this.props;
        console.log(foundProduct === null);
        if (!searching && match.params.number && foundProduct === null) {
            searchProduct(match.params.number);
        }
    }

    componentDidUpdate() {
        if (this.props.updated) {
            this.props.history.push('/');
            this.props.updatedFlagReset();
        }
        if (this.props.deleted) {
            this.props.history.push('/');
            this.props.deletedFlagReset();
        }
    }

    static getDerivedStateFromProps(nextProps) {
        const { foundProduct, found, foundFlagReset } = nextProps;
        if (foundProduct && found) {
            foundFlagReset();
            return {
                product: {
                    _id: foundProduct[0]._id,
                    name: foundProduct[0].name,
                    price: foundProduct[0].price,
                    created: foundProduct[0].created,
                },
            };
        }
        return null;
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
        if (!formErrors.length) {
            this.props.updateProduct(product);
        }
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = [];
        console.log(`validateField: fieldName: ${fieldName}, value: ${value}`);

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
        console.log('formErrors');
        console.log(fieldValidationErrors);
        this.setState({
            formErrors: fieldValidationErrors,
        });
    }

    render() {
        // const { formErrors } = this.state;
        return (
            <Form className="create-edit-form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Input
                        id="name"
                        placeholder="fill a product name"
                        value={this.state.product.name}
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
                        value={this.state.product.price}
                        onChange={this.handleChange}
                        required
                    />
                </FormGroup>
                {/* {formErrors.lenght
                    && ( */}
                <Alert bsStyle="danger">
                    <FormErrors formErrors={this.state.formErrors} />
                </Alert>
                {/* ) } */}
                <Button>
                    {'Edit'}
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
