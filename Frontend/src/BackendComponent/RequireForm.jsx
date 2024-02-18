import React from "react";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";


class RequireForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], token: localStorage.getItem('access_token1') };
    }

    componentDidMount() {
        this.getStudents1();
    }

    getStudents1 = () => {
        axios
            .get("http://admin.ngandassociates.com/userrequirement/"+this.state.token)
            .then(res => this.setState({ data: res.data }
            )
            );
    }
    render() {
        return (
            <>
                <Form>
                    <FormGroup>
                        {this.state.data.map((student) => {
                            return (
                                <div >
                                    <label>Bussiness Operational Status:</label>
                                    <br />
                                    <textarea cols="50" rows="1" value={student.bussinessoperationalstatus} editable={false} />
                                </div>
                            );
                        })}
                    </FormGroup>
                    <FormGroup>
                        {this.state.data.map((student) => {
                            return (
                                <div>
                                    <label>Age of Bussiness:</label>
                                    <br />
                                    <textarea cols="50" rows="1" value={student.ageofbussiness} editable={false} />
                                </div>
                            );
                        })}
                    </FormGroup>
                    <FormGroup>
                        {this.state.data.map((student) => {
                            return (
                                <div>
                                    <label>Number of Employees:</label>
                                    <br />
                                    <textarea cols="50" rows="1" value={student.numberofemployees} editable={false} />
                                </div>
                            );
                        })}
                    </FormGroup>
                    <FormGroup>
                        {this.state.data.map((student) => {
                            return (
                                <div>
                                    <label>Bussiness Area Category :</label>
                                    <br />
                                    <textarea cols="50" rows="3" value={student.bussinessarea_category} editable={false} />
                                </div>
                            );
                        })}
                    </FormGroup>
                </Form>
            </>
        );
    }
}

export default RequireForm;
