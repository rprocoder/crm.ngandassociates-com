import React from "react";
import { Link } from "react-router-dom";

class CloseABusiness extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Changes in Business</span> :-  Close a Business</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/CloseaPrivateLimitedCompany">Close a Private Limited Company</Link></li>
                                            <li><Link to="/CloseaLimitedLiabilityPartnership">Close a Limited Liability Partnership</Link></li>
                                            <li><Link to="/CloseOnePersonCompany">Close a One Person Company</Link></li>
                                            <li><Link to="/DissolveaPartnershipFarm">Dissolve a Partnership Farm</Link></li>
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
export default CloseABusiness;