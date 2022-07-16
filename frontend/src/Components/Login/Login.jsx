import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "../../constants";

const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $name: String!
    ) {
        register(input:{email:$email, password:$password, username:$name}){
            jwt
            user{
                id
            }
        }
    }
`;

const LOGIN_MUTATION = gql`
    mutation LoginMutation(
        $email: String!
        $password: String!
    ) {
        login(input:{identifier:$email, password:$password}) {
            jwt
            user{
                id
                email
            }
        }
    }
`;

const Login = () => {

    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: ''
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({ login }) => {
            localStorage.clear()
            localStorage.setItem(AUTH_TOKEN, login.jwt);
            localStorage.setItem("userId", login.user.id);
            navigate('/');
        }
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
            name: formState.name,
            email: formState.email,
            password: formState.password
        },
        onCompleted: ({ register }) => {
            localStorage.clear()
            localStorage.setItem(AUTH_TOKEN, register.jwt);
            localStorage.setItem("userId", register.user.id);
            navigate('/');
        }
    });

    return (
        <section className="authentication-section spad">
            <div className="container authentication-container">
                <h2 className="authentication-title">
                    {formState.login ? 'Вход' : 'Регистрация'}
                </h2>
                <div className="d-flex flex-column bd-highlight mb-5">
                    {!formState.login && (
                        <input
                            className="authentication-el"
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value
                                })
                            }
                            type="text"
                            placeholder="Введите ваше ФИО"
                        />
                    )}
                    <input
                        className="authentication-el"
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value
                            })
                        }
                        type="text"
                        placeholder="Введите вашу sfedu почту"
                    />
                    <input
                        className="authentication-el"
                        value={formState.password}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                password: e.target.value
                            })
                        }
                        type="password"
                        placeholder="Введите безопасный пароль"
                    />
                </div>
                <div className="d-flex flex-column bd-highlight mb-5">
                    <button
                        type="button"
                        className="btn btn-outline-danger authentication-el"
                        onClick={formState.login ? login : signup}
                    >
                        {formState.login ? 'Вход' : 'Регистрация'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger authentication-el"
                        onClick={(e) =>
                            setFormState({
                                ...formState,
                                login: !formState.login
                            })
                        }
                    >
                        {formState.login
                            ? 'Хотите зарегистрироваться?'
                            : 'У вас уже есть аккаунт?'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export { Login };