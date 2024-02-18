import React, { useState, useEffect } from "react";
import { server } from "../../server";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
import { Typography, Button, Stepper, Step, StepLabel, StepConnector } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useForm, FormProvider } from "react-hook-form";
import SearchIcon from "@material-ui/icons/Search";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import PaymentIcon from "@material-ui/icons/Payment";
import clsx from "clsx";
import { Document, Page, pdfjs } from 'react-pdf';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  root: {
    backgroundColor: "#f5f6f7",
    padding: 6,
    color: "#404540",
    borderRadius: "50%",
    width: "68px",
    height: "68px",
    marginTop: "-20px",
    textAlign: "center",
    fontSize: "33px",
    border: "2px solid #e5e6e7",
  },
  alternativeLabel: {},

  active: {
    color: "#57b87b",
    backgroundColor: "white",
    border: "3px solid #57b87b",
  },
  completed: {
    color: "#57b87b",
    backgroundColor: "white",
    border: "3px solid #57b87b",
  },
}));

const QontoConnector = withStyles({
  alternativeLabel: {
    marginLeft: "13px",
    marginRight: "13px",
    backgroundColor: "white",
    border: "1px solid #e5e6e7 ",
  },
  active: {
    color: "#57b87b",
    border: "1px solid #57b87b",
  },
  completed: {
    color: "#57b87b",
    border: "1px solid #57b87b",
  },
})(StepConnector);

const CustomStepIcon = (props) => {
  const classes = useStyles();
  const { active, completed } = props;
  const stepIcons = {
    1: <SearchIcon style={{ fontSize: "35px" }} />,
    2: <FileCopyIcon style={{ fontSize: "35px" }} />,
    3: <PaymentIcon style={{ fontSize: "35px" }} />,
    4: <LibraryBooksIcon style={{ fontSize: "35px" }} />,
    5: <ShoppingCartIcon style={{ fontSize: "35px" }} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {stepIcons[String(props.icon)]}
    </div>
  );
};

function getSteps() {
  return [
    <b style={{ useStyles }}>Personal Information</b>,
    <b style={{ useStyles }}>Documents Details</b>,
    <b style={{ useStyles }}>Payment</b>,
    <b style={{ useStyles }}>Summary</b>,
    <b style={{ useStyles }}>Delivery</b>,
  ];
}

