import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InvoiceShowForm from "./InvoiceShowForm";
import { AiFillCloseCircle } from "react-icons/ai";

class QueryModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "User Application Invoice:";
    var button = <Button onClick={this.toggle} style={{ fontSize: "10.5px", padding: "4px", paddingLeft: "10px", paddingRight: "10px", background: " #007aff", borderColor: " #007aff" }}>View</Button>;
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={{ background: "#16cefe", color: "white" }}>{title} <AiFillCloseCircle onClick={this.toggle} style={{ marginLeft: "185px", position: "absolute", fontSize: "26px", }} /></ModalHeader>
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

export default QueryModal;
