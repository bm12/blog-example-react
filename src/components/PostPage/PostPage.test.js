import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import PostPage from './index';

jest.mock('axios');

describe('work right', () => {
    let wrapper;
    const routerParams = { params: { postId: '1' } };
    const routerHistory = { goBack: jest.fn() };
    const response = {
        data: {
            userId: 1,
            id: 8,
            title: "dolorem dolore est ipsam",
            body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
            images: [
                {
                    id: 8,
                    postId: 8,
                    originId: 260,
                    url: "https://picsum.photos/800/600?image=260",
                    author: "Sylwia Bartyzel",
                    authorUrl: "https://unsplash.com/@sylwiabartyzel",
                    postUrl: "https://unsplash.com/photos/OdAqbedkfiA"
                }
            ],
            user: {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: { lat: "-37.3159", lng: "81.1496" }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }
        }
    };

    test('renders without crashing and not loaded', () => {
        axios.get.mockImplementation(() => Promise.resolve(response));
        wrapper = mount(<PostPage match={routerParams} history={routerHistory} />);
        expect(wrapper.state('loaded')).toBe(false);
    });

    test('loaded', () => {
        wrapper.update();
        expect(wrapper.state('loaded')).toBe(true);
    });
    test('set right state[post]', () => {
        expect(wrapper.state('post')).toEqual(response.data);
    });

    test('called goBack', () => {
        wrapper.update();
        wrapper.find('.go-back').simulate('click');
        expect(routerHistory.goBack.mock.calls.length).toBe(1);
    });
});