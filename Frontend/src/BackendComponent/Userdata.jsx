import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";
import axios from "axios";
import UserdocModal from "./UserdocModal";
import DataModal from "./DataModal";
import CompanyModal from "./CompanyModal";
import FieldModal from "./FieldModal";



class Userdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], token: localStorage.getItem('access_token1') };
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
      .get("http://admin.ngandassociates.com/oldata/" + this.state.token)
      .then(res => this.setState({ data: res.data }
      )
      );
  }
  resetState = () => {
    this.getStudents();
  }

  render() {
    return (
      <div>
        <div className="content-page1" style={{ marginTop: "60px" }}>
          {/* Start content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box" style={{ textAlign: "center", }}>
                    <h2 className="page-title">
                      <div style={{ color: "gray", fontWeight: "bold", background: "white", borderRadius: "8px", padding: "5px", marginBottom: "-18px", fontSize: "20px" }}> User Company & Applications Document : </div> {" "}
                    </h2>
                  </div>
                  <CompanyModal/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <DataModal/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <FieldModal />
                </div>
                <br/>
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
                              <th>Phone</th>
                              <th>Company Name</th>
                              <th>Application Name</th>
                              <th>Documents</th>
                            </tr>
                          </thead>

                          <tbody>
                            {this.state.data.map((student) => {
                              return (
                                <tr>
                                  <td>{student.oldid} </td>
                                  <td>{student.username} </td>
                                  <td>{student.email}</td>
                                  <td>{student.phone}</td>
                                  <td>{student.companyname}</td>
                                  <td>{student.applicationname}</td>
                                  <td>
                                    <UserdocModal
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
export default Userdata;