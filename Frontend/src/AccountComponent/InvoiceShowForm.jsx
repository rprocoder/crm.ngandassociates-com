import React from "react";
import { Form, FormGroup } from "reactstrap";

class InvoiceShowForm extends React.Component {

    state = {
        pk: 0,
        invoicedocument: "",
    }

    componentDidMount() {
        if (this.props.student) {
            const { pk, invoicedocument } = this.props.student;
            this.setState({ pk, invoicedocument });
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <div>
                        {/* <label>User Invoice:</label> */}
                        <img
                            src={this.state.invoicedocument}
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
