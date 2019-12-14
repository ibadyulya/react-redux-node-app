/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import * as React from 'react';

import PropTypes from 'prop-types';

import { Select } from 'antd';

const { Option } = Select;

const OptionMenu = props => {
    const { options, handleChange, value } = props;

    const renderOptions = () =>
        options.map((option, index) => (
            <Option key={index} value={option.value}>
                {option.title}
            </Option>
        ));

    return (
        <Select
            defaultValue={options[0].value}
            value={value}
            onChange={handleChange}
        >
            {renderOptions()}
        </Select>
    );
};

OptionMenu.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default OptionMenu;
