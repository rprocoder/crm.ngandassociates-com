import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InvoiceShowForm from "./InvoiceShowForm";
import { AiFillCloseCircle } from "react-icons/ai";

class InvoiceShowModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "User Application Documents:";
    var button = <Button onClick={this.toggle} style={{ fontSize: "10.5px", padding: "5px", paddingLeft: "14px", paddingRight: "14px", background: "rgb(76, 217, 100)", borderColor: "rgb(76, 217, 100)" }}>View</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader style={{ background: "#16cefe", color: "white" }}>{title} <AiFillCloseCircle onClick={this.toggle} style={{ marginLeft: "150px", position: "absolute", fontSize: "26px", }} /></ModalHeader>
          <ModalBody>
            <InvoiceShowForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              student={this.props.student}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default InvoiceShowModal;
