import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/generic/Input';
import Button from '../../components/generic/Button';

import './styles.css';

function AuthView({ email, password, emailFeedback, passwordFeedback, handleChangeEmail, handleChangePassword, doLogin }) {
    return (
        <div className="login-container">
            <div className="login-content">
                <form action="" className="login-form">
                    <h2>Entrar</h2>
                    <Input
                        label=""
                        type="email"
                        name="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={handleChangeEmail}
                        description={emailFeedback}
                    />

                    <Input
                        label=""
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Senha"
                        onChange={handleChangePassword}
                        description={passwordFeedback}
                    />

                    <Button
                        label="Entrar"
                        onClick={doLogin}
                        block={true}
                        flat={true}
                    />
                </form>
            </div>
        </div>
    );
}

AuthView.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    emailFeedback: PropTypes.string.isRequired,
    passwordFeedback: PropTypes.string.isRequired,
    handleChangeEmail: PropTypes.func.isRequired,
    handleChangePassword: PropTypes.func.isRequired,
    doLogin: PropTypes.func.isRequired,
};

export default AuthView;
