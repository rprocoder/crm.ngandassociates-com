import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AssignForm from './AssignForm';
import { AiFillCloseCircle } from "react-icons/ai";

class AssignModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Assign Application To Backend Employee:";
    var button = <Button onClick={this.toggle} style={{ fontSize: "10.6px", padding: "5px", paddingLeft: "10px", paddingRight: "10px", backgroundColor:"#e74c3c", borderColor:"#e74c3c"  }}> Assign </Button>;
    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader style={{ background: "#16cefe", color: "white" }}>{title} <AiFillCloseCircle onClick={this.toggle} style={{ marginLeft: "20px", position: "absolute", fontSize: "26px", }} /></ModalHeader>
          <ModalBody>
            <AssignForm
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

export default AssignModal;
