import React from 'react';

import avatar from '../../assets/images/user2-160x160.jpg';

function Navbar(props) {
    return (
        <header className="main-header">
            <a href="#" className="logo">
                <span className="logo-mini">lf</span>
                <span className="logo-lg">Lift<b>pay</b></span>
            </a>

            <nav className="navbar navbar-static-top">
                <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </a>

                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown user user-menu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src={avatar} className="user-image" alt="" />
                                <span className="hidden-xs">João Paulo</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <img src={avatar} className="img-circle" alt="" />

                                    <p>
                                        João Paulo Angeleti de Souza
                                        <small>Membro desde Set. 2019</small>
                                    </p>
                                </li>

                                <li className="user-body">
                                    <div className="row">
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Followers</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Sales</a>
                                        </div>
                                        <div className="col-xs-4 text-center">
                                            <a href="#">Friends</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a href="#" className="btn btn-default btn-flat">Perfil</a>
                                    </div>
                                    <div className="pull-right">
                                        <a href="#" className="btn btn-default btn-flat">Sair</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

