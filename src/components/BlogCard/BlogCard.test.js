import React from 'react';
import { shallow } from 'enzyme';
import BlogCard from './index';

it('renders without crashing', () => {
    const post = {
        id: 1,
        userId: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        images: [
            {
                id: 1,
                postId: 1,
                originId: 87,
                url: "https://picsum.photos/800/600?image=87",
                author: "Barcelona",
                authorUrl: "https://unsplash.com/@barcelona",
                postUrl: "https://unsplash.com/photos/o697BgRH_-M"
            }
        ]
    };

    const user = {
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
    };

    shallow(<BlogCard post={post} user={user} />);
});
