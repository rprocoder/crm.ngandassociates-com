import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ReasonForm extends React.Component {
    state = {
        pk: 0,
        reason: "",
        status1: "cancel",
        token: localStorage.getItem('access_token1'),
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, reason, userid} = this.props.student;
            this.setState({ pk, reason, userid });
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editStudent = e => {
        e.preventDefault();
        axios.post("http://admin.ngandassociates.com/api/reason/" + this.state.token+"/"+this.state.pk, this.state).then(res => {
            if (res.status === 200) {
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
    notify = () => toast.success("Reason upload Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });

    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>
                    <Label for="reason">Upload Reason:</Label>
                    <Input
                        type="text"
                        name="reason"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.reason)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="hidden"
                        name="status1"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.status1)}
                    />
                </FormGroup>
                <Button style={{ fontSize: "13px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }} >Submit</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default ReasonForm;
