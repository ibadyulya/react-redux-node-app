import * as React from 'react';

import PropTypes from 'prop-types';

import './styles.less';

const Card = props => {
    const { values, dictionary, title } = props;

    const renderFields = () =>
        dictionary.map((field, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index} className="card__row">
                <p>{field.fieldName}</p>
                <p>{values[field.value]}</p>
            </span>
        ));

    return (
        <div className="card">
            <h1>{title}</h1>
            <hr />
            {renderFields()}
        </div>
    );
};

Card.defaultProps = {
    values: {
        category: '',
        data: '',
        id: '',
        name: '',
        price: ''
    }
};

Card.propTypes = {
    values: PropTypes.shape({
        category: PropTypes.string,
        data: PropTypes.string,
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string
    }),
    dictionary: PropTypes.arrayOf(
        PropTypes.shape({
            fieldName: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ).isRequired,
    title: PropTypes.string.isRequired
};

export default Card;
