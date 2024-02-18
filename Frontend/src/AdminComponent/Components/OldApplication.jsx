import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";
import axios from 'axios';
import InvoiceShowModal from "./InvoiceShowModal";
import DocumentModal from "./DocumentModal";



class OldApplication extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [], token: localStorage.getItem('access_token3') };
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
      .get("http://admin.ngandassociates.com/api/completeorderrequirementdocument/" + this.state.token)
      .then(res => this.setState({ data: res.data }
      ));
  }
  resetState = () => {
    this.getStudents();
  }


  render() {
    //Datatable HTML



    return (
      <div>
        <div className="content-page">
          {/* Start content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <h4 className="page-title">
                      <span style={{ color: "#350ad0" }}>Old Applications</span> :-{" "}
                    </h4>
                  </div>
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
                              <th>User ID</th>
                              <th>User Name</th>
                              <th>Email ID</th>
                              <th>Service Name</th>
                              <th>Date</th>
                              <th>Document</th>
                              <th>Payment</th>
                              <th>Action</th>

                            </tr>
                          </thead>

                          <tbody>
                            {this.state.data.map((student) => {
                              return (
                                <tr>
                                  <td>{student.userid} </td>
                                  <td>{student.name} </td>
                                  <td>{student.email}</td>
                                  <td>{student.servicename}</td>
                                  <td>{student.date}</td>
                                  <td>
                                    <DocumentModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn btn-sm"
                                      style={{
                                        paddingLeft: "15.5px",
                                        paddingRight: "15.5px",
                                        color: "white",
                                        borderColor: "#5856d6",
                                        backgroundColor: "#5856d6"
                                      }}
                                    >
                                      {student.paymentstatus}
                                    </button>{" "}
                                  </td>
                                  <td>
                                    <InvoiceShowModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
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
export default OldApplication;
