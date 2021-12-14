import HomePage from './pages/HomePage';
import NewComment from './pages/NewComment/NewComment';
import NotFound from './pages/NotFound';
import FullComment from './pages/FullComment/FullComment';

const routes = [
    {path: '/comment/:id', component: FullComment},
    {path: '/new-comment', component: NewComment},
    {path: '/', component: HomePage, exact: true},
    { component: NotFound }, // should be last route
]
export default routes;

// ([A-Za-z]+)