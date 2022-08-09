import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import About from '../pages/About.jsx';
import Posts from '../pages/Posts.jsx';
import Error from '../pages/Error.jsx';

const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/error" element={<Error />} />
            {/* в случае неверного написания или поиска несуществующей страницы */}
            <Route path="*" element={<Navigate replace to="/error" />} />
        </Routes>
    )
}

export default AppRouter;