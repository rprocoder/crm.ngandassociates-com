import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink, Outlet, Link } from "react-router-dom";
import { MdCancelPresentation, MdContacts, MdDashboard, MdFeedback, MdLibraryAdd, MdLibraryAddCheck } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken3 } from '../../features/authSlice';
import { removeToken3 } from '../../services/LocalStorageService';
import { unsetUserInfo } from '../../features/userSlice';



const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/Admin",
            name: "Dashboard",
            icon: <MdDashboard />,
        },
        {
            path: "/Service",
            name: "New Application",
            icon: <MdLibraryAdd />,
        },
        {
            path: "/OldApplication",
            name: "Old Application",
            icon: <MdLibraryAddCheck />,
        },
        {
            path: "/CancelApplication",
            name: "Cancel Application",
            icon: <MdCancelPresentation />,
        },
        {
            path: "/Reminder",
            name: "User Reminder",
            icon: <MdLibraryAdd />,
        },
        {
            path: "/OldApplicationData",
            name: "Old Applications Data",
            icon: <MdLibraryAdd />,
        },
        {
            path: "/Feedbacks",
            name: "Feedbacks",
            icon: <MdFeedback />,
        },
        {
            path: "/Contact",
            name: "Contact Us",
            icon: <MdContacts />,
        },
     
    ]
    const handleLogout = () => {
        dispatch(unsetUserInfo({ name: "", email: "" }))
        dispatch(unSetUserToken3({ access_token3: null }))
        removeToken3()
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
                                            <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
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
                                        <a href="http://admin.ngandassociates.com/admin/login/?next=/admin/" className="dropdown-item d-block" ><i className="mdi mdi-account-circle m-r-5"></i> Admin Panel</a>
                                        <div className="dropdown-item text-danger" onClick={handleLogout} sx={{ mt: 8 }}><i className="mdi mdi-power text-danger"></i> Logout</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="list-inline menu-left mb-0">
                            <li className="float-left">
                                <div className="bars">
                                    <FaBars onClick={toggle} />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="main-container">
                <div style={{ width: isOpen ? "240px" : "55px" }} className="sidebar">
                    <div className="top_section">
                        <div style={{ marginLeft: isOpen ? "55px" : "0px" }} className="bars">
                        </div>
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
                <main>{children}</main>
                <div className="conatin" onClick={() => setIsOpen(false)} style={{ marginBottom:"60px"}}>
                    <Outlet />

                </div>
                <footer class="footer">
                    © 2022 - 2023   <span class="d-none d-sm-inline-block"> <i class="mdi mdi-heart text-danger"></i> by Bol 7</span>.
                </footer>
            </div>
        </div>
    );
};

export default Sidebar;