import React from "react";
import {Link} from "react-router-dom";


class GovernmentRegistration extends React.Component {
    render() {
        return (
            <div className="content-page">
                {/* <!-- Start content --> */}
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title"><span style={{ color: "#350ad0" }}>Registration and Licenses</span> :-  Government Registration</h4>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="popular">
                                    <ul>
                                        <li><Link to="/GstRegistration">GST Registration</Link></li>
                                        <li><Link to="/ImportExportCodeRegistration">Import Export Code Registration</Link></li>
                                        <li><Link to="/StartupIndiaRegistration">Startup India Registration</Link></li>
                                        <li><Link to="/LUTUnderGst">LUT under GST</Link></li>
                                        <li><Link to="/SSIMSMERegistration">SSI - MSME Registration</Link></li>
                                        <li><Link to="/ShopEstablishmentRegistration">Shop & Establishment Registration</Link></li>
                                        <li><Link to="/ProfessionalTaxRegistration">Professional Tax Registration</Link></li>
                                        <li><Link to="/PANApplication">PAN Application</Link></li>
                                        <li><Link to="/TANApplication">TAN Application</Link></li>
                                        <li><Link to="/FSSAIApplication">FSSAI Application</Link></li>
                                        <li><Link to="/ESIRegistration">ESI Registration</Link></li>
                                        <li><Link to="/PFRegistration">PF Registration</Link></li>
                                        <li><Link to="/GEMRegistration">GEM Registration</Link></li>
                                        <li><Link to="/NSICRegistration">NSIC Registration</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GovernmentRegistration;