import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import BackendUserForm from './BackendUserForm';
import { AiFillCloseCircle } from "react-icons/ai";

class BackendUserModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        var title = "Add New Employee:";
        var button = <Button onClick={this.toggle} style={{fontSize: "13px", padding: "3px", background:"rgb(76, 217, 100)", borderColor:"rgb(76, 217, 100)"  ,paddingLeft: "10px", paddingRight: "10px", marginTop:"5px", marginBottom:"-5px" }}> Add New Employee +</Button>;
        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader style={{ background: "#16cefe", color: "white" }}>{title} <AiFillCloseCircle onClick={this.toggle} style={{ marginLeft: "223px", position: "absolute", fontSize: "26px", }} /></ModalHeader>
                    <ModalBody>
                        <BackendUserForm
                            toggle={this.toggle}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default BackendUserModal;
