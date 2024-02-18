import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class DataForm extends React.Component {
    state = {
        docname: "",
        docs: "",
        email: "",
        useremaillist:[],
        token: localStorage.getItem('access_token1'),
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("docs", this.state.docs);
        formData.append("docname", this.state.docname);
        formData.append("email", this.state.email);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/updatedoc/"+ this.state.token, formData, config).then(res => {
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
    notify = () => toast.success("Document upload Sucessfully!", {
        position: toast.POSITION.TOP_CENTER
    });

  componentDidMount() {
    axios
      .get("http://admin.ngandassociates.com/useremaillist/" + this.state.token)
      .then(res => this.setState({ useremaillist: res.data }
      ));
  }

  handleChange = (e) => {
    this.setState({ email: e.target.value });
  };
    render() {
        return (
            <>
                <Form onSubmit={this.editStudent}>
                    <FormGroup>
                        <label for="email"> Select Company Name :</label>
                        <select
                            value={this.state.email}
                            onChange={this.handleChange}
                            style={{ borderRadius: "5px", width: "100%" }}
                            className="form-control">
                            <option>--Select-User-Email--</option>
                            {this.state.useremaillist.map((e, key) => {
                                return <option key={key} value={e.companyname}>{e.companyname}</option>
                            })}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="docname">Documents Name:</Label>
                        <Input
                            type="text"
                            name="docname"
                            onChange={this.onChange}
                            value={this.defaultIfEmpty(this.state.docname)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="docs">Document Image:</Label>
                        <Input
                            type="file"
                            name="docs"
                            onChange={this.onChange1}
                        />
                    </FormGroup>
                    <Button style={{ fontSize: "14px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }}>Submit</Button>
                </Form>
                <ToastContainer />
            </>
        );
    }
}

export default DataForm;
