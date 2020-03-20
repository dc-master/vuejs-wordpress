import index from './pages/index';
import SinglePost from './pages/SinglePost';

export const Routes = [{
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/:year/:month/:day/:postSlug',
        name: 'singlepost',
        component: SinglePost,
    }
];