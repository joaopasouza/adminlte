import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = (props) => {
    const {
        type,
        label,
        name,
        value,
        placeholder,
        disabled,
        onChange,
        onFocus,
        onBlur,
        description,
        error,
        success,
        warning,
        size,
    } = props;

    const formClass = classNames('form-group', {
        'has-error': error,
        'has-success': success,
        'has-warning': warning,
    });

    const inputClass = classNames('form-control', {
        'input-sm': size === 'sm',
        'input-lg': size === 'lg',
    });

    const feedBackClass = classNames('help-block');

    return (
        <div className={formClass}>
            {(!!label) && (<label htmlFor={name}>{label}</label>)}

            <input
                type={type}
                className={inputClass}
                name={name}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
            />

            {(error || success || warning) && (
                <span className={feedBackClass}>{description}</span>
            )}
        </div>
    );
};


Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password', 'email', 'search', 'tel', 'file', 'number', 'url', 'time', 'date']),
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    description: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
};

Input.defaultProps = {
    type: 'text',
    label: '',
    disabled: false,
    onFocus: () => { },
    onBlur: () => { },
    description: '',
    error: false,
    success: false,
    warning: false,
    size: null,
};

export default Input;
