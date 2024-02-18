import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class QueryForm extends React.Component {
    state = {
        pk: 0,
        open_order: "",
        queries_in_uploading_document: "",
        pending_documents:"",
        plan_expire:"",
        documents:"",
        token: localStorage.getItem('access_token1'),
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk,  userid} = this.props.student;
            this.setState({ pk,  userid});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    editStudent = e => {
        e.preventDefault();
        axios.post("http://admin.ngandassociates.com/accountoverview/" + this.state.userid+"/"+ this.state.token, this.state).then(res => {
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
    notify = () => toast.success("Query upload Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });


    render() {
        return (
            <>
            <Form onSubmit={this.editStudent }>
                <FormGroup>
                    <Label for="open_order">Open Order Name:</Label>
                    <Input
                        type="text"
                        name="open_order"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.open_order)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="queries_in_uploading_document">Queries In Uploading Document:</Label>
                    <Input
                        type="text"
                        name="queries_in_uploading_document"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.queries_in_uploading_document)}
                    />
                </FormGroup>
 
                <FormGroup>
                    <Label for="pending_documents">Pending Documents:</Label>
                    <Input
                        type="text"
                        name="pending_documents"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.pending_documents)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="plan_expire">Plan Expire:</Label>
                    <Input
                        type="text"
                        name="plan_expire"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.plan_expire)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="documents">Documents:</Label>
                    <Input
                        type="text"
                        name="documents"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.documents)}
                    />
                </FormGroup>
                <Button style={{fontSize:"13px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", background:"#58db83", borderColor:"#58db83"}} >Submit</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default QueryForm;
