import React from 'react';

import { Table as AntdTable } from 'antd';

import './styles.less';

const Table = ({ data, handleRedirect, columns }) => {
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

export default Table;
