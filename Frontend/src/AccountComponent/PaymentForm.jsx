import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class PaymentForm extends React.Component {
    state = {
        pk: 0,
        amount: "",
        paymentstatus:"Done",
        token:localStorage.getItem('access_token2'),
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, name, email, amount,} = this.props.student;
            this.setState({ pk, name, email, amount, });
        }
    }
    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("amount", this.state.amount);
        formData.append("paymentstatus", this.state.paymentstatus);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/addpayment/" + this.state.token+"/"+this.state.pk, formData,config).then(res => {
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
    notify = () => toast.success("Upload Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });

    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>
                    <Label for="amount">Invoice Amount:</Label>
                    <Input
                        type="text"
                        name="amount"
                        onChange={this.onChange1}
                        value={this.defaultIfEmpty(this.state.amount)}
                    />
                </FormGroup>
                <Button style={{fontSize:"13px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", background:"#58db83", borderColor:"#58db83"}} >Submit</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default PaymentForm;
