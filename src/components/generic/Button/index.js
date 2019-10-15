import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
    const {
        label,
        color,
        size,
        flat,
        block,
        disabled,
        link,
        onClick,
    } = props;

    const btnClasses = classNames('btn', {
        'btn-success': color === 'success',
        'btn-danger': color === 'danger',
        'btn-secondary': color === 'secondary',
        'btn-primary': color === 'primary',
        'bg-maroon': color === 'marron',
        'bg-purple': color === 'purple',
        'bg-navy': color === 'navy',
        'bg-olive': color === 'olive',
        'bg-orange': color === 'orange',

        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-lg': size === 'lg',

        'btn-flat': flat,
        'btn-block': block,
        'btn-link': link,

        'disabled': disabled,
    });


    return (
        <button type="button" className={btnClasses} onClick={onClick}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'marron', 'navy', 'olive', 'purple', 'orange']),
    size: PropTypes.oneOf(['xs', 'sm', 'lg']),
    flat: PropTypes.bool,
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    link: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    color: 'primary',
    size: null,
    flat: false,
    block: false,
    disabled: false,
    link: false,
};

export default Button;
