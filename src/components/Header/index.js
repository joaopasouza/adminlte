import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, small }) {
    return (
        <section className="content-header">
            <h1>
                {title}
                <small>{small}</small>
            </h1>
        </section>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    small: PropTypes.string,
};

Header.defaultProps = {
    small: '',
};

export default Header;

