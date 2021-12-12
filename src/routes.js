import HomePage from './pages/HomePage';
import NewCommentPage from './pages/NewCommentPage';
import NotFound from './pages/NotFound';
import FullComment from './components/FullComment/FullComment';

const routes = [
    {path: '/comment/:id', component: FullComment},
    {path: '/new-comment', component: NewCommentPage},
    {path: '/', component: HomePage, exact: true},
    { component: NotFound }, // should be last route
]
export default routes;

// ([A-Za-z]+)