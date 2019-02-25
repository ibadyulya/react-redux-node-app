import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
    Button, FormGroup,
} from 'reactstrap';

import './styles.less';

export default class DisplayForm extends React.Component {
    componentWillMount() {
        this.props.getProduct(this.props.match.params.number);
    }

    componentDidUpdate() {
        if (this.props.deleted) {
            this.props.history.push('/');
        }
    }

    handleOnClick = id => this.props.deleteProduct(id);

    renderDisplayForm = product => (
        <FormGroup>
            <h1>
                {'Product'}
            </h1>
            <p>
                {`ID: ${product.id}`}
            </p>
            <p>
                {`Name: ${product.name}`}
            </p>
            <p>
                {`Category: ${product.category}`}
            </p>
            <p>
                {`Price: ${product.price} $`}
            </p>
            <p>
                {`Data Created: ${product.data}`}
            </p>
        </FormGroup>
    )

    render() {
        const { product, match } = this.props;
        return (
            <div className="display-form">
                {this.renderDisplayForm(product)}
                <FormGroup className="display-form-buttons">
                    <LinkContainer to={`/edit/${match.params.number}/`}>
                        <Button>
                            {'Edit'}
                        </Button>
                    </LinkContainer>
                    <Button onClick={() => { this.handleOnClick(match.params.number); }}>
                        {'Delete'}
                    </Button>
                    <LinkContainer to="/">
                        <Button>
                            {'Cancel'}
                        </Button>
                    </LinkContainer>
                </FormGroup>
            </div>
        );
    }
}
