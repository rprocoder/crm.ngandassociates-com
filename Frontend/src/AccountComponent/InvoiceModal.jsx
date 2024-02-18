import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import InvoiceForm from "./InvoiceForm";
import {AiFillCloseCircle} from "react-icons/ai";

class InvoiceModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Upload Invoice";
    var button = <Button  onClick={this.toggle} style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px"}}>Upload</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}}>{title}<AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"280px", position:"absolute",fontSize:"26px",}}/></ModalHeader>
          <ModalBody>
            <InvoiceForm
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

export default InvoiceModal;
