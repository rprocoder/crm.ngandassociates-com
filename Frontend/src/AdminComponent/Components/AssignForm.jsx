import React from "react";
import { Button, Form, FormGroup} from "reactstrap";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AssignForm extends React.Component {
    state = {
        pk: 0,
        backenduser: "",
        token:localStorage.getItem('access_token3'),
    };
    constructor(props) {
        super(props);
        this.state = { data: [], token:localStorage.getItem('access_token3')};

    }
    componentDidMount() {
        if (this.props.student) {
            const { pk, userid, name, backenduser } = this.props.student;
            this.setState({ pk, userid, name, backenduser });
        }
        this.resetState();
    }

    getStudents = () => {
        axios
            .get("http://admin.ngandassociates.com/fetchbackenduser/"+this.state.token)
            .then(res => this.setState({ data: res.data }
            ));
    }
    resetState = () => {
        this.getStudents();
    }
    onChange1 = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    editStudent = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("backenduser", this.state.backenduser);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post("http://admin.ngandassociates.com/showworkstatus/" + this.state.token+"/"+this.state.pk, formData, config).then(res => {
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

    notify = () => toast.success("Assigned Sucessfully!",{
        position: toast.POSITION.TOP_CENTER
      });

    render() {
        return (
            <>
            <Form onSubmit={this.editStudent}>
                <FormGroup>

                    <div className="form-group dropdn">

                        <select
                            value={this.defaultIfEmpty(this.state.backenduser)}
                            className="form-control"
                            type="text"
                            style={{ borderRadius: '5px', width: '100%' }}
                            name="backenduser"
                            onChange={this.onChange1}
                        >
                            <option>--select-employee--</option>
                            {this.state.data.map((student) => {
                                return (
                                    <option>{student.name}</option>

                                );
                            })}
                        </select>

                    </div>
                </FormGroup>

                <Button style={{ fontSize: "13px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: "#58db83", borderColor: "#58db83" }}>Submit</Button>
            </Form>
            <ToastContainer />
            </>
        );
    }
}

export default AssignForm;
