import React from "react";
import {Link} from "react-router-dom";


class Licenses extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Registration and Licenses</span> :-  licenses</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/FactoryLicense">Factory License</Link></li>
                                            <li><Link to="/TradeLicense">Trade License</Link></li>
                                            <li><Link to="/DrugLicense">Drug License</Link></li>
                                            <li><Link to="/Liquor">Liquor License</Link></li>
                                            <li><Link to="/LabourLicense">Labour License</Link></li>
                                            <li><Link to="/AyushLicense">Ayush License</Link></li>
                                            <li><Link to="/ISOCertification">ISO Certification</Link></li>
                                            <li><Link to="/ARAICertification">ARAI Certification</Link></li>
                                            <li><Link to="/ICATCertification">I-CAT Certification</Link></li>
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

export default Licenses;