//Layout
import { HeaderOnly } from '~/components/Layout';
//Page
import Home from '~/pages/Home';
import Following from '~/pages/Folllowing';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
];

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
