import React from "react";
import {Link} from "react-router-dom";

class SpecialBusinessEntities extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Start A Business</span> :-  Special Business Entities</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/RegisterAnIndianSubsidiary">Register an Indian Subsidiary</Link></li>
                                            <li><Link to="/Section8CompanyRegistration">Section 8 Company Registration</Link></li>
                                            <li><Link to="/ProducerCompanyRegistration">Producer Company Registration</Link></li>
                                            <li><Link to="/NidhiCompanyRegistration">Nidhi Company Registration</Link></li>
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

export default SpecialBusinessEntities;