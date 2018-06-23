import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
import MainPage from './index';

jest.mock('axios');
describe('works right', () => {
    let mainPageWrapper;
    const routerParams = { params: { pageId: '1' } };
    const emptyArr = (new Array(12)).fill(null);
    const postsResponse = {
        data: emptyArr.map((item, index) => ({
            userId: index + 1,
            id: index + 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            images: [
                {
                    id: index + 1,
                    postId: index + 1,
                    originId: 87,
                    url: "https://picsum.photos/800/600?image=87",
                    author: "Barcelona",
                    authorUrl: "https://unsplash.com/@barcelona",
                    postUrl: "https://unsplash.com/photos/o697BgRH_-M"
                }
            ]
        })),
        headers: { 'x-total-count': 100 }
    };
    const usersResponse = {
        data: emptyArr.map((item, index) => ({
            id: index + 1,
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
        }))
    };

    test('renders without crashing', () => {
        axios.get
            .mockReturnValueOnce(Promise.resolve(postsResponse))
            .mockReturnValueOnce(Promise.resolve(usersResponse));
        mainPageWrapper = shallow(<MainPage match={routerParams} />);
    });

    test('right state', () => {
        expect(mainPageWrapper.state('posts')).toEqual(postsResponse.data);
        expect(mainPageWrapper.state('postsCount')).toEqual(postsResponse.headers['x-total-count']);
        expect(mainPageWrapper.state('users')).toEqual(usersResponse.data);
    });

    test('check getUserById', () => {
        const mainPageInstance = mainPageWrapper.instance();
        expect(mainPageInstance.getUserById(3)).toEqual(usersResponse.data[2]);
        expect(mainPageInstance.getUserById(5)).toEqual(usersResponse.data[4]);
    });
    test('check getUserById if wrong id', () => {
        const mainPageInstance = mainPageWrapper.instance();
        const wrongId = 900;
        expect(mainPageInstance.getUserById(wrongId)).toBeUndefined();
    });
});