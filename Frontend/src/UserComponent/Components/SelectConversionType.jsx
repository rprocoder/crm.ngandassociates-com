import React from "react";
import {Link} from "react-router-dom";


class SelectConversionType extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Changes in Business</span> :-  Select Conversion Type</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/ProprietorshipToPartnership">Proprietorship to Partnership</Link></li>
                                            <li><Link to="/ProprietorshipToLLP">Proprietorship to LLP</Link></li>
                                            <li><Link to="/ProprietorshipToPrivateLimitedCompany">Proprietorship to Private Limited Company</Link></li>
                                            <li><Link to="/ProprietorshipToOPC">Proprietorship to OPC</Link></li>
                                            <li><Link to="/PartnershipToLLP">Partnership to LLP</Link></li>
                                            <li><Link to="/PartnershipToPrivateLimitedCompany">Partnership to Private Limited Company</Link></li>
                                            <li><Link to="/LLPToPrivateLimitedCompany">LLP to Private Limited Company</Link></li>
                                            <li><Link to="/OPCToPrivateLimitedCompany">OPC to Private Limited Company</Link></li>
                                            <li><Link to="/PrivateLimitedCompanyToLLP">Private Limited Company to LLP</Link></li>
                                            <li><Link to="/PrivateCompanyToPublicCompany">Private Company to Public Company</Link></li>
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

export default SelectConversionType;