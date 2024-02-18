import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  let history = useNavigate();
  const [pan, setPan] = useState(null);
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [name, setName] = useState(null);
  const [addhar, setAddhar] = useState(null);
  const [gst, setGst] = useState(null);
  const [other, setOther] = useState(null);
  const [email, setEmail] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [first_name, setFirst_name] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [gender, setGender] = useState(null);
  const [phone, setPhone] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [pin, setPin] = useState(null);
  const [company_name, setCompany_name] = useState(null);
  const [pan_number, setPan_number] = useState(null);
  const [pic, setPic] = useState(null);
  const [aadhar_number, setAadhar_number] = useState(null);
  const [gst_number, setGst_number] = useState(null);
  const [company_phone, setCompany_phone] = useState(null);
  const [company_street, setCompany_street] = useState(null);
  const [company_city, setCompany_city] = useState(null);
  const [company_state, setCompany_state] = useState(null);
  const [company_pin, setCompany_pin] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [services, setServices] = useState([]);
  const [orderoverview, setOrderoverview] = useState([]);
  let token = localStorage.getItem("access_token");

  const fetchServices = async () => {
    const result = await axios.get(`http://admin.ngandassociates.com/showservices/${token}`);
    console.log(result.data);
    setServices(result.data);
  };

  const fetchOrderoverview = async () => {
    const result = await axios.get(`http://admin.ngandassociates.com/showorderoverview/${token}`);
    console.log(result.data);
    setOrderoverview(result.data);
  };




  const fetchCompanydocuments = async () => {
    const result = await axios.get(`http://admin.ngandassociates.com/showcompanydocument/${token}`);
    if (result.data[0].addhar !== null) {
      let text = result.data[0].addhar
      console.log(text);
      let len = text.length
      console.log(len);
      if (len > 48) {
        setMessage("* Addhar is already submitted.");
      }
    }
    if (result.data[0].pan !== null) {
      let text = result.data[0].pan
      let len = text.length
      if (len > 48) {
        setMessage1("* Pan is already submitted.");
      }
    }
    if (result.data[0].gst !== null) {
      let text = result.data[0].gst
      let len = text.length
      if (len > 48) {
        setMessage2("* GST Certificate is already submitted.");
      }
    }
    setDocuments(result.data);
  };

  useEffect(() => {
    fetchOrderoverview();
    fetchServices();
    fetchCompanydocuments();
  }, []);

  const addCompanydocuments = async () => {
    let formField = new FormData();
    if (pan !== null || addhar !== null || gst !== null || other!==null) {
      formField.append("pan", pan);
      formField.append("addhar", addhar);
      formField.append("gst", gst);
      formField.append("other", other);
    }
    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/companydocuments/${token}`,
      data: formField,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        notify();
      }
      else {
        throw Error("This form is not upload!");
      }
    }).catch(error => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      })
    });
    history.push("/");
  };

  const addFeedbacks = async () => {
    let formField = new FormData();
    formField.append("name", name);
    formField.append("email", email);
    formField.append("feedback", feedback);
    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/feedbacks/${token}`,
      data: formField,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        notify();
      }
      else {
        throw Error("This form is not upload!");
      }
    }).catch(error => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      })
    });
    history.push("/");
  };

  const notify = () => {
    toast.success("upload sucessfully.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: true,
    });
  };

  const addCompanyprofiles = async () => {
    let formField = new FormData();
    formField.append("company_name", company_name);
    formField.append("pan_number", pan_number);
    formField.append("gst_number", gst_number);
    formField.append("aadhar_number", aadhar_number);
    formField.append("company_phone", company_phone);
    formField.append("company_street", company_street);
    formField.append("company_city", company_city);
    formField.append("company_state", company_state);
    formField.append("company_pin", company_pin);
    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/companyprofiles/${token}`,
      data: formField,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        notify();
      }
      else {
        throw Error("This form is not upload!");
      }
    }).catch(error => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      })
    });
    history.push("/");
  };


  const addUserprofiles = async () => {
    let formField = new FormData();
    formField.append("first_name", first_name);
    formField.append("last_name", last_name);
    formField.append("email", email);
    formField.append("phone", phone);
    formField.append("gender", gender);
    formField.append("street", street);
    formField.append("city", city);
    formField.append("state", state);
    formField.append("pin", pin);
    if (pic !== null) {
      formField.append("pic", pic);
    }
    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/profiles/${token}`,
      data: formField,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        notify();
      }
      else {
        throw Error("This form is not upload!");
      }
    }).catch(error => {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER
      })
    });
    history.push("/");
  };


  return (
    <>
      <div>
        <div className="content-page">
          {/* <!-- Start content --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Dashboard</h4>
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active">
                        Welcome to NG-Associates Dashboard
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              {/* <!-- end row --> */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card m-b-20">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#account-overview"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-home"></i>
                          </span>
                          <span className="d-none d-sm-block">
                            Account Overview
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#orders"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">Orders</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#documents"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-cog"></i>
                          </span>
                          <span className="d-none d-sm-block">Documents</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#profile"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-cog"></i>
                          </span>
                          <span className="d-none d-sm-block">Profile</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#feedback"
                          role="tab"
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-cog"></i>
                          </span>
                          <span className="d-none d-sm-block">Feedback</span>
                        </a>
                      </li>
                    </ul>
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="account-overview"
                        role="tabpanel"
                      >
                        <div id="accordion">
                          <div className="mb-2">
                            <div className="card-header p-3" id="headingOne">
                              <h6 className="m-0 font-14">
                                <a
                                  href="#collapseOne"
                                  className="text-dark"
                                  data-toggle="collapse"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <div className="account_overview">
                                    <div className="left">
                                      <i className="far fa-address-book"></i>
                                      <div className="icon">2</div>
                                    </div>
                                    <div className="right">
                                      <h3>Open Order</h3>
                                      <p>You have no open orders.</p>
                                    </div>
                                    <div className="view btn btn-primary">
                                      View{" "}
                                    </div>
                                  </div>
                                </a>
                              </h6>
                            </div>

                            <div
                              id="collapseOne"
                              className="collapse "
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                {orderoverview.map((document, index) => (
                                  <p> {document.open_order}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="card-header p-3" id="headingTwo">
                              <h6 className="m-0 font-14">
                                <a
                                  href="#collapseTwo"
                                  className="text-dark collapsed"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  <div className="account_overview">
                                    <div className="left">
                                      <i className="dripicons-document"></i>
                                      <div className="icon">2</div>
                                    </div>
                                    <div className="right">
                                      <h3>Queries in Uploaded Document.</h3>
                                      <p>
                                        There are no Queries in uploaded
                                        document.
                                      </p>
                                    </div>
                                    <div className="view btn btn-primary">
                                      View
                                    </div>
                                  </div>
                                </a>
                              </h6>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                {orderoverview.map((document, index) => (
                                  <p> {document.queries_in_uploading_document}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="card-header p-3" id="headingThree">
                              <h6 className="m-0 font-14">
                                <a
                                  href="#collapseThree"
                                  className="text-dark collapsed"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  <div className="account_overview">
                                    <div className="left">
                                      <i className="far fa-folder-open "></i>
                                      <div className="icon">2</div>
                                    </div>
                                    <div className="right">
                                      <h3>Pending Documents</h3>
                                      <p>
                                        There are no Documents pending in your
                                        Order.
                                      </p>
                                    </div>
                                    <div className="view btn btn-primary">
                                      View
                                    </div>
                                  </div>
                                </a>
                              </h6>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                {orderoverview.map((document, index) => (
                                  <p> {document.pending_documents}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="card-header p-3" id="headingFour">
                              <h6 className="m-0 font-14">
                                <a
                                  href="#collapseFour"
                                  className="text-dark collapsed"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseFour"
                                >
                                  <div className="account_overview">
                                    <div className="left">
                                      <i className="dripicons-trophy"></i>
                                      <div className="icon">2</div>
                                    </div>
                                    <div className="right">
                                      <h3>Plan Expire!</h3>
                                      <p>There are no plans expire.</p>
                                    </div>
                                    <div className="view btn btn-primary">
                                      View
                                    </div>
                                  </div>
                                </a>
                              </h6>
                            </div>
                            <div
                              id="collapseFour"
                              className="collapse"
                              aria-labelledby="headingFour"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                {orderoverview.map((document, index) => (
                                  <p> {document.plan_expire}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mb-2">
                            <div className="card-header p-3" id="headingFive">
                              <h6 className="m-0 font-14">
                                <a
                                  href="#collapseFive"
                                  className="text-dark collapsed"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="collapseFive"
                                >
                                  <div className="account_overview">
                                    <div className="left">
                                      <i className="far fa-address-book"></i>
                                      <div className="icon">2</div>
                                    </div>
                                    <div className="right">
                                      <h3>Documents</h3>
                                      <p>There are no uploaded documents.</p>
                                    </div>
                                    <div className="view btn btn-primary">
                                      View
                                    </div>
                                  </div>
                                </a>
                              </h6>
                            </div>
                            <div
                              id="collapseFive"
                              className="collapse"
                              aria-labelledby="headingFive"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                {orderoverview.map((document, index) => (
                                  <p> {document.documents}</p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane p-3" id="orders" role="tabpanel">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Service Name</th>
                                <th>Date</th>
                                <th>Payment</th>
                                <th>Confirmation</th>
                              </tr>
                            </thead>
                            <tbody>
                              {services.map((service, index) => (
                                <tr>
                                  <td>{service.servicename}</td>
                                  <td>{service.order_date}</td>
                                  <td>
                                    {service.order_amount}
                                  </td>
                                  <td>
                                    <a href="#" className="btn btn-success">
                                      success
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>

                        </div>
                      </div>
                      <div
                        className="tab-pane p-3"
                        id="documents"
                        role="tabpanel"
                      >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="form-group">
                                <label htmlFor="pwd">Upload Your Aadhar:</label>
                                <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message}</p>
                                <input
                                  type="file"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  onChange={(e) => setAddhar(e.target.files[0])}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group">
                                <label htmlFor="pwd">
                                  Upload Your Pan Card:
                                </label>
                                <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message1}</p>
                                <input
                                  type="file"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  onChange={(e) => setPan(e.target.files[0])}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group">
                                <label htmlFor="pwd">
                                  Upload Your GST Certificate:
                                </label>
                                <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message2}</p>
                                <input
                                  type="file"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  onChange={(e) => setGst(e.target.files[0])}
                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="form-group">
                                <label htmlFor="pwd">
                                  Upload Other Document:
                                </label>
                                <p style={{  marginBottom: "1px", marginTop: "-5px" }}>* Any Document</p>
                                <input
                                  type="file"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  onChange={(e) => setOther(e.target.files[0])}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <button
                              style={{ marginTop: "-10px", marginLeft: "22px" }}
                              className="btn btn-primary "
                              onClick={() => {
                                addCompanydocuments();

                              }}
                            >
                              upload
                            </button>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            {documents.map((document, index) => (
                              <div className="row">
                                <div className="col-lg-4" style={{width:"100px"}}>
                                  <p>Aadhar Card</p>
                                  <img
                                    src={document.addhar}
                                    width="100%"
                                    height="auto"
                                    alt="Please Upload Your Addhar Card"
                                  />
                                </div>
                                <div className="col-lg-4" style={{width:"100px"}}>
                                  <p>Pan Card</p>{" "}
                                  <img
                                    src={document.pan}
                                    width="100%"
                                    height="auto"
                                    alt="Please Upload Your Pan Card"
                                  />
                                </div>
                                <div className="col-lg-4" style={{width:"100px"}}>
                                  <p>GST Certificate</p>{" "}
                                  <img
                                    src={document.gst}
                                    width="100%"
                                    height="auto"
                                    alt="Please Upload Your Addhar Card"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane p-3"
                        id="profile"
                        role="tabpanel"
                      >
                        <div className="container">
                          <div className="row gutters">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                              <h6 className="mb-2 text-primary">
                                Personal Details
                              </h6>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                {/* {currentuser.map((user, index) => (
                                <h5>{user.id}</h5>
                                ))} */}
                                <label for="fullName">First Name</label>
                                <input
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  name="first_name"
                                  placeholder="Enter first name"
                                  value={first_name}
                                  onChange={(e) =>
                                    setFirst_name(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="fullName">Last Name</label>
                                <input
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  name="last_name"
                                  placeholder="Enter last name"
                                  value={last_name}
                                  onChange={(e) => setLast_name(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="eMail">Email</label>
                                <input
                                  style={{ borderRadius: '5px' }}
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  placeholder="Enter email ID"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="phone">Phone</label>
                                <input
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  className="form-control"
                                  name="phone"
                                  placeholder="Enter phone number"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                              <div className="form-group">
                                <label for="phone">Gender</label>
                                <select
                                  value={gender}
                                  onChange={(e) => setGender(e.target.value)}
                                  type="text"
                                  style={{ borderRadius: '5px' }}
                                  name="gender"
                                  className="form-control"
                                >
                                  <option>Select Gender</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>Other</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <h6 className="mt-3 mb-2 text-primary">
                                    Address
                                  </h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="Street">Street</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="street"
                                      placeholder="Enter Street"
                                      value={street}
                                      onChange={(e) => setStreet(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="ciTy">City</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="city"
                                      placeholder="Enter City"
                                      value={city}
                                      onChange={(e) => setCity(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="sTate">State</label>
                                    <input
                                      style={{ borderRadius: '5px' }}
                                      type="text"
                                      className="form-control"
                                      name="state"
                                      placeholder="Enter State"
                                      value={state}
                                      onChange={(e) => setState(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="zIp">Pin Code</label>
                                    <input
                                      style={{ borderRadius: '5px' }}
                                      type="text"
                                      className="form-control"
                                      name="pin"
                                      placeholder="Pin Code"
                                      value={pin}
                                      onChange={(e) => setPin(e.target.value)}
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="image">
                                      Upload Your Profile Image
                                    </label>
                                    <input
                                      style={{ borderRadius: '5px' }}
                                      type="file"
                                      className="form-control"
                                      onChange={(e) => setPic(e.target.files[0])}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row gutters">
                              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="text-right">
                                  <button style={{ marginLeft: "16px" }}
                                    className="btn btn-primary"
                                    onClick={() => {
                                      addUserprofiles();
                                    }}
                                  >
                                    Submit
                                  </button>
                                </div>
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
                                  <div className="form-group">
                                    <label for="fullName">Company Name</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="company_name"
                                      placeholder="Enter full name"
                                      value={company_name}
                                      onChange={(e) =>
                                        setCompany_name(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="eMail">Pan Number</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="pan_number"
                                      placeholder="Enter pan number"
                                      value={pan_number}
                                      onChange={(e) =>
                                        setPan_number(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="eMail">Aadhar Number</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="aadhar_number"
                                      placeholder="Enter aadhar number"
                                      value={aadhar_number}
                                      onChange={(e) =>
                                        setAadhar_number(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="eMail">GST Number</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="gst_number"
                                      placeholder="Enter gst number"
                                      value={gst_number}
                                      onChange={(e) =>
                                        setGst_number(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="phone">Phone</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="company_phone"
                                      placeholder="Enter phone number"
                                      value={company_phone}
                                      onChange={(e) =>
                                        setCompany_phone(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                  <h6 className="mt-3 mb-2 text-primary">
                                    Address
                                  </h6>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="Street">Street</label>
                                    <input
                                      type="name"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="company_street"
                                      placeholder="Enter Street"
                                      value={company_street}
                                      onChange={(e) =>
                                        setCompany_street(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="ciTy">City</label>
                                    <input
                                      type="name"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="company_city"
                                      placeholder="Enter City"
                                      value={company_city}
                                      onChange={(e) =>
                                        setCompany_city(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="sTate">State</label>
                                    <input
                                      type="text"
                                      style={{ borderRadius: '5px' }}
                                      className="form-control"
                                      name="company_state"
                                      placeholder="Enter State"
                                      value={company_state}
                                      onChange={(e) =>
                                        setCompany_state(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                  <div className="form-group">
                                    <label for="zIp">pin Code</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="company_pin"
                                      placeholder="pin Code"
                                      value={company_pin}
                                      onChange={(e) =>
                                        setCompany_pin(e.target.value)
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="row gutters">
                                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                      <button
                                        style={{ marginLeft: "16px" }}
                                        className="btn btn-primary"
                                        onClick={() => {
                                          addCompanyprofiles();
                                        }}
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane p-3"
                        id="feedback"
                        role="tabpanel"
                      >
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-2">
                              <label for="fullName">Name :</label>
                            </div>
                            <div className="col-lg">
                              <input
                                required
                                type="text"
                                style={{ borderRadius: '7px' }}
                                className="form-control form-control-lg"
                                placeholder="Enter your name*"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-2">
                              <label for="fullName">Email ID :</label>
                            </div>
                            <div className="col-lg">
                              <input
                                required
                                type="text"
                                className="form-control form-control-lg "
                                style={{ borderRadius: '7px' }}
                                placeholder="Enter your email*"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-2">
                              <label for="fullName">Message :</label>
                            </div>
                            <div className="col-lg">
                              <textarea
                                required
                                type="text"
                                className="form-control form-control-lg"
                                style={{ borderRadius: '7px' }}
                                placeholder="Type your feedback*"
                                name="feedback"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-6">
                              <button
                                className="btn btn-success"
                                onClick={() => {
                                  addFeedbacks();
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--<div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-cube-outline float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Account Overview</h6>
                                            </div>
                                        </div>
                                         </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-buffer float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Orders</h6>
                                                 
                                            </div>
                                        </div>
                                         </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-tag-text-outline float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Adhoc Order</h6>
                                                 
                                            </div>
                                        </div>
                                         </a>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-briefcase-check float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Documents</h6>
                                                 
                                            </div>
                                        </div>
                                         </a>
                                    </div>
                                </div>
                               
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-briefcase-check float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Legal Forms</h6>
                                                 
                                            </div>
                                        </div>
                                         </a>
                                    </div>
                                </div>
                           
                               
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat bg-primary">
                                       <a href="">
                                        <div className="card-body mini-stat-img">
                                            <div className="mini-stat-icon">
                                                <i className="mdi mdi-briefcase-check float-right"></i>
                                            </div>
                                            <div className="text-white">
                                                <h6 className="text-uppercase mb-3">Profile Feedback</h6>
                                                 
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                </div>
                               
                               
                               
                            </div>--> */}
              {/*                          
           
                           <!-- <div className="row">
           
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
                            </div>--> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Index;