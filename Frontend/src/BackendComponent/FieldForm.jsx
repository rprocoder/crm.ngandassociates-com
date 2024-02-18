import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class FieldForm extends React.Component {
    state = {
        fieldname: "",
        email: "",
        useremaillist: [],
        data: [],
        useremail:"",
        updatevalue: "",
        token: localStorage.getItem('access_token1'),
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("updatevalue", this.state.updatevalue);
        formData.append("email", this.state.email);
        formData.append("fieldname", this.state.fieldname);
        formData.append("useremail", this.state.useremail);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/updatedet/" + this.state.token, formData, config).then(res => {
            if (res.status === 200 || res.status === 201 || res.status === 204) {
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
    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };
    notify = () => toast.success("User Details Update Sucessfully!", {
        position: toast.POSITION.TOP_CENTER
    });

    componentDidMount() {
        axios
            .get("http://admin.ngandassociates.com/useremaillist/" + this.state.token)
            .then(res => this.setState({ useremaillist: res.data }
            ));
    }

    getStudents = async (email) => {
        axios
            .get("http://admin.ngandassociates.com/companyemail/" + email + "/" + this.state.token)
            .then((res) => this.setState({ data: res.data }));
    };

    handleChange = (e) => {
        const email = e.target.value;
        this.setState({ email: e.target.value });
        this.getStudents(email);
    };
    handleChange2 = (e) => {
        this.setState({ useremail: e.target.value });
        
    };


    handleChange1 = (e) => {
        this.setState({ fieldname: e.target.value });
    };

    onChange = e => {
        this.setState({ updatevalue: e.target.value });
    };

    render() {
        return (
            <>
                <Form onSubmit={this.editStudent}>
                    <FormGroup>
                        <label for="email"> Select Company Name:</label>
                        <select
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{ borderRadius: "5px", width: "100%" }}
                            className="form-control">
                            <option>--Select-User-Company-Name--</option>
                            {this.state.useremaillist.map((e, key) => {
                                return <option key={key} value={e.companyname}>{e.companyname}</option>
                            })}
                        </select>
                    </FormGroup>


                    <FormGroup>
                        <label for="email"> Select User Email:</label>
                        <select
                            value={this.state.useremail}
                            onChange={this.handleChange2}
                            style={{ borderRadius: "5px", width: "100%" }}
                            className="form-control">
                            <option>--Select-User-Email--</option>
                            {this.state.data.map((e, key) => {
                                return <option key={key} value={e.oldid}>{e.email}</option>
                            })}
                        </select>
                    </FormGroup>




                    <FormGroup>
                        <label for="fieldname"> Select Field Name :</label>
                        <select
                            value={this.state.fieldname}
                            onChange={this.handleChange1}
                            style={{ borderRadius: "5px", width: "100%" }}
                            className="form-control">
                            <option>--Select-Field-Name--</option>
                            <option>User Name</option>
                            <option>Phone</option>
                            <option>Email</option>
                            <option>Application Name</option>
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="updatevalue">Updated Value:</Label>
                        <Input
                            type="text"
                            name="updatevalue"
                            onChange={this.onChange}
                            value={this.defaultIfEmpty(this.state.updatevalue)}
                        />
                    </FormGroup>
                    <Button style={{ fontSize: "14px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }}>Submit</Button>
                </Form>
                <ToastContainer />
            </>
        );
    }
}

export default FieldForm;
