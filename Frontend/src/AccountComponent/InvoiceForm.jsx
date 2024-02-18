import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class InvoiceForm extends React.Component {
    state = {
        pk: 0,
        invoicedocument: "",
        token:localStorage.getItem('access_token2'),
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, name, email, servicename, date, invoicedocument } = this.props.student;
            this.setState({ pk, name, email, servicename, date, invoicedocument });
        }

    }
    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("invoicedocument", this.state.invoicedocument);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/api/showorderrequirementdocument/" + this.state.token+"/"+this.state.pk, formData, config).then(res => {
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
    notify = () => toast.success("Upload Sucessfully!",{
    position: toast.POSITION.TOP_CENTER
  });
    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>
                    <Label for="invoicedocument">Invoice Document:</Label>
                    <Input
                        type="file"
                        name="invoicedocument"
                        onChange={this.onChange1}
                    />
                </FormGroup>
                <Button style={{fontSize:"13px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", background:"#58db83", borderColor:"#58db83"}}>Upload</Button>
            </Form>
             <ToastContainer />
             </>
        );
    }
}

export default InvoiceForm;
