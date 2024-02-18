
import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBuffer } from "react-icons/fa";
import { MdAccountBox, MdContacts, MdDashboard, MdPages } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice';
import { removeToken } from '../../services/LocalStorageService';
import { unsetUserInfo } from '../../features/userSlice';
import axios from "axios";

const routes = [
  {
    path: "Index",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "Index",
    name: "Start a Business",
    icon: <FaBuffer />,
    subRoutes: [
      {
        path: "PopularOptions",
        name: "Popular Options",
      },
      {
        path: "SpecialBusinessEntities",
        name: "Special Business Entities",
      },
    ],
  },
  {
    path: "Index",
    name: "Intellectual Property",
    icon: <BiClipboard />,
    exact: true,
    subRoutes: [
      {
        path: "Trademark",
        name: "Trademark",
      },
      {
        path: "Patent",
        name: "Patent",
      },
      {
        path: "Copyright",
        name: "Copyright",
      },
    ],
  },
  {
    path: "Index",
    name: "Changes in Business",
    icon: <MdPages />,
    exact: true,
    subRoutes: [
      {
        path: "SelectConversionType",
        name: "Select Conversion Type",
      },
      {
        path: "UpdateCorporateInformation",
        name: "Update Corporate Information",
      },
      {
        path: "CloseABusiness",
        name: "Close a Business",
      },
    ],
  },
  {
    path: "Index",
    name: "Registration & Licenses",
    icon: <MdAccountBox />,
    exact: true,
    subRoutes: [
      {
        path: "GovernmentRegistration",
        name: "Government Registration",
      },
      {
        path: "Licenses",
        name: "Licenses",
      },
    ],
  },
  {
    path: "Index",
    name: "Compilances",
    icon: <MdAccountBox />,
    exact: true,
    subRoutes: [
      {
        path: "UnderCompliances",
        name: "Under Comliances ",
      },
    ],
  }, {
    path: "Index",
    name: "Tax Return Filings",
    icon: <MdAccountBox />,
    exact: true,
    subRoutes: [
      {
        path: "TaxReturnFilings",
        name: "Tax Return Filings ",
      },
    ],
  },
  {
    path: "Index",
    name: "Contact Us",
    icon: <MdContacts />,
    exact: true,
    subRoutes: [
      {
        path: "ContactUs",
        name: "Contact Us ",
      },
    ],
  },

];
const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  let token = localStorage.getItem("access_token");

  const fetchProfiles = async () => {
    const result = await axios.get(`http://admin.ngandassociates.com/showprofile/${token}`);

    console.log(result.data);
    setUsers(result.data);
  };
  const toggle = () => setIsOpen(!isOpen);
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  }

  const handleLogout = () => {
    dispatch(unsetUserInfo({ name: "", email: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

    ;

  useEffect(() => {
    fetchProfiles();
  }, []);
  return (
    <>
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
                      {/* <!-- item--> */}
                      <Link to="Index" className="dropdown-item notify-item active">
                        <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                        <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="Index" className="dropdown-item notify-item">
                        <div className="notify-icon bg-warning"><i className="mdi mdi-message"></i></div>
                        <p className="notify-details">New Application is received<span className="text-muted">You have 87 unread messages</span></p>
                      </Link>
                      {/* <!-- item--> */}
                      <Link to="Index" className="dropdown-item notify-item">
                        <div className="notify-icon bg-info"><i className="mdi mdi-martini"></i></div>
                        <p className="notify-details">Your Application is under process<span className="text-muted">It is a long established fact that a reader will</span></p>
                      </Link>
                    </div>
                    {/* <!-- All--> */}
                    <Link to="Index" className="dropdown-item text-center text-primary">
                      View all <i className="fi-arrow-right"></i>
                    </Link>
                  </div>
                </li>
                <li className="dropdown notification-list">
                  <div className="dropdown notification-list nav-pro-img">
                    <Link to="#" className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                      {users.map((user, index) => (
                        <img src={user.pic} alt="user image not available" className="rounded-circle" />
                      ))}
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right dropdown ">
                      <Link exact to="Profile" className="dropdown-item" >
                        {users.map((user, index) => (
                          <span><i className="mdi mdi-account-circle m-r-5"></i>{user.first_name} {user.last_name}</span>
                        ))}</Link>
                      <Link exact to="ChangePassword" className="dropdown-item" ><i className="mdi mdi-account-circle m-r-5"></i> Change Password</Link>
                      {/* < Link to="#" className="dropdown-item d-block"><i className="mdi mdi-settings m-r-5"></i> Settings</Link> */}
                      <Link exact to="/DocumentWallet" className="dropdown-item"><i className="mdi mdi-wallet m-r-5"></i> Document Wallet</Link>
                      <div className="dropdown-divider"></div>
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
          <div className="content">
            <motion.div
              animate={{
                width: isOpen ? "240px" : "60px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  damping: 10,
                },
              }}
              className={`sidebar`}
            >
              <div className="top_section">

                {/* 
            <div className="bars">
              <FaBars onClick={toggle} />
            </div> */}
              </div>
              <section className="routes">
                {routes.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }
                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="link"
                      activeClassName="active"
                    >
                      <div className="icon">{route.icon}</div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
              </section>
            </motion.div>
            <main>{children}</main>
          </div>
          <div className="conatin" onClick={() => setIsOpen(false)}>
            <Outlet />
          </div>
          <footer class="footer">
            © 2022 - 2023   <span class="d-none d-sm-inline-block"> <i class="mdi mdi-heart text-danger"></i> by Bol 7</span>.
          </footer>
        </div>
      </div>
    </>
  );
};

export default SideBar;