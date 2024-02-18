import axios from "axios";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [companyprofiles, setCompanyprofiles] = useState([]);
  let token = localStorage.getItem("access_token");

  const fetchProfiles = async () => {
    const result = await axios.get(`http://admin.ngandassociates.com/showprofile/${token}`);

    console.log(result.data);
    setUsers(result.data);
  };
  
  const fetchCompanyprofiles = async () => {
    const res = await axios.get(`http://admin.ngandassociates.com/showcompanyprofile/${token}`);

    console.log(res.data);
    setCompanyprofiles(res.data);
  };

  useEffect(() => {
    fetchProfiles();
    fetchCompanyprofiles();
  }, []);

  return (
    <div>
      <div className="content-page">
        {/* <!-- Start content --> */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box"></div>
                <h5 className="page-title" style={{ textAlign: "center", marginTop:"-15px" }}>Profile Details</h5>
              </div>
            </div>
            {/* <!-- end row --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card m-b-20">
                  {/* <!-- Nav tabs --> */}
               
                  {/* <!-- Tab panes --> */}
                  <div className="tab-pane p-3" id="profile" role="tabpanel">
                    <div className="container">
                      <div className="row gutters">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                          {users.map((user, index) => (
                            <div className="account-settings">
                              <div className="user-profile">
                                <div className="user-avatar">
                                  <img src={user.pic} style={{width:"151px", height:"151px"}} alt="" />
                                </div>
                                <h5 className="user-name">{user.first_name} {user.last_name}</h5>
                                <p className="user-email" style={{fontSize:"14px"}}>{user.email}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <h6 className="mb-2 text-primary">
                                    Personal Details
                                  </h6>
                                </div>

                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="fullName">First Name</label>
                                      <input
                                        ype="text"
                                        className="form-control"
                                        id=""
                                        value={user.first_name}
                                        placeholder="Enter full name"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="fullName">Last Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id=""
                                        value={user.last_name}
                                        placeholder="Enter full name"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="eMail">Email</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="eMail"
                                        value={user.email}
                                        placeholder="Enter email ID"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="phone">Phone</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        value={user.phone}
                                        placeholder="Enter phone number"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="phone">Gender</label>
                                      <select
                                        type="text"
                                        value={user.gender}
                                        className="form-control"
                                      >
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                      </select>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <h6 className="mt-3 mb-2 text-primary">
                                    Address
                                  </h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="Street">Street</label>
                                      <input
                                        type="name"
                                        className="form-control"
                                        value={user.street}
                                        id="Street"
                                        placeholder="Enter Street"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="ciTy">City</label>
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="ciTy"
                                        value={user.city}
                                        placeholder="Enter City"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="sTate">State</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="sTate"
                                        value={user.state}
                                        placeholder="Enter State"
                                      />
                                    </div>
                                  ))}
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  {users.map((user, index) => (
                                    <div className="form-group">
                                      <label for="zIp">Pin Code</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="zIp"
                                        value={user.pin}
                                        placeholder="Pin Code"
                                      />
                                    
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="company_details"></div>
                              <div className="col-lg-12">
                                <div className="row gutters">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mb-2 text-primary">
                                      Company Details
                                    </h6>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="fullName">
                                            Company Name
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.company_name}
                                            placeholder="Enter full name"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="eMail">Pan Number</label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.pan_number}
                                            placeholder="Enter email ID"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="eMail">
                                            Aadhar Number
                                          </label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.aadhar_number}
                                            placeholder="Enter email ID"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="eMail">GST Number</label>
                                          <input
                                            type="email"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.gst_number}
                                            placeholder="Enter email ID"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="phone">Phone</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.company_phone}
                                            placeholder="Enter phone number"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                                <div className="row gutters">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h6 className="mt-3 mb-2 text-primary">
                                     Company Address
                                    </h6>
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="Street">Street</label>
                                          <input
                                            type="name"
                                            className="form-control"
                                            id=""
                                            value={
                                              companyprofile.company_street
                                            }
                                            placeholder="Enter Street"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="ciTy">City</label>
                                          <input
                                            type="name"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.company_city}
                                            placeholder="Enter City"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="sTate">State</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.company_state}
                                            placeholder="Enter State"
                                          />
                                        </div>
                                      )
                                    )}
                                  </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    {companyprofiles.map(
                                      (companyprofile, index) => (
                                        <div className="form-group">
                                          <label for="zIp">Pin Code</label>
                                          <input
                                            type="text"
                                            className="form-control"
                                            id=""
                                            value={companyprofile.company_pin}
                                            placeholder="Zip Code"
                                          />
                                     
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
