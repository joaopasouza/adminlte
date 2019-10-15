import React, { useState } from 'react';

import { connect } from 'react-redux';
import { login } from '../../store/actions/user';

import AuthView from './auth__view';

function AuthContainer({ history, onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailFeedback, setEmailFeedback] = useState('');
    const [passwordFeedback, setPasswordFeedback] = useState('');

    const handleChangeEmail = event => {
        setEmailFeedback('');
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPasswordFeedback('');
        setPassword(event.target.value);
    }

    const doLogin = () => {
        onLogin({ email, password }).then(() => {
            history.push('/paylink');
        });
    };

    return (
        <AuthView
            email={email}
            password={password}
            emailFeedback={emailFeedback}
            passwordFeedback={passwordFeedback}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            doLogin={doLogin}
        />
    );
}

const mapDispatchToProps = dispatch => ({
    onLogin: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(AuthContainer);
