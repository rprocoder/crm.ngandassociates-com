import React from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import $ from "jquery";
import axios from "axios";
import QueryModal from "./QueryModal";
import DocumentModal from "./DocumentModal";
import ReasonModal from "./ReasonModal";
import DeliveryModal from "./DeliveryModal";
import RequireModal from "./RequireModal";
import { Link } from 'react-router-dom';

class Dashboard1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [],        token:localStorage.getItem('access_token1') };
  }
  componentDidMount() {
    
    $(document).ready(function () {
      setTimeout(function () {
        $("#example").DataTable();
      }, 1000);
    });
this.resetState();

  }

  getStudents=()=>{
    axios
    .get("http://admin.ngandassociates.com/backenduserdata/"+this.state.token)
    .then(res => this.setState({ data: res.data }
    )
    );
  }
  resetState=()=>{
    this.getStudents();
  }

  render() {
    return (
      <div>
           <div className="content-page1" style={{marginTop:"60px"}}>
          {/* Start content */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box" style={{textAlign:"center",  }}>
                    <h2 className="page-title">
                      <div style={{ color: "gray", fontWeight:"bold", background:"white", borderRadius:"8px", padding:"5px", marginBottom:"-18px",fontSize:"20px" }}>Order Application : </div> {" "}
                    </h2>
                  </div>
                 
                  <Link to="/Userdata">
                    <button onClick={this.toggle} style={{ fontSize: "14.5px", padding: "3px", background: "#58db83", borderColor: "#58db83", borderRadius: "5px", paddingLeft: "10px", paddingRight: "10px", marginTop: "2px", marginBottom: "5px", color: 'white'}}>Old Company Data +</button> </Link>
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
                              <th>Document</th>
                              <th>Personal Details</th>
                              <th>Upload Work Status</th>
                              <th>Work Status</th>
                              <th>Query</th>
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
                                    {/* <App2 /> */}

                                    <DocumentModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />

                                  </td>
                                  <td> 
                                      <RequireModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
</td>
                                  <td>
                                  <ReasonModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                    &nbsp;&nbsp;
                                      <DeliveryModal
                                      student={student}
                                      resetState={this.props.resetState}
                                    />
                                  </td>
                                  <td>
                                    <button
                                      className="btn btn-warning btn-sm"

                                      style={{
                                        paddingLeft: "15.5px",
                                        paddingRight: "15.5px",
                                        backgroundColor: "#fd7e14",
                                        borderColor:"#fd7e14",
                                      }}
                                    >
{student.status1}
                                    </button>{" "}
                                  </td>
                                  <td>
                                    {/* <App1 /> */}
                                    <QueryModal
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
export default Dashboard1;

    // //Datatable HTML
    // function App1() {
    //   let history=useNavigate();
    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);
    //   const [open_order, setOpen_order] = useState(null);
    //   const [queries_in_uploading_document, setQueries_in_uploading_document] =
    //     useState(null);
    //   const [pending_documents, setPending_documents] = useState(null);
    //   const [plan_expire, setPlan_expire] = useState(null);
    //   const [documents, setDocuments] = useState(null);
    //   const [userid, setUserid] = useState(null);
    //   const addAccountoverview = async () => {
    //     let formField = new FormData();
    //     formField.append("userid", userid);
    //     formField.append("open_order", open_order);
    //     formField.append(
    //       "queries_in_uploading_document",
    //       queries_in_uploading_document
    //     );
    //     formField.append("pending_documents", pending_documents);
    //     formField.append("plan_expire", plan_expire);
    //     formField.append("documents", documents);
    //     await axios({
    //       method: "post",
    //       url: "http://admin.ngandassociates.com/accountoverview/",
    //       data: formField,
    //     }).then((response) => {
    //       console.log(response.data);
    //       history.push("/");
    //     });
    //   };
    //   return (
    //     <>
    //       <Button
    //         style={{
    //           background: "#58db83",
    //           borderColor: "#58db83",
    //           fontSize: "11px",
    //           padding: "4px",
    //           paddingLeft: "10px",
    //           paddingRight: "10px",
    //         }}
    //         onClick={handleShow}
    //       >
    //         Message
    //       </Button>
    //       <Modal show={show} onHide={handleClose}>
    //         <Modal.Header
    //           style={{
    //             fontSize: "10px",
    //             background: "#16cefe",
    //             color: "white",
    //           }}
    //         >
    //           <Modal.Title>Upload User Application Query:</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //           <div className="form-group">
    //             <label for="fullName">User Id:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={userid}
    //               onChange={(e) => setUserid(e.target.value)}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="fullName">Open Order Name:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={open_order}
    //               onChange={(e) => setOpen_order(e.target.value)}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="fullName">queries In Uploading Document:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={queries_in_uploading_document}
    //               onChange={(e) =>
    //                 setQueries_in_uploading_document(e.target.value)
    //               }
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="fullName">Pending Documents:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={pending_documents}
    //               onChange={(e) => setPending_documents(e.target.value)}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="fullName">Plan Expire:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={plan_expire}
    //               onChange={(e) => setPlan_expire(e.target.value)}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label for="fullName">Documents:</label>
    //             <input
    //               style={{ borderRadius: "5px" }}
    //               type="text"
    //               className="form-control"
    //               value={documents}
    //               onChange={(e) => setDocuments(e.target.value)}
    //             />
    //           </div>
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button
    //             style={{
    //               fontSize: "11px",
    //               background: "#ec536c",
    //               borderColor: "#ec536c",
    //             }}
    //             onClick={handleClose}
    //           >
    //             Cancel
    //           </Button>
    //           <Button
    //             style={{
    //               color: "white",
    //               background: "#58db83",
    //               fontSize: "11px",
    //               borderColor: "#58db83",
    //             }}
    //             onClick={() => {
    //               handleClose();
    //               addAccountoverview();
    //             }}
    //           >
    //             Upload
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>
    //     </>
    //   );
    // }

    // function App2() {
    //   const [documents, setDocuments] = useState([]);
    //   const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);
    //   const fetchCompanydocuments = async () => {
    //     const result = await axios.get(
    //       "http://admin.ngandassociates.com/showorderrequirementdocuments/"
    //     );

    //     console.log(result.data);
    //     setDocuments(result.data);
    //   };

    //   useEffect(() => {
    //     fetchCompanydocuments();
    //   }, []);
    //   return (
    //     <>
    //       <Button
    //         style={{
    //           background: "#5856d6",
    //           fontSize: "11px",
    //           padding: "4px",
    //           paddingLeft: "10px",
    //           paddingRight: "10px",
    //         }}
    //         onClick={handleShow}
    //       >
    //         View Docs
    //       </Button>
    //       <Modal show={show} onHide={handleClose}>
    //         <Modal.Header
    //           style={{
    //             fontSize: "10px",
    //             background: "#16cefe",
    //             color: "white",
    //           }}
    //         >
    //           <Modal.Title>User Documents</Modal.Title>
    //         </Modal.Header>
    //         <Modal.Body>
    //         <div>
    //           <label>Directors Photograph:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.directorsphotograph}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>Directors Pancard:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.directorspancard}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>Aadhar Card:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.idproof}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>DIN Of Directors:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.dinofdirectors}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>Electricity Bill:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.electricitybill}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>Residential Proof:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.residentialproof}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>MOA:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.moa}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
    //           <br/>
    //           <div>
    //           <label>AOA:</label>
    //             {documents.map((document, index) => (
    //               <img
    //                 src={document.aoa}
    //                 style={{borderRadius:"5px", border:"2px solid gray"}}
    //                 width="100%"
    //                 height="auto"
    //                 alt=""
    //               />
    //             ))}
    //           </div>
           
    //         </Modal.Body>
    //         <Modal.Footer>
    //           <Button
    //             style={{
    //               fontSize: "11px",
    //               background: "#ec536c",
    //               borderColor: "#ec536c",
    //             }}
    //             onClick={handleClose}
    //           >
    //             Cancel
    //           </Button>
    //           <Button
    //             style={{
    //               color: "white",
    //               background: "#58db83",
    //               fontSize: "11px",
    //               borderColor: "#58db83",
    //             }}
    //             onClick={handleClose}
    //           >
    //             Verified
    //           </Button>
    //         </Modal.Footer>
    //       </Modal>
    //     </>
    //   );
    // }

    