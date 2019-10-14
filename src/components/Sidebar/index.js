import React from 'react';
import PropTypes from 'prop-types';

import avatar from '../../assets/images/default-50x50.gif';

function Sidebar(props) {
    return (
        <aside className="main-sidebar">
            <section className="sidebar">
                {/* Sidebar user-panel */}
                <div className="user-panel">
                    <div className="pull-left image">
                        <img src={avatar} className="img-circle" alt="" />
                    </div>
                    <div className="pull-left info">
                        <p>Zest Turismo</p>
                        <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                    </div>
                </div>

                {/* Sidebar menu */}
                <ul className="sidebar-menu" data-widget="tree">
                    <li className="header">NAVEGAÇÃO PRINCIPAL</li>
                    <li className="active treeview menu-open">
                        <a href="#">
                            <i className="fa fa-exchange"></i> <span>Vendas Online</span>
                            <span className="pull-right-container">
                                <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu" style={{ display: 'block' }}>
                            <li className="active">
                                <a href="/">
                                    <i className="fa fa-circle-o"></i> Vendas por link
                                </a>
                            </li>
                            <li className="">
                                <a href="/">
                                    <i className="fa fa-circle-o"></i> Gerenciamento de links
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar;

