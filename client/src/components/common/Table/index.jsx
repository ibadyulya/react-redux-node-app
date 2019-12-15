import * as React from 'react';

import PropTypes from 'prop-types';

import { Table as AntdTable } from 'antd';

import './styles.less';

const Table = props => {
    const { data, handleRedirect, columns } = props;

    const onRow = row => ({
        onClick: () => handleRedirect(row.key)
    });

    return (
        <AntdTable
            onRow={onRow}
            columns={columns}
            dataSource={data}
            pagination={{
                position: 'bottom',
                pageSize: 5
            }}
        />
    );
};

Table.defaultProps = {
    columns: [
        {
            dataIndex: '',
            key: '',
            title: ''
        }
    ],
    data: []
};

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            dataIndex: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    ),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    ),
    handleRedirect: PropTypes.func.isRequired
};

export default Table;