const BasicForm = () => {
  let history = useNavigate();
  const [bussinessoperationalstatus, setBussinessoperationalstatus] = useState(null);
  const [ageofbussiness, setAgeofbussiness] = useState(null);
  const [numberofemployees, setNumberofemployees] = useState(null);
  const [bussinessarea_category, setBussinessarea_category] = useState(null);
  const [servicename, setServicename] = useState("Copyright Registration");
  let token = localStorage.getItem("access_token");

  const addOrderrequirements1 = async () => {
    let formField = new FormData();
    formField.append("bussinessoperationalstatus", bussinessoperationalstatus);
    formField.append("ageofbussiness", ageofbussiness);
    formField.append("numberofemployees", numberofemployees);
    formField.append("bussinessarea_category ", bussinessarea_category);
    formField.append("servicename ", servicename);
    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/orderrequirements/${token}`,
      data: formField,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        notify1();
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

  const notify1 = () => {
    toast.success("upload sucessfully.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: true,
    });
  };
  return (
    <>
      <div
        className="content"
        style={{
          marginTop: "9px",
          padding: "30px",
          marginRight: "34px",
          border: "2px solid white",
          borderRadius: "8px",
          background: "#e9ecf0",
        }}
      >
        <form action>
          <div className="form-group">
            <label htmlFor="email">
              {" "}
              Is your business currently operational?{" "}
            </label>
            <select
              className="form-control"
              value={bussinessoperationalstatus}
              onChange={(e) => setBussinessoperationalstatus(e.target.value)}
              type="text"
              name="bussinessoperationalstatus"
              style={{
                border: "2px solid white",
                borderRadius: "6px",
              }}
            >
              <option>No-yet to start</option>
              <option>Yes - have been for a while</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Age of Business</label>
            <select
              value={ageofbussiness}
              onChange={(e) => setAgeofbussiness(e.target.value)}
              name="ageofbussiness"
              className="form-control"
              type="text"
              style={{
                border: "2px solid white",
                borderRadius: "6px",
              }}
            >
              <option>Less than 1 year</option>
              <option>1 to 2 years</option>
              <option>2 to 3 years</option>
              <option>3 to 4 years</option>
              <option>4 to 5 years</option>
              <option>5 to 6 years</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Number of Employees</label>
            <select
              value={numberofemployees}
              onChange={(e) => setNumberofemployees(e.target.value)}
              name="numberofemployees"
              className="form-control"
              type="text"
              style={{
                border: "2px solid white",
                borderRadius: "6px",
              }}
            >
              <option>Less than 20 Employess</option>
              <option>20 to 50 Employess</option>
              <option>50 to 100 Employess</option>
              <option>100 to 150 Employess</option>
              <option>150 to 200 Employess</option>
              <option>200 to 250 Employess</option>
            </select>
            <input type="hidden"
              className="form-control"
              name="servicename"
              value={servicename}
              onChange={(e) => setServicename(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Business Area / Category</label>
            <textarea
              type="text"
              className="form-control"
              style={{
                border: "2px solid white",
                borderRadius: "6px",
              }}
              name="bussinessarea_category"
              value={bussinessarea_category}
              onChange={(e) => setBussinessarea_category(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              The actual cost of your registration may vary depending on
              location and type of business. Please enter the details correctly
              for right pricing.
            </label>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-primary btn-block"
            aria-controls="strategy"
            role="tab"
            data-toggle="tab"
            onClick={() => {
              addOrderrequirements1();

            }}
          >
            submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const ContactForm = () => {
  let history = useNavigate();
  const [message, setMessage] = useState("");
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [directorsphotograph, setDirectorsphotograph] = useState(null);
  const [electricitybill, setElectricitybill] = useState(null);
  const [rentagrement, setRentagrement] = useState(null);
  const [photoofproduct, setphotoofproduct] = useState(null);
  const [photoofpremises, setPhotoofpremises] = useState(null);
  const [incorporationdoc, setIncorporationdoc] = useState(null);
  const [partnershipdeed, setPartnershipdeep] = useState(null);
  const [otherdoc, setOtherdoc] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [servicename, setServicename] = useState('Copyright Registration');
  let token = localStorage.getItem("access_token");
  const notify = () => {
    toast.success("upload sucessfully.", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: true,
    });
  };
  const addOrderrequirements = async () => {
    let formField = new FormData();
    formField.append("servicename", servicename);
    formField.append("directorsphotograph", directorsphotograph);
    formField.append("electricitybill", electricitybill);
    formField.append("rentagrement", rentagrement);
    formField.append("photoofproduct", photoofproduct);
    formField.append("photoofpremises", photoofpremises);
    formField.append("incorporationdoc", incorporationdoc);
    formField.append("partnershipdeed", partnershipdeed);
    formField.append("otherdoc", otherdoc);

    await axios({
      method: "post",
      url: `http://admin.ngandassociates.com/Orderrequirementdocuments/${token}`,
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

  const fetchCompanydocuments = async () => {
    const result = await axios.get(
      `http://admin.ngandassociates.com/showuserdocument/${token}`
    );
    if (result.data[0].directorsphotograph !== null) {
      let text = result.data[0].directorsphotograph
      let len = text.length
      if (len > 48) {
        setMessage("* Photograpgh is already submitted.");
      }
    }
    if (result.data[0].electricitybill !== null) {
      let text = result.data[0].electricitybill
      let len = text.length
      if (len > 48) {
        setMessage1("* Document is already submitted.");
      }
    }
    if (result.data[0].rentagrement !== null) {
      let text = result.data[0].rentagrement
      let len = text.length
      if (len > 48) {
        setMessage2("* Document is already submitted.");
      }
    } if (result.data[0].photoofproduct !== null) {
      let text = result.data[0].photoofproduct
      let len = text.length
      if (len > 48) {
        setMessage3("* Photograpgh is already submitted.");
      }
    }
    if (result.data[0].photoofpremises !== null) {
      let text = result.data[0].photoofpremises
      let len = text.length
      if (len > 48) {
        setMessage4("* Photograpgh is already submitted.");
      }
    }
    if (result.data[0].partnershipdeed !== null) {
      let text = result.data[0].partnershipdeed
      let len = text.length
      if (len > 48) {
        setMessage5("* Document is already submitted.");
      }
    }
    if (result.data[0].incorporationdoc !== null) {
      let text = result.data[0].incorporationdoc
      let len = text.length
      if (len > 48) {
        setMessage6("* Document is already submitted.");
      }
    }
    setDocuments(result.data);
  };

  useEffect(() => {
    fetchCompanydocuments();
  }, []);




  return (
    <>
      <div
        className="content"
        style={{
          marginTop: "9px",
          padding: "30px",
          marginRight: "34px",
          border: "2px solid white",
          borderRadius: "8px",
          background: "#e9ecf0",
        }}
      >
        <form action>
          <div className="form-group">
            <label htmlFor="email">* Upload Password Size Photograph :</label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message}</p>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setDirectorsphotograph(e.target.files[0])}
                multiple
              />
              <input type="hidden"
                className="form-control"
                name="servicename"
                value={servicename}
                onChange={(e) => setServicename(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">* Electricity Bill or any other utility bill for the address proof
              of the Registered Office :</label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message1}</p>
            <div className="field" align="left">
              <input
                type="file"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                className="form-control"
                onChange={(e) => setElectricitybill(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">
              * Proof of Premises (Rent Agrement):
            </label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message2}</p>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setRentagrement(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">* Product Details if Any(Photos of Product):</label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message3}</p>
            <div className="field" align="left">
              <input
                type="file"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                className="form-control"
                onChange={(e) => setphotoofproduct(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">
              * Photos of Business Unit/Premises :
            </label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message4}</p>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setPhotoofpremises(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">
              * Incase of Company , Company Incorporation Doc :
            </label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message5}</p>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setIncorporationdoc(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">* Incase of Partnership (Upload Partnership Deed image) :</label>
            <p style={{ color: "red", marginBottom: "1px", marginTop: "-5px" }}>{message6}</p>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setPartnershipdeep(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="pwd">* Other Document :</label>
            <div className="field" align="left">
              <input
                type="file"
                className="form-control"
                style={{
                  border: "2px solid white",
                  borderRadius: "6px",
                }}
                onChange={(e) => setOtherdoc(e.target.files[0])}
                multiple
              />
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-primary btn-block"
            aria-controls="strategy"
            role="tab"
            data-toggle="tab"
            onClick={() => {
              addOrderrequirements();
              notify();
            }}
          >
            submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

const PersonalForm = () => {
  const [name, setName] = useState("Copyright Registration");
  const [amount, setAmount] = useState("");
  let token = localStorage.getItem("access_token");

  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();
      bodyData.append("response", JSON.stringify(response));
      await Axios({
        url: `${server}/razorpay/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setName("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);

    const data = await Axios({
      url: `${server}/razorpay/pay/${token}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    var options = {
      key_id: process.env.REACT_APP_PUBLIC_KEY,
      key_secret: process.env.REACT_APP_SECRET_KEY,
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Org. Name",
      description: "Test teansaction",
      image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div
        className="content"
        style={{
          marginTop: "9px",
          padding: "30px",
          marginRight: "34px",
          border: "2px solid white",
          borderRadius: "8px",
          background: "#e9ecf0",
        }}
      >
        <h5 style={{ marginTop: "2px", fontSize: "16px" }}>Payment options</h5>
        <div className="payment">
          <div className="form-group">
            <label htmlFor="name" style={{ fontSize: "14px" }}>
              Service name :
            </label>
            <select
              style={{
                border: "2px solid white",
                borderRadius: "6px",
              }}
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option>Copyright Registration</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" style={{ fontSize: "14px" }}>
              {" "}
              Amount :
            </label>
            <input
              type="text"
              style={{
                border: "2px solid white",
                borderRadius: "8px",
              }}
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button onClick={showRazorpay} className="btn btn-primary btn-block">
            {" "}
            Pay Now{" "}
          </button>
        </div>
      </div>
    </>
  );
};

const SummaryForm = () => {
  const [servicename] = useState('Copyright Registration');
  const [documents, setDocuments] = useState([]);
  let token = localStorage.getItem("access_token");
  const fetchCompanydocuments = async () => {
    const result = await axios.get(
      `http://admin.ngandassociates.com/showorderrequirementdocuments/${servicename}/${token}`
    );

    console.log(result.data);
    setDocuments(result.data);
  };

  useEffect(() => {
    fetchCompanydocuments();
  }, []);

  return (
    <>
      <div
        className="content"
        style={{
          marginTop: "9px",
          padding: "30px",
          marginRight: "34px",
          border: "2px solid white",
          borderRadius: "8px",
          background: "#e9ecf0",
        }}
      >
        <form action>
          <div className="table-responsive">
            <table className="table table-sm m-0">
              <thead>
                <tr style={{ fontSize: "15px" }}>
                  <th>Document Upload</th>
                  <th>Payment</th>
                  <th>Documents Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.directorsphotograph} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.electricitybill} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.rentagrement} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.photoofproduct} />
                      ))}
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.photoofpremises} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.incorporationdoc} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.partnershipdeed} />
                      ))}
                    </div>
                    <div className="verified_d" >
                      {documents.map((document, index) => (
                        <img src={document.otherdoc} />
                      ))}
                    </div>
                  </td>
                  <td>
                    {documents.map((document, index) => (
                      <button
                        className="btn btn btn-sm"
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          color: "white",
                          borderColor: "#5856d6",
                          backgroundColor: "#5856d6"
                        }}
                      >
                        {document.paymentstatus}
                      </button>
                    ))}
                  </td>
                  <td>
                    {documents.map((document, index) => (
                      <button
                        className="btn btn btn-sm"
                        style={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          color: "white",
                          borderColor: "#e74c3c",
                          backgroundColor: "#e74c3c"
                        }}
                      >
                        {document.documentstatus}
                      </button>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>      </div>
    </>
  );
};


