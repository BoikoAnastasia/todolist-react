import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/posts', element: Posts},
    {path: '/about', element: About},
    {path: '/error', element: Error},
    {path: '/posts/:id', element: PostIdPage},
]
export const publicRoutes = [
    {path: '/login', element: Login},
]