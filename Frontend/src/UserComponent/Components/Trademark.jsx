import React from "react";
import { Link } from "react-router-dom";

class Trademark extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Intellectual Property</span> :-  Trademark</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/TrademarkRegistration">Trademark Registration</Link></li>
                                            <li><Link to="/TrademarkObjectionReply">Trademark Objection Reply</Link></li>
                                            <li><Link to="/TrademarkOpposition">Trademark Opposition</Link></li>
                                            <li><Link to="/TrademarkAsignment">Trademark Asignment</Link></li>
                                            <li><Link to="/TrademarkRenewal">Trademark Renewal</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trademark;