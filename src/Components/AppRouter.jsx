import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/index.js";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader.jsx";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route exact path={route.path} element={<route.element />} key={route.path}/>
                )}
                {/* в случае неверного написания или поиска несуществующей страницы */}
                <Route path="*" element={<Navigate replace to="/posts" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route exact path={route.path} element={<route.element />} key={route.path}/>
                )}
                {/* в случае неверного написания или поиска несуществующей страницы */}
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    )
}

export default AppRouter;