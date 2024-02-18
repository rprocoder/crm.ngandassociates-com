import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken1} from '../features/authSlice';
import { removeToken1 } from '../services/LocalStorageService';
import { unsetUserInfo } from '../features/userSlice';


const Sidebar2 = () => {
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", email: "" }))
        dispatch(unSetUserToken1({ access_token1: null }))
        removeToken1()
        navigate('/')
    }
    const navigate = useNavigate()
    const dispatch = useDispatch();
    return (
        <div>
            <div id="wrapper">
                <div className="topbar">
                    <div className="topbar-left">
                        <Link to="Index" className="logo"><img src="assets/images/logo.png" alt="" style={{ width: "auto", height: "67px" }} /></Link>
                    </div>
                    <nav className="navbar-custom">
                        <ul className="navbar-right d-flex list-inline float-right mb-0">
                            <li className="dropdown notification-list d-none d-sm-block">
                                <form role="search" className="app-search">
                                    <div className="form-group mb-0">
                                        <input type="text" className="form-control" placeholder="Search.." />
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </div>
                                </form>
                            </li>
                            <li className="dropdown notification-list">
                                <Link to="#" className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                                    <i className="ti-bell noti-icon"></i>
                                    <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                    {/* <!-- item--> */}
                                    <h6 className="dropdown-item-text">
                                        Notifications (258)
                                    </h6>
                                    <div className="slimscroll notification-item-list">
                                        <a href="javascript:void(0);" className="dropdown-item notify-item">
                                            <div className="notify-icon bg-danger"><i className="mdi mdi-message"></i></div>
                                            <p className="notify-details">New Application is received<span className="text-muted">You have 87 unread messages</span></p>
                                        </a>
                                    </div>
                                    {/* <!-- All--> */}
                                    <a href="javascript:void(0);" className="dropdown-item text-center text-primary">
                                        View all <i className="fi-arrow-right"></i>
                                    </a>
                                </div>
                            </li>
                            <li className="dropdown notification-list">
                                <div className="dropdown notification-list nav-pro-img">
                                    <Link to="#" className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                                        <img src="assets/images/avatar7.png" alt="user" className="rounded-circle" />
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                                        {/* <!-- item--> */}
                                        <Link to="#" className="dropdown-item d-block" ><i className="mdi mdi-settings m-r-5"></i> Settings</Link>
                                        <div className="dropdown-item text-danger" onClick={handleLogout} sx={{ mt: 8 }}><i className="mdi mdi-power text-danger"></i> Logout</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div style={{marginBottom:"60px"}}>
            <Outlet />
            </div>
            <footer class="footer">
                © 2022 - 2023   <span class="d-none d-sm-inline-block"> <i class="mdi mdi-heart text-danger"></i> by Bol 7</span>.
            </footer>
        </div>
    );
};

export default Sidebar2;