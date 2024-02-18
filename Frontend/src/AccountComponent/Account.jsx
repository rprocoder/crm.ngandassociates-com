import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";
import InvoiceModal from "./InvoiceModal";
import InvoiceShowModal from "./InvoiceShowModal";
import PaymentModal from "./PaymentModal";
import { Link } from 'react-router-dom';


import axios from "axios";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], token: localStorage.getItem('access_token2') };
  }
  componentDidMount() {
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
    this.resetState();
  }

  getStudents = () => {
    axios
      .get("http://admin.ngandassociates.com/api/completeorderrequirementdocumen/" + this.state.token)
      .then((res) => this.setState({ data: res.data }));
  };
  resetState = () => {
    this.getStudents();
  };
  render() {
    return (
      <div>
        <div className="content-page1" style={{ marginTop: "60px" }}>
          {/* Start content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    className="page-title-box"
                    style={{ textAlign: "center" }}
                  >
                    <h3 className="page-title">
                      <div
                        style={{
                          color: "gray",
                          fontWeight: "bold",
                          background: "white",
                          borderRadius: "8px",
                          padding: "5px",
                          marginBottom: "-18px",
                          fontSize: "20px",
                        }}
                      >
                        Order Application :
                      </div>{" "}
                    </h3>
                  </div>
                  <Link to="/Invoice">
                    <button onClick={this.toggle} style={{ fontSize: "13px", padding: "3px", background: "#e74c3c", borderColor: "#e74c3c", borderRadius: "5px", paddingLeft: "10px", paddingRight: "10px", marginTop: "2px", marginBottom: "5px", color: 'white' }}> Create Invoice +</button> </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="m-b-20">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table
                          id="example"
                          class="display"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr
                              className="bg-primary"
                              style={{ color: "white" }}
                            >
                              <th>User Name</th>
                              <th>Email ID</th>
                              <th>Service Name</th>
                              <th>Date</th>
                              <th>Payment Status</th>
                              <th>Invoice</th>
                              <th>Invoice</th>
                              <th>Payment</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map((student) => {
                              return (
                                <tr>
                                  <td>{student.name} </td>
                                  <td>{student.email}</td>
                                  <td>{student.servicename}</td>
                                  <td>{student.date}</td>
                                  <td>
                                    <PaymentModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                  </td>
                                  <td>
                                    <InvoiceModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                  </td>
                                  <td>
                                    <InvoiceShowModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                  </td>
                                  <td>
                                    <button
                                      style={{
                                        borderRadius: "4px",
                                        fontSize: "10.5px",
                                        color: "white",
                                        background: "#6f42c1",
                                        borderColor: "#6f42c1",
                                        padding: "4px",
                                        paddingLeft: "10px",
                                        paddingRight: "10px",
                                      }}
                                    >
                                      {student.paymentstatus}
                                    </button>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
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
  }
}
export default Account;
