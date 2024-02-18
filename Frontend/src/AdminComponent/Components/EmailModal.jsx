import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import {AiFillCloseCircle} from "react-icons/ai";
import EmailForm from './EmailForm'

class EmailModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    var title = "Add Reminder (Message)";
    var button = <Button  onClick={this.toggle} style={{ fontSize:"11.5px" , padding:"5px", paddingLeft:"30px", paddingRight:"30px", marginBottom:"10px", marginTop:"-10px", background:"#00ff99",borderColor:"#00ff99"}}>Send Reminder +</Button>;

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader  style={{background:"#16cefe", color:"white"}}>{title}<AiFillCloseCircle onClick={this.toggle} style={{marginLeft:"200px", position:"absolute",fontSize:"26px",}}/></ModalHeader>
          <ModalBody>
           <EmailForm/>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default EmailModal;