import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class BackendUserForm extends React.Component {
    state = {

        email: "",
        name: "",
        password: "",
        roletype: "",
        token:localStorage.getItem('access_token3'),
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    editStudent = e => {
        e.preventDefault();
        axios.post("http://admin.ngandassociates.com/backenduserregister/"+ this.state.token, this.state).then(res => {
            if (res.status === 200 || res.status === 201 ) {
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
    notify = () => toast.success("Create Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });

    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>
                    <Label for="email">Enter the Email:</Label>
                    <Input
                        type="text"
                        name="email"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.email)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Enter the Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Enter the Password:</Label>
                    <Input
                        type="text"
                        name="password"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.password)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="roletype">Enter the roletype:</Label>
                    <select
                        className="form-control"
                        type="text"
                        style={{ borderRadius: '5px', width: '100%' }}
                        name="roletype"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.roletype)}
                    >
                        <option>--Select-Role--</option>
                        <option>Backend User</option>
                        <option>Account User</option>
                    </select>
                </FormGroup>
                <Button style={{ fontSize: "13px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }} >Create</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default BackendUserForm;
