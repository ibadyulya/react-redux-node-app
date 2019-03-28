import React from 'react';
import { shallow } from 'enzyme';
import Table from '../index';

describe('Table functional component', () => {
    const mockedProps = {
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'Category',
                dataIndex: 'category',
                key: 'category'
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price'
            }
        ],
        dataSource: [
            {
                _id: 1,
                name: 'productName',
                category: 'productCategory',
                price: '1 $'
            },
            {
                _id: 2,
                name: 'productName2',
                category: 'productCategory2',
                price: '2 $'
            },
            {
                _id: 3,
                name: 'productName3',
                category: 'productCategory3',
                price: '3 $'
            }
        ],
        onRow: jest.fn()
    };

    const component = shallow(<Table {...mockedProps} />);

    it('renders the <Table /> component', () => {
        expect(component.exists('Table')).toBe(true);
    });

    it('calls click event on clicking', () => {
        component.simulate('click');
        expect(mockedProps.onRow).toHaveBeenCalled();
    });

    it('<Table /> component coloumns should be equal to PRODUCT_TABLE_COLUMNS length', () => {
        expect(mockedProps.columns).toHaveLength(3);
    });
});
