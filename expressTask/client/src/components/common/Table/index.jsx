import * as React from 'react';

import { Table as AntdTable } from 'antd';

const Table = (props) => {
    const { data, handleRedirect, columns } = props;

    const onRow = row => ({
        onClick: () => handleRedirect(row.key),
    });


    return (
        <AntdTable
            onRow={onRow}
            columns={columns}
            dataSource={data}
            pagination={
                {
                    position: 'bottom',
                    pageSize: 5,
                }
            }
        />
    );
};

export default Table;
