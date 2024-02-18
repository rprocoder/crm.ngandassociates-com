import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";
import axios from 'axios';

class Feedbacks extends React.Component {
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
            .get("http://admin.ngandassociates.com/api/feedbacks/" + this.state.token)
            .then(res => this.setState({ data: res.data }
            ));
    }
    resetState = () => {
        this.getStudents();
    }
    render() {
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
                                            <span style={{ color: "#350ad0" }}>Feedbacks</span> :-{" "}
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
                                                            <th>SR. No.</th>
                                                            <th>User ID</th>
                                                            <th>User Name</th>
                                                            <th>Email ID</th>
                                                            <th>Feedback Message</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.state.data.map((student) => {
                                                            return (
                                                                <tr>
                                                                    <td>{student.feedbackid} </td>
                                                                    <td>{student.userid} </td>
                                                                    <td>{student.name}</td>
                                                                    <td>{student.email}</td>
                                                                    <td>{student.feedback}</td>
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
export default Feedbacks;
