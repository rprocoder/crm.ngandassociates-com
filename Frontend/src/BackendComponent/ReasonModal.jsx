import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReasonForm from "./ReasonForm";
import {AiFillCloseCircle} from "react-icons/ai";

class ReasonModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Upload User Application Cancel Reason:";
    var button = <Button onClick={this.toggle} style={{ fontSize:"10.5px" , padding:"4px", paddingLeft:"10px", paddingRight:"10px", background:" #ec536c", borderColor:" #ec536c"}}>Cancel
    </Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader style={{background:"#16cefe", color:"white"}}>{title} <AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"30px", position:"absolute",fontSize:"26px",}}/></ModalHeader>
          <ModalBody>
            <ReasonForm
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

export default ReasonModal;
