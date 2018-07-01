import React from 'react';
import { mount } from 'enzyme';
import PostPage from './index';


describe('works right', () => {
    let wrapper;
    const routerParams = { params: { postId: '1' } };
    const routerHistory = { goBack: jest.fn() };
    const fetchPostAndUserById = jest.fn();
    const response = {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "et iusto sed quo iure<br />voluptatem occaecati omnis eligendi aut ad<br />voluptatem doloribus vel accusantium quis pariatur<br />molestiae porro eius odio et labore et velit aut",
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
    };

    test('renders without crashing and calls fetchPostAndUserById', () => {
        wrapper = mount(<PostPage
            match={routerParams}
            loaded={false}
            history={routerHistory}
            fetchPostAndUserById={fetchPostAndUserById} />);

        expect(fetchPostAndUserById.mock.calls.length).toBe(1);
    });

    test('props loaded and post', () => {
        wrapper.setProps({ loaded: true, post: response });
        
        expect(wrapper.prop('loaded')).toBe(true);
        expect(wrapper.prop('post')).toEqual(response);
    });
    test('set right .post__title', () => {
        expect(wrapper.find('.post__title').text()).toEqual(response.title);
    });
    test('set right .post__text', () => {
        expect(wrapper.find('.post__text').text()).toEqual(response.body.replace(/<br \/>/g, ''));
    });

    test('called goBack', () => {
        wrapper.update();
        wrapper.find('.go-back').simulate('click');
        expect(routerHistory.goBack.mock.calls.length).toBe(1);
    });
});