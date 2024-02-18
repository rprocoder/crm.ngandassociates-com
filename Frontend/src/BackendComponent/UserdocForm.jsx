import React from "react";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";

class UserdocForm extends React.Component {
    state = {
        token: localStorage.getItem('access_token1'),
        data: [],
        docname: null,
        formslist: [],
    }

    componentDidMount() {
        if (this.props.student) {
            const { pk, email,companyname } = this.props.student;
            this.setState({ pk, email,companyname });
        }

        this.resetState();

    }

   getStudents5 = () => {
        axios
            .get("http://admin.ngandassociates.com/olddocs/" + this.state.token)
            .then(res => this.setState({ formslist: res.data }
            ));
    }
    resetState = () => {
        this.getStudents5();
    }





    getStudents = async (docname) => {
        axios
            .get("http://admin.ngandassociates.com/document/" + docname + "/" + this.state.companyname + "/" + this.state.token)
            .then((res) => this.setState({ data: res.data }));
    };

    handleChange = (e) => {
        const docname = e.target.value;
        this.setState({ docname: e.target.value });
        this.getStudents(docname);
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <div className="form-group dropdn">
                        <label for="docname"> Select Document Name :</label>
                        <select
                            value={this.state.docname}
                            onChange={this.handleChange}
                            style={{ borderRadius: "5px", width: "100%" }}
                            name="docname"
                            type="text"
                            className="form-control"
                        >
                            <option>--Select-Document-Name--</option>
                            <option>All</option>
                            {this.state.formslist.map((e, key) => {
                                return <option key={key} value={e.docname}>{e.docname}</option>
                            })}
                        </select>
                    </div>
                </FormGroup>
                <FormGroup>
                    {this.state.data.map((student, index) => {
                        return (
                            <>
                                <FormGroup>
                                    <img key={index}
                                        src={student.docs}
                                        style={{ borderRadius: "5px", border: "2px solid gray" }}
                                        width="100%"
                                        height="100%"
                                        alt=""
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <a key={index} href={student.document}>{student.docname}</a>
                                </FormGroup>
                            </>
                        );
                    })}
                </FormGroup>
            </Form>
        );
    }
}

export default UserdocForm;
