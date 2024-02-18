import React from "react";
import { Button, Form, FormGroup, Input, Label,  } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class DeliveryForm extends React.Component {
    state = {
        pk: 0,
        certificate:"",
        status1:"completed",
        token:localStorage.getItem('access_token1'),
    };

    componentDidMount() {
        if (this.props.student) {
            const { pk, certificate} = this.props.student;
            this.setState({ pk, certificate});
        }
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };



    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };
    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("certificate", this.state.certificate);
        formData.append("status1",this.state.status1);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/showorderrequirementdocument/" + this.state.token+"/"+this.state.pk, formData, config).then(res => {
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
                    <Label for="certificate">Upload Certificate Document:</Label>
                    <Input
                        type="file"
                        name="certificate"
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

export default DeliveryForm;
