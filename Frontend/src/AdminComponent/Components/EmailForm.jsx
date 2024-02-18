import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EmailForm extends React.Component {
    state = {
        sub: "",
        message: "",
        token: localStorage.getItem('access_token3'),
    };
    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("message", this.state.message);
        formData.append("sub", this.state.sub);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/sendmes/" + this.state.token, formData, config).then(res => {
            if (res.status === 200 || res.status === 202) {
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

    notify = () => toast.success("Send Reminder Sucessfully!", {
        position: toast.POSITION.TOP_CENTER
    });


    render() {
        return (
            <>
                <Form onSubmit={this.editStudent}>
                    <FormGroup>
                        <Label for="sub">Subject:</Label>
                        <br />
                        <textarea
                            cols="40"
                            rows="2"
                            type="text"
                            name="sub"
                            onChange={this.onChange1}
                            value={this.defaultIfEmpty(this.state.sub)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <br />
                        <textarea
                            cols="40"
                            rows="3"
                            type="text"
                            name="message"
                            onChange={this.onChange1}
                            value={this.defaultIfEmpty(this.state.message)}
                        />
                    </FormGroup>
                    <Button style={{ fontSize: "13px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }}>Send Mail</Button>
                </Form>
                <ToastContainer />
            </>
        );
    }
}

export default EmailForm;