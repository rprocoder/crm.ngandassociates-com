import React from "react";
import {Link} from "react-router-dom";

class UpdateCorporateInformation extends React.Component {
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
                                        <h4 className="page-title"><span style={{ color: "#350ad0" }}>Changes in Business</span> :-  Update Corporate Information</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end row --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="popular">
                                        <ul>
                                            <li><Link to="/AddorRemoveaDirector">Add or Remove a Director (Company)</Link></li>
                                            <li><Link to="/AddorRemoveaPartner">Add or Remove a Partner (LLP)</Link></li>
                                            <li><Link to="/ChangeBusinessActivity">Change Business Activity</Link></li>
                                            <li><Link to="/ChangeRegisteredOffice">Change Registered Office</Link></li>
                                            <li><Link to="/ChangeCompanyName">Change Company Name</Link></li>
                                            <li><Link to="/ChangeLLPAgreement">Change LLP Agreement</Link></li>
                                            <li><Link to="/ChangePartnershipDeed">Change Partnership Deed</Link></li>
                                            <li><Link to="/IncreaseAuthorisedShareCapital">Increase Authorised Share Capital</Link></li>
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

export default UpdateCorporateInformation;