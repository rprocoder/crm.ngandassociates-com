import React from "react";
import { Form, FormGroup, } from "reactstrap";

class ReasonForm extends React.Component {

    state = {
        pk: 0,
        reason: "",
    }
      componentDidMount() {
        if (this.props.student) {
            const { pk, reason } = this.props.student;
            this.setState({ pk,  reason });
        }
    }


    render() {
        return (
            <Form>
                <FormGroup>
                <div>
                        <label>Reason:</label>
<br/>
                        <textarea cols="40" rows="3" value={this.state.reason}  editable={false} />

                    </div>
                </FormGroup>
            </Form>
        );
    }
}

export default ReasonForm;
