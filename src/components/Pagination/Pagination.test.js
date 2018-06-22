import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './index';

let paginationWrapper;

beforeEach(() => {
    paginationWrapper = shallow(<Pagination currentPage={1} postsCount={100} />);
});

test('check lastPage', () => {
    expect(paginationWrapper.state('lastPage')).toBe(9);
    paginationWrapper.setProps({ postsCount: 50 });
    expect(paginationWrapper.state('lastPage')).toBe(5);
});

test('check pages links', () => {
    const linksValues1 = {
        first: '/main-page/1',
        prev: '/main-page/1',
        current: '/main-page/1',
        next: '/main-page/2',
        last: '/main-page/9' 
    };
    const state = paginationWrapper.state('pagesLink');
    expect(state).toEqual(linksValues1);
    
    paginationWrapper.setProps({ currentPage: 2 });
    const linksValues2 = {
        first: '/main-page/1',
        prev: '/main-page/1',
        current: '/main-page/2',
        next: '/main-page/3',
        last: '/main-page/9' 
    };
    const state2 = paginationWrapper.state('pagesLink');
    expect(state2).toEqual(linksValues2);

    paginationWrapper.setProps({ currentPage: 5 });
    const linksValues3 = {
        first: '/main-page/1',
        prev: '/main-page/4',
        current: '/main-page/5',
        next: '/main-page/6',
        last: '/main-page/9' 
    };
    const state3 = paginationWrapper.state('pagesLink');
    expect(state3).toEqual(linksValues3);
});