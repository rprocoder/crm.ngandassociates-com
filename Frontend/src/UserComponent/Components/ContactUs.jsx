import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
    let history = useNavigate();
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage] = useState(null);
    let token = localStorage.getItem("access_token");

    const addContactUs = async () => {
        let formField = new FormData();
        formField.append("name", name);
        formField.append("email", email);
        formField.append("message", message);
        await axios({
            method: "post",
            url: `http://admin.ngandassociates.com/contactus/${token}`,
            data: formField,
        }).then((response) => {
            if (response.status === 201) {
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

    return (
        <>
            <div>
                {/* Start right Content here */}
                {/* ============================================================== */}
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
                                        <h1 style={{ color: "#7b7a7d", marginBottom: "20px" }}>Contact Us</h1>
                                        <div className="sec_sp">
                                            <div lg="5" className="mb-5" style={{ marginLeft: "10px", background: "#e9ecf0", border: "1.5px solid white", borderRadius: "8px", padding: "10px" }}>
                                                <strong>Delhi : Office No 205, 2nd floor , Lotus Tower , F6 Vijay Block , Laxmi Nager , Delhi 110090</strong>
                                                <br />
                                                <br />
                                                <strong>Noida : 27( j ), A Block , Sector 16 , Noida , U.P.</strong>
                                                <br />
                                                <br />
                                                <strong>Chandigharh : Office No. 524 5th Floor Golden Square Zirakpur </strong>
                                                <br />
                                                <br />
                                                <strong>Email Us : info@ngandassociates.com</strong>
                                                <br />
                                                <br />
                                                <strong>Phone : 91-7840071184</strong>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane "
                                            id="feedback"
                                            role="tabpanel"
                                        >
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ marginLeft: "20px", marginRight: "-150px" }}>
                                                        <label for="fullName">Name :</label>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <input
                                                            required

                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            placeholder="Enter your name*"
                                                            style={{'borderRadius':'5px'}}
                                                            name="name"
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ marginLeft: "20px", marginRight: "-150px" }}>
                                                        <label for="fullName">Email ID :</label>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <input
                                                            required
                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            placeholder="Enter your email*"
                                                            style={{'borderRadius':'5px'}}
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-3" style={{ marginLeft: "20px", marginRight: "-150px" }}>
                                                        <label for="fullName">Message : </label>
                                                    </div>
                                                    <div className="col-lg-10">
                                                        <textarea
                                                            required
                                                            type="text"
                                                            className="form-control form-control-lg"
                                                            placeholder="Type your message"
                                                            style={{'borderRadius':'5px'}}
                                                            name="feedback"
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-8"></div>
                                                    <div className="col-lg-6">
                                                        <button
                                                            className="btn btn-success"
                                                            onClick={() => {
                                                                addContactUs();
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
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ContactUs;
