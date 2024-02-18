import React from "react";
import { Button, Form, FormGroup } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class DocumentForm extends React.Component {

    state = {
        pk: 0,
        directorsphotograph: "",
        directorspancard: "",
        idproof: "",
        dinofdirectors: "",
        electricitybill: "",
        residentialproof: "",
        moa: "",
        aoa: "",
        documentstatus: "Verified",
        token: localStorage.getItem('access_token1'),
        data: [],
        data1: [],
    }

    


    componentDidMount() {
        if (this.props.student) {
            const { pk, otherdoc } = this.props.student;
            this.setState({ pk, otherdoc });
        }
        this.resetState2()
    }

    getStudents2 = () => {
        axios
            .get("http://admin.ngandassociates.com/docs/" + this.state.token)
            .then(res => this.setState({ data: res.data }
            )
            );
    }

    getStudents3 = () => {
        axios
            .get("http://admin.ngandassociates.com/showuserdocs/"+ this.state.token)
            .then(res => this.setState({ data1: res.data }
            )
            );
    }

    resetState2 = () => {
        this.getStudents3();
        this.getStudents2();
    }


    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("documentstatus", this.state.documentstatus);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/adddocument/" + this.state.token + "/" + this.state.pk, formData, config).then(res => {
            if (res.status === 200) {
                this.notify();
            }
            else {
                throw Error("This form is not upload!");
            }
        }).catch(error => {
            toast.error(error.message, {
                position: toast.POSITION.TOP_CENTER
            })
        });
    };


    notify = () => toast.success("Verified Sucessfully!", {
        position: toast.POSITION.TOP_CENTER
    });


    render() {
        return (
            <>
                <Form onSubmit={this.editStudent}>
                    <FormGroup><div>
                        <label>Addhar Card:</label>
                        {this.state.data.map((student) => {
                            return (
                                <img
                                    src={student.addhar}
                                    style={{ borderRadius: "5px", border: "2px solid gray" }}
                                    width="100%"
                                    height="auto"
                                    alt=""
                                />
                            );
                        })}
                    </div>
                    </FormGroup>
                    <FormGroup><div>
                        <label>Pan Card:</label>
                        {this.state.data.map((student) => {
                            return (
                                <img
                                    src={student.pan}
                                    style={{ borderRadius: "5px", border: "2px solid gray" }}
                                    width="100%"
                                    height="auto"
                                    alt=""
                                />
                            );
                        })}
                    </div>
                    </FormGroup>
                    <FormGroup><div>
                        <label>Gst Certificate:</label>
                        {this.state.data.map((student) => {
                            return (
                                <img
                                    src={student.gst}
                                    style={{ borderRadius: "5px", border: "2px solid gray" }}
                                    width="100%"
                                    height="auto"
                                    alt=""
                                />
                            );
                        })}
                    </div>
                    </FormGroup>
                    <FormGroup><div>
                        <label>Other Documents:</label>
                        {this.state.data.map((student) => {
                            return (
                                <img
                                    src={student.other}
                                    style={{ borderRadius: "5px", border: "2px solid gray" }}
                                    width="100%"
                                    height="auto"
                                    alt=""
                                />
                            );
                        })}
                    </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Directors Photograph:</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.directorsphotograph}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                            );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Electricity Bill :</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.electricitybill}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                            );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Proof Of Premises(Rent Agrement):</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.rentagrement}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                                 );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Product Details :</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.photoofproduct}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                                 );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Photo Of Business Unit / Premises:</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.photoofpremises}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                                 );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Incorporation Documents:</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.incorporationdoc}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                                 );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <label>Partnership Deed:</label>
                            {this.state.data1.map((student) => {
                            return (
                            <img
                                src={student.partnershipdeed}
                                style={{ borderRadius: "5px", border: "2px solid gray" }}
                                width="100%"
                                height="auto"
                                alt=""
                            />
                                 );
                        })}
                        </div>
                    </FormGroup>
                    <FormGroup><div>
                        <label>Other Documents:</label>
                        <img
                            src={this.state.otherdoc}
                            style={{ borderRadius: "5px", border: "2px solid gray" }}
                            width="100%"
                            height="auto"
                            alt=""
                        />
                    </div>
                    </FormGroup>
                    <Button style={{ fontSize: "13px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }}>Verified</Button>
                </Form>
                <ToastContainer />
            </>
        );
    }
}

export default DocumentForm;
