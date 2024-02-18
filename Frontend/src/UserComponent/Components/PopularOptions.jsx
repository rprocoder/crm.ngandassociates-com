import React from "react";
import {Link} from "react-router-dom";


class PopularOptions extends React.Component {
    render() {
        return (
            <div>
                <div className="content-page">
                    {/* <!-- Start content --> */}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="page-title-box">
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Start A Business</span> :- Popular Options</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/PrivateLimitedCompanyRegistration">Private Limited Company Registration</Link></li>
                                            <li><Link to="/LimitedLiabilityPartnershipRegistration">Limited Liability Partnership Registration</Link></li>
                                            <li><Link to="/OnePersonCompanyRegistration">One Person Company Registration</Link></li>
                                            <li><Link to="/PartnershipFirmRegistration">Partnership Firm Registration</Link></li>
                                            <li><Link to="/SoleProprietarshipFirmRegistration">Sale Proprietarship Firm Registration</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="row">
                                <div className="col-xl-3">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Monthly Earnings</h4>
                                            <div className="row text-center m-t-20">
                                                <div className="col-6">
                                                    <h5 className="">$56241</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="">$23651</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                            </div>
                                            <div id="morris-donut-example" className="dashboard-charts morris-charts"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Email Sent</h4>
                                            <div className="row text-center m-t-20">
                                                <div className="col-4">
                                                    <h5 className="">$ 89425</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-4">
                                                    <h5 className="">$ 56210</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                                <div className="col-4">
                                                    <h5 className="">$ 8974</h5>
                                                    <p className="text-muted">Last Month</p>
                                                </div>
                                            </div>
                                            <div id="morris-area-example" className="dashboard-charts morris-charts"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Monthly Earnings</h4>
                                            <div className="row text-center m-t-20">
                                                <div className="col-6">
                                                    <h5 className="">$ 2548</h5>
                                                    <p className="text-muted">Marketplace</p>
                                                </div>
                                                <div className="col-6">
                                                    <h5 className="">$ 6985</h5>
                                                    <p className="text-muted">Total Income</p>
                                                </div>
                                            </div>
                                            <div id="morris-bar-stacked" className="dashboard-charts morris-charts"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>                          
                            <div className="row">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title mb-3">Inbox</h4>
                                            <div className="inbox-wid">
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-1.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Misty</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                                                        <p className="inbox-item-date text-muted">13:40 PM</p>
                                                    </div>
                                                </a>
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-2.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Melissa</h6>
                                                        <p className="inbox-item-text text-muted mb-0">I've finished it! See you so...</p>
                                                        <p className="inbox-item-date text-muted">13:34 PM</p>
                                                    </div>
                                                </a>
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-3.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Dwayne</h6>
                                                        <p className="inbox-item-text text-muted mb-0">This theme is awesome!</p>
                                                        <p className="inbox-item-date text-muted">13:17 PM</p>
                                                    </div>
                                                </a>
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-4.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Martin</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Nice to meet you</p>
                                                        <p className="inbox-item-date text-muted">12:20 PM</p>
                                                    </div>
                                                </a>
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-5.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Vincent</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                                                        <p className="inbox-item-date text-muted">11:47 AM</p>
                                                    </div>
                                                </a>
                                                <a href="#" className="text-dark">
                                                    <div className="inbox-item">
                                                        <div className="inbox-item-img float-left mr-3"><img src="assets/images/users/user-6.jpg" className="thumb-md rounded-circle" alt=""></div>
                                                        <h6 className="inbox-item-author mt-0 mb-1">Robert Chappa</h6>
                                                        <p className="inbox-item-text text-muted mb-0">Hey! there I'm available...</p>
                                                        <p className="inbox-item-date text-muted">10:12 AM</p>
                                                    </div>
                                                </a>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title mb-4">Recent Activity Feed</h4>
                                            <ol className="activity-feed mb-0">
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 25</span>
                                                        <span className="activity-text">Responded to need “Volunteer Activities”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 24</span>
                                                        <span className="activity-text">Added an interest “Volunteer Activities”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 23</span>
                                                        <span className="activity-text">Joined the group “Boardsmanship Forum”</span>
                                                    </div>
                                                </li>
                                                <li className="feed-item">
                                                    <div className="feed-item-list">
                                                        <span className="date">Jun 21</span>
                                                        <span className="activity-text">Responded to need “In-Kind Opportunity”</span>
                                                    </div>
                                                </li>
                                            </ol>
                                            <div className="text-center">
                                                <a href="#" className="btn btn-sm btn-primary">Load More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="card widget-user m-b-20">
                                        <div className="widget-user-desc p-4 text-center bg-primary position-relative">
                                            <i className="fas fa-quote-left h3 text-white-50"></i>
                                            <p className="text-white mb-0">The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe the same vocabulary. The languages only in their grammar.</p>
                                        </div>
                                        <div className="p-4">
                                            <div className="float-left mt-2 mr-3">
                                                <img src="assets/images/users/user-2.jpg" alt="" className="rounded-circle thumb-md">
                                            </div>
                                            <h6 className="mb-1">Marie Minnick</h6>
                                            <p className="text-muted mb-0">Marketing Manager</p>
                                        </div>
                                    </div>
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 header-title">Yearly Sales</h4>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div>
                                                        <h4>52,345</h4>
                                                        <p className="text-muted">The languages only differ grammar</p>
                                                        <a href="#" className="text-primary">Learn more <i className="mdi mdi-chevron-double-right"></i></a>
                                                    </div>
                                                </div>
                                                <div className="col-md-8 text-right">
                                                    <div id="sparkline"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>
                                            <div className="table-responsive">
                                                <table className="table table-vertical">
                                                    <tbody>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
                                                            Herbert C. Patton
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $14,584
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
                                                            Mathias N. Klausen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting payment</td>
                                                        <td>
                                                            $8,541
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            10/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
                                                            Nikolaj S. Henriksen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $954
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            8/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
                                                            Lasse C. Overgaard
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment expired</td>
                                                        <td>
                                                            $44,584
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            7/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2"/>
                                                            Kasper S. Jessen
                                                        </td>
                                                        <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                        <td>
                                                            $8,844
                                                            <p className="m-0 text-muted font-14">Amount</p>
                                                        </td>
                                                        <td>
                                                            1/11/2016
                                                            <p className="m-0 text-muted font-14">Date</p>
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="card m-b-20">
                                        <div className="card-body">
                                            <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>
                                            <div className="table-responsive">
                                                <table className="table table-vertical mb-1">
                                                    <tbody>
                                                    <tr>
                                                        <td>#12354781</td>
                                                        <td>
                                                            <img src="assets/images/users/user-1.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            Riverston Glass Chair
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $185
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#52140300</td>
                                                        <td>
                                                            <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            Shine Company Catalina
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $1,024
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#96254137</td>
                                                        <td>
                                                            <img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            Trex Outdoor Furniture Cape
                                                        </td>
                                                        <td><span className="badge badge-pill badge-danger">Cancel</span></td>
                                                        <td>
                                                            $657
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#12365474</td>
                                                        <td>
                                                            <img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            Oasis Bathroom Teak Corner
                                                        </td>
                                                        <td><span className="badge badge-pill badge-warning">Shipped</span></td>
                                                        <td>
                                                            $8451
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#85214796</td>
                                                        <td>
                                                            <img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            BeoPlay Speaker
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $584
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>#12354781</td>
                                                        <td>
                                                            <img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle"/>
                                                            Riverston Glass Chair
                                                        </td>
                                                        <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                        <td>
                                                            $185
                                                        </td>
                                                        <td>
                                                            5/12/2016
                                                        </td>
                                                        <td>
                                                            <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>-->
                           */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularOptions;