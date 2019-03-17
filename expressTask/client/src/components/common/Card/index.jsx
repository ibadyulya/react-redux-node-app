/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import * as React from 'react';

import './styles.less';

const Card = (props) => {
    const { values, dictionary, title } = props;

    const renderFields = () => dictionary.map((field, index) => (
        <span key={index} className="card__row">
            <p>
                {field.fieldName}
            </p>
            <p>
                {values[field.value]}
            </p>
        </span>
    ));

    return (
        <div className="card">
            <h1>
                {title}
            </h1>
            <hr />
            {renderFields()}
        </div>
    );
};

export default Card;
