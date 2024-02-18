import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import FieldForm from "./FieldForm";
import { AiFillCloseCircle } from "react-icons/ai";

class FieldModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        var title = "Change User Details:";
        var button = <Button onClick={this.toggle} style={{ marginTop:"2px", marginBottom:"2px", fontSize: "13.5px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: " #007aff", borderColor: " #007aff" }}> Update User Details +</Button>;

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader style={{ background: "#16cefe", color: "white" }}>{title} <AiFillCloseCircle onClick={this.toggle} style={{ marginLeft: "250px", position: "absolute", fontSize: "26px", }} /></ModalHeader>
                    <ModalBody>
                        <FieldForm />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default FieldModal;
