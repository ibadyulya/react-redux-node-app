import React from 'react';
import { shallow } from 'enzyme';
import Table from '../index.jsx';

describe('Table functional component', () => {
    const mockedProps = {
        data: [
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
        handleRedirect: jest.fn()
    };

    const component = shallow(<Table {...mockedProps} />);

    it('calls click event on clicking', () => {
        component.simulate('click');
        expect(mockedProps.handleChange).toHaveBeenCalled();
    });
});
