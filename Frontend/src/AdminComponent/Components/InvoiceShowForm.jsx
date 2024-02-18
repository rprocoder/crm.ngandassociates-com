import React from "react";
import { Form, FormGroup } from "reactstrap";

class InvoiceShowForm extends React.Component {

    state = {
        pk: 0,
        invoicedocument: "",
        certificate: "",
    }

    componentDidMount() {
        if (this.props.student) {
            const { pk, invoicedocument, certificate } = this.props.student;
            this.setState({ pk, invoicedocument, certificate });
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <div>
                        <label>Invoice:</label>
                        <img
                            src={this.state.invoicedocument}
                            style={{ borderRadius: "5px", border: "2px solid gray" }}
                            width="100%"
                            height="auto"
                            alt=""
                        />
                    </div>
                </FormGroup>
                <FormGroup>
                    <div>
                        <label>Certificate:</label>
                        <img
                            src={this.state.certificate}
                            style={{ borderRadius: "5px", border: "2px solid gray" }}
                            width="100%"
                            height="auto"
                            alt=""
                        />
                    </div>
                </FormGroup>
            </Form>
        );
    }
}

export default InvoiceShowForm;
