export const data = [
    {
        id: 1,
        name: 'Home',
        icon: 'home',
        path: '/',
        children: [
            {
                id: 1.1,
                name: 'Home 1',
                icon: 'Contact',
                path: '/contact',
                children: [
                    {
                        id: 111,
                        name: 'Contact 1',
                        icon: 'Contact 1',
                        path: '/contact/1',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'About',
        icon: 'about',
        path: '/about',
        children: [
            {
                id: 2.1,
                name: 'About 1',
                icon: 'About 1',
                path: '/about/1',
            },
        ],
    },
]