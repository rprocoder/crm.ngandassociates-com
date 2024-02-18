import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class CompanyForm extends React.Component {
    state = {
        username: "",
        email: "",
        phone:"",
        companyname:"",
        applicationname:"",
        token: localStorage.getItem('access_token1'),
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    editStudent = e => {
        e.preventDefault();
        axios.post("http://admin.ngandassociates.com/saveoldinfo/"+ this.state.token, this.state).then(res => {
            if (res.status === 200||res.status === 201||res.status === 204) {
                this.notify();
            }
            else{
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
    notify = () => toast.success("Old Data upload Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });


    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>
                    <Label for="username">User Name:</Label>
                    <Input
                        type="text"
                        name="username"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.username)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">User Email:</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Phone Number:</Label>
                    <Input
                        type="text"
                        name="phone"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.phone)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="companyname">Company Name:</Label>
                    <Input
                        type="text"
                        name="companyname"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.companyname)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="applicationname">Application Name:</Label>
                    <Input
                        type="text"
                        name="applicationname"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.applicationname)}
                    />
                </FormGroup>
                <Button style={{fontSize:"14.5px" , padding:"4px", paddingLeft:"15px", paddingRight:"15px", background:"#58db83", borderColor:"#58db83"}} >Submit</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default CompanyForm;
