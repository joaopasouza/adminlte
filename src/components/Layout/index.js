import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Content from '../Content';
import Footer from '../Footer';

function Layout({ title, children }) {
    return (
        <Fragment>
            <Navbar />

            <Sidebar />

            <div className="content-wrapper">
                {title}

                <Content>{children}</Content>
            </div>

            <Footer />
        </Fragment>
    );
}

Layout.propTypes = {
    title: PropTypes.element.isRequired,
};

export default Layout;
