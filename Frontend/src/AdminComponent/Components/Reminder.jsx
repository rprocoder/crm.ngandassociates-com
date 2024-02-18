import React from "react";
import axios from "axios";
import EmailModal from "./EmailModal";


class Reminder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], data1: [], formslist: [], olduserlist: [], applicationname: null, servicename: null, token: localStorage.getItem('access_token3') };
  }

  getStudents = async (servicename) => {
    axios
      .get("http://admin.ngandassociates.com/sendmail/" + servicename + "/" + this.state.token)
      .then((res) => this.setState({ data: res.data }));
  };

  
  getStudents1 = async (applicationname) => {
    axios
      .get("http://admin.ngandassociates.com/oldsendmail/" + applicationname + "/" + this.state.token)
      .then((res) => this.setState({ data1: res.data }));
  };


  componentDidMount() {
    axios
      .get("http://admin.ngandassociates.com/formslist/" + this.state.token)
      .then(res => this.setState({ formslist: res.data }
      ));

      axios
      .get("http://admin.ngandassociates.com/olduserlist/" + this.state.token)
      .then(res => this.setState({ olduserlist: res.data }
      ));
  }

  handleChange = (e) => {
    const servicename = e.target.value;
    this.setState({ servicename: e.target.value });
    this.getStudents(servicename);
  };


  handleChange1 = (e) => {
    const applicationname = e.target.value;
    this.setState({ applicationname: e.target.value });
    this.getStudents1(applicationname);
  };


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
                      <span style={{ color: "#350ad0" }}>User Details</span> :-{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="m-b-20">
                    <div className="card-body">
                      <div className="table-responsive">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                          <div className="form-group dropdn">
                            <label for="servicename"> Select Service name :</label>
                            <select
                              value={this.state.servicename}
                              onChange={this.handleChange}
                              style={{ borderRadius: "5px", width: "35%" }}
                              className="form-control"
                            >
                              <option>--Select-Service-Name--</option>
                              <option>All</option>
                              {this.state.formslist.map((e, key) => {
                                return <option key={key} value={e.servicename}>{e.servicename}</option>
                              })}
                            </select>
                          </div>
                          <EmailModal />
                          <div className="form-group dropdn" style={{ marginLeft: '250px', marginTop: "-112px", marginBottom: "45px" }}>
                            <label for="servicename"> Select Old Service name :</label>
                            <select
                              value={this.state.applicationname}
                              onChange={this.handleChange1}
                              style={{ borderRadius: "5px", width: "60%" }}
                              className="form-control"
                            >
                              <option>--Select-Service-Name--</option>
                              <option>All</option>
                              {this.state.olduserlist.map((e, key) => {
                                return <option key={key} value={e.applicationname}>{e.applicationname}</option>
                              })}
                            </select>
                          </div>
                        </div>
                        <table
                          id="example"
                          class="display"
                          style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            width: "100%",
                            border: "1px solid",
                            padding: "5px"
                          }}
                        >
                          <thead>
                            <tr
                              className="bg-primary"
                              style={{ color: "white" }}
                            >
                              <th style={{ border: "1px solid #ddd", padding: "5px" }}>User ID</th>
                              <th style={{ border: "1px solid #ddd", padding: "5px" }}>User Name</th>
                              <th style={{ border: "1px solid #ddd", padding: "5px" }}>Email ID</th>
                              <th style={{ border: "1px solid #ddd", padding: "5px" }}>Service Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.map((student) => {
                              return (
                                <tr  >
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.userid} </td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.name} </td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.email}</td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.servicename}</td>
                                </tr>
                              );
                            })}
                            {this.state.data1.map((student) => {
                              return (
                                <tr  >
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.oldid} </td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.username} </td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.email}</td>
                                  <td style={{ borderBottom: "2px solid #ddd", border: "1px solid #ddd", padding: "5px" }}>{student.applicationname}</td>
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
export default Reminder;
