import React from 'react';
import PropTypes from 'prop-types';

function AuthView({ email, password, handleChangeEmail, handleChangePassword, doLogin }) {
    return (
        <div>
            <h1>Entrar</h1>

            <div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        placeholder="E-mail"
                        onChange={handleChangeEmail}
                    />
                </div>

                <div className="form-group">
                    <label className="sr-only" htmlFor="password">Senha</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        placeholder="Senha"
                        onChange={handleChangePassword}
                    />
                </div>

                <button type="button" className="btn btn-primary btn-block btn-flat" onClick={doLogin}>
                    Entrar
                </button>
            </div>
        </div>
    );
}

AuthView.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleChangeEmail: PropTypes.func.isRequired,
    handleChangePassword: PropTypes.func.isRequired,
    doLogin: PropTypes.func.isRequired,
};

export default AuthView;
