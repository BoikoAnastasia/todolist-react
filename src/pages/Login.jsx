import React, {useContext} from "react";
import MyButton from "../Components/UI/button/MyButton";
import MyInput from "../Components/UI/input/MyInput";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth } = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', "true"); 
    }
    return(
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" name="" id="" placeholder="Введите логин"/>
                <MyInput type="password" name="" id="" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>

    )

}

export default Login;