const DeliveryForm = () => {
  const [servicename] = useState('Copyright Registration');
  const [documents, setDocuments] = useState([]);
  let token = localStorage.getItem("access_token");
  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchCompanydocuments = async () => {
    const result = await axios.get(
      `http://admin.ngandassociates.com/showorderrequirementdocuments/${servicename}/${token}`
    );

    console.log(result.data);
    setDocuments(result.data);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  useEffect(() => {
    fetchCompanydocuments();
  }, []);



  return (
    <>
      <div
        className="content"
        style={{
          marginTop: "9px",
          padding: "30px",
          marginRight: "34px",
          border: "2px solid white",
          borderRadius: "8px",
          background: "#e9ecf0",
        }}
      >
        {" "}
        <form action>
          <div className="row">
            <div className="col-lg-4">
              <h6>Certificate :</h6>
              {documents.map((document, index) => (
                <img
                  src={document.certificate}
                  width="100%"
                  height="auto"
                  alt="Certificate Under Process"
                  download
                />
              ))}
            </div>
            <div className="col-lg-4">
              <h6>Receipt :</h6>{" "}
              {documents.map((invoice, index) => (
                <Document
                  file={invoice.invoicedocument}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
              ))}
            </div>
            {/* <div className="col-lg-6" style={{ fontSize: "14px", marginTop:"10px" }}>
                  <a href="#" className="btn btn-success" alt="" download>
                    Download all Document
                  </a>
                </div> */}
          </div>
        </form>
      </div>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;
    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <SummaryForm />;
    case 4:
      return <DeliveryForm />;
    default:
      return "unknown step";
  }
}

const CopyrightRegistration = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const handleNext = (data) => {
    console.log(data);
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
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
                  <h4 className="page-title" style={{ textAlign: "center" }}>
                    Copyright Registration
                  </h4>
                  <ol className="breadcrumb"></ol>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}
            <div className="row">
              <div className="col-lg-12">
                <div className="card m-b-20" style={{}}>
                  {/* end row */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="design-process-section" id="process-tab">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="table-responsive">
                              <Stepper
                                alternativeLabel
                                activeStep={activeStep}
                                connector={<QontoConnector />}
                              >
                                {steps.map((step, index) => {
                                  const labelProps = {};
                                  const stepProps = {};

                                  return (
                                    <Step {...stepProps} key={index}>
                                      <StepLabel
                                        {...labelProps}
                                        StepIconComponent={CustomStepIcon}
                                        onClick={handleStep(index)}
                                      >
                                        {step}
                                      </StepLabel>
                                    </Step>
                                  );
                                })}
                              </Stepper>

                              {activeStep === steps.length ? (
                                <Typography variant="h3" align="center">
                                  Thank You
                                </Typography>
                              ) : (
                                <>
                                  <FormProvider {...methods}>
                                    <form
                                      onSubmit={methods.handleSubmit(
                                        handleNext
                                      )}
                                    >
                                      {getStepContent(activeStep)}

                                      <Button
                                        className={classes.button}
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        style={{
                                          color: "white",
                                          backgroundColor: "gray",
                                          border: "1px-solid-gray",
                                        }}
                                      >
                                        back
                                      </Button>

                                      <Button
                                        className={classes.button}
                                        variant="contained"
                                        color="primary"
                                        // onClick={handleNext}
                                        type="submit"
                                        style={{
                                          border: "1px-solid-#7a6fbe",
                                          backgroundColor: "#7a6fbe",
                                        }}
                                      >
                                        {activeStep === steps.length - 1
                                          ? "Finish"
                                          : "Next"}
                                      </Button>
                                    </form>
                                  </FormProvider>
                                </>
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
  );
};

export default CopyrightRegistration;