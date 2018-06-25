import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './index';

describe('works right', () => {
    let mainPageWrapper;
    const routerParams = { params: { pageId: '1' } };
    const emptyArr = (new Array(12)).fill(null);
    const posts = emptyArr.map((item, index) => ({
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
    }));
    const postsCount =100;
    const users = emptyArr.map((item, index) => ({
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
    }));
    const fetchPosts = jest.fn();


    test('renders without crashing', () => {
        mainPageWrapper = shallow(<MainPage 
            match={routerParams}
            posts={posts}
            users={users}
            postsCount={postsCount}
            fetchPosts={fetchPosts} />);
    });
    test('calls fetchPosts on pageId update', () => {
        expect(fetchPosts.mock.calls.length).toBe(1);
        const newRouterParams = { params: { pageId: '3' } };
        mainPageWrapper.setProps({ match: newRouterParams });
        expect(fetchPosts.mock.calls.length).toBe(2);
    });
});