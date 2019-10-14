import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../../store/actions/user';

import AuthView from './auth__view';

function AuthContainer({ history, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    }

    return (
        <AuthView
            email={email}
            password={password}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            doLogin={onLogin}
        />
    );
}

AuthContainer.propTypes = {
    history: PropTypes.object.isRequired,
    onLogin: PropTypes.func.isRequired,
};

export default AuthContainer;
