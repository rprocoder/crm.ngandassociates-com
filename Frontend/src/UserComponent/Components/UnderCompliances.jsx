import React from "react";
import {Link} from "react-router-dom";

class UnderCompliances extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Compliances</span> :-  Under Compliances</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/DIR3DINKYCFilling">DIR3 DIN KYC Filling</Link></li>
                                            <li><Link to="/ROCReturnFillingforPvtLtd">ROC Return Filling for Pvt. Ltd.</Link></li>
                                            <li><Link to="/ROCReturnFillingforOPC">ROC Return Filling for OPC</Link></li>
                                            <li><Link to="/ROCReturnFillingforLLP">ROC Return Filling for LLP</Link></li>
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

export default UnderCompliances